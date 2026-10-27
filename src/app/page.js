"use client";

import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import About from "@/components/About";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import { circles } from "./circles.js";
import { motion, useReducedMotion } from "motion/react";
import AITools from "@/components/AITools";

const pageSections = [
  { id: "home", Component: Header },
  { id: "about", Component: About },
  { id: "service", Component: Services },
  { id: "work", Component: Work },
  { id: "ai-tools", Component: AITools },
  { id: "contact", Component: Contact },
  { id: "footer", Component: Footer },
];

function AnimatedSection({ Component, isDarkMode, reduceMotion }) {
  return (
    <motion.div
      initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 45 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{
        once: true,
        amount: 0.08,
        margin: "0px 0px -40px 0px",
      }}
      transition={{
        duration: reduceMotion ? 0 : 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <Component isDarkMode={isDarkMode} />
    </motion.div>
  );
}

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showTopButton, setShowTopButton] = useState(false);
  const reduceMotion = useReducedMotion();

  // Load saved theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;

    setIsDarkMode(savedTheme ? savedTheme === "dark" : prefersDark);
  }, []);

  // Apply theme
  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);

    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  // Back to Top visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowTopButton(window.scrollY > 350);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: reduceMotion ? "auto" : "smooth",
    });
  };

  return (
    <>
      {/* Background animation */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        {circles}
      </div>

      {/* Navigation */}
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

      {/* Smooth reveal animations */}
      <main>
        {pageSections.map(({ id, Component }) => (
          <AnimatedSection
            key={id}
            Component={Component}
            isDarkMode={isDarkMode}
            reduceMotion={reduceMotion}
          />
        ))}
      </main>

      {/* Animated Back to Top button */}
      <motion.button
        initial={false}
        animate={
          showTopButton
            ? {
                opacity: 1,
                scale: 1,
                y: 0,
              }
            : {
                opacity: 0,
                scale: 0.75,
                y: 15,
              }
        }
        whileHover={
          reduceMotion
            ? {}
            : {
                scale: 1.1,
                y: -3,
              }
        }
        whileTap={{ scale: 0.92 }}
        transition={{
          duration: 0.3,
          ease: "easeOut",
        }}
        onClick={scrollToTop}
        disabled={!showTopButton}
        className="fixed bottom-6 right-6 z-50
          rounded-full p-3.5
          bg-primary hover:bg-secondary
          dark:bg-gray-700 dark:hover:bg-gray-600
          text-black dark:text-white
          shadow-xl shadow-black/10
          transition-colors duration-300
          disabled:pointer-events-none"
        aria-label="Back to top"
        aria-hidden={!showTopButton}
      >
        <motion.span
          className="block text-xl leading-none"
          animate={reduceMotion ? {} : { y: [0, -3, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          ↑
        </motion.span>
      </motion.button>
    </>
  );
}
