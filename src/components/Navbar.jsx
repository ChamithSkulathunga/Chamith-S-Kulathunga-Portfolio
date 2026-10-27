
"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import { motion, AnimatePresence } from "motion/react";

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isScroll, setIsScroll] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const sideMenuRef = useRef(null);

  const openMenu = () => {
    setIsMenuOpen(true);
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = "translateX(0)";
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = "translateX(100%)";
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 30);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "Home", href: "#top" },
    { name: "About me", href: "#about" },
    { name: "Services", href: "#service" },
    { name: "My work", href: "#work" },
    { name: "Contact me", href: "#contact" },
  ];

  return (
    <>
      {/* Background decoration */}
      <div className="fixed top-0 right-0 w-11/12 -z-10 -translate-y-[80%] dark:hidden pointer-events-none">
        <Image
          src={assets.header_bg_color}
          alt=""
          className="w-full"
          priority
        />
      </div>

      {/* Navbar */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className={`fixed top-0 left-0 w-full z-50 px-5 lg:px-8 xl:px-[8%] py-4 transition-all duration-500 ${
          isScroll
            ? "bg-white/75 backdrop-blur-xl shadow-sm border-b border-gray-200/60 dark:bg-darkTheme/80 dark:border-white/10 dark:shadow-black/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1600px] mx-auto flex items-center justify-between gap-4">
          {/* Logo */}
          <motion.a
            href="#top"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            aria-label="Go to homepage"
            className="shrink-0"
          >
            <Image
              src={isDarkMode ? assets.logo_dark : assets.logo}
              alt="logo"
              className="w-28 lg:w-32 cursor-pointer"
              priority
            />
          </motion.a>

          {/* Desktop Navigation */}
          <ul
            className={`hidden md:flex items-center gap-1 rounded-full p-1.5 transition-all duration-500 ${
              isScroll
                ? "bg-gray-100/70 dark:bg-white/5"
                : "bg-white/60 shadow-sm border border-white/60 backdrop-blur-md dark:bg-white/5 dark:border-white/10"
            }`}
          >
            {navLinks.map((link, index) => (
              <motion.li
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + index * 0.08, duration: 0.4 }}
              >
                <a
                  href={link.href}
                  className="relative block px-4 lg:px-5 py-2.5 rounded-full text-sm font-medium font-Ovo text-gray-700 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-500/10 transition-all duration-300"
                >
                  {link.name}
                </a>
              </motion.li>
            ))}
          </ul>

          {/* Right Actions */}
          <div className="flex items-center gap-3 lg:gap-4">
            {/* Dark Mode Toggle */}
            <motion.button
              type="button"
              whileHover={{ rotate: 12, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsDarkMode((prev) => !prev)}
              aria-label={
                isDarkMode ? "Switch to light mode" : "Switch to dark mode"
              }
              className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200/80 dark:border-white/10 bg-white/60 dark:bg-white/5 hover:bg-purple-500/10 transition-colors duration-300"
            >
              <Image
                src={isDarkMode ? assets.sun_icon : assets.moon_icon}
                alt=""
                className="w-5"
              />
            </motion.button>

            {/* Contact Button */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="hidden lg:flex items-center gap-2.5 px-6 py-3 rounded-full text-sm font-medium border border-gray-300/80 dark:border-white/20 text-gray-800 dark:text-white hover:border-purple-500 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300"
            >
              Contact
              <Image
                src={
                  isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon
                }
                alt=""
                className="w-3"
              />
            </motion.a>

            {/* Mobile Menu Button */}
            <motion.button
              type="button"
              whileTap={{ scale: 0.9 }}
              onClick={openMenu}
              aria-label="Open navigation menu"
              aria-expanded={isMenuOpen}
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-full border border-gray-200/80 dark:border-white/10 bg-white/60 dark:bg-white/5"
            >
              <Image
                src={isDarkMode ? assets.menu_white : assets.menu_black}
                alt=""
                className="w-5"
              />
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={closeMenu}
            className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm md:hidden"
          />
        )}
      </AnimatePresence>

      {/* Mobile Sidebar */}
      <ul
        ref={sideMenuRef}
        style={{ transform: "translateX(100%)" }}
        className="flex md:hidden flex-col gap-2 py-24 px-7 fixed right-0 top-0 bottom-0 w-72 max-w-[85vw] z-[70] h-screen bg-white/95 backdrop-blur-2xl border-l border-gray-200/70 shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] dark:bg-darkHover dark:border-white/10 dark:text-white"
      >
        {/* Sidebar Header */}
        <div className="absolute top-0 left-0 right-0 px-7 py-6 border-b border-gray-200/70 dark:border-white/10">
          <p className="text-xs uppercase tracking-[0.25em] text-purple-600 dark:text-purple-400 font-semibold">
            Navigation
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Explore my portfolio
          </p>
        </div>

        {/* Close Button */}
        <motion.button
          type="button"
          whileHover={{ rotate: 90 }}
          whileTap={{ scale: 0.9 }}
          onClick={closeMenu}
          aria-label="Close navigation menu"
          className="absolute right-5 top-7 w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 dark:bg-white/10"
        >
          <Image
            src={isDarkMode ? assets.close_white : assets.close_black}
            alt=""
            className="w-4"
          />
        </motion.button>

        {/* Mobile Links */}
        {navLinks.map((link, index) => (
          <motion.li
            key={link.name}
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35, delay: index * 0.07 }}
            className="list-none"
          >
            <a
              href={link.href}
              onClick={closeMenu}
              className="group flex items-center justify-between gap-3 px-4 py-3.5 rounded-xl font-Ovo text-gray-700 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-500/10 transition-all duration-300"
            >
              <span>{link.name}</span>
              <span className="text-gray-400 group-hover:text-purple-500 group-hover:translate-x-1 transition-all duration-300">
                →
              </span>
            </a>
          </motion.li>
        ))}

        {/* Sidebar Footer */}
        <div className="mt-auto pt-6 border-t border-gray-200 dark:border-white/10">
          <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
            Let&apos;s create something amazing.
          </p>
          <a
            href="#contact"
            onClick={closeMenu}
            className="mt-4 flex items-center justify-center gap-2 w-full py-3 rounded-xl text-white text-sm font-medium bg-gradient-to-r from-purple-600 to-blue-600 hover:opacity-90 transition-opacity"
          >
            Get in touch <span>↗</span>
          </a>
        </div>
      </ul>
    </>
  );
};

export default Navbar;
