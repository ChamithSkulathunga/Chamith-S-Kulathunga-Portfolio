"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import About from "@/components/About";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  useEffect(()=> {
    if(localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)){
      setIsDarkMode(true)
    }else{
      setIsDarkMode(false)
    }
  },[])


  useEffect(()=> {
    if(isDarkMode){
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    }else{
      document.documentElement.classList.remove('dark');
      localStorage.theme = '';
    }
  },[isDarkMode])





  //   const [showTopButton, setShowTopButton] = useState(false)

  // useEffect(() => {
  //   AOS.init({
  //     offset: 100,
  //     duration: 500,
  //     easing: "ease-in-sine",
  //     delay: 100,
  //   });
  //   AOS.refresh();

  //   // Show button when scrolled down
  //   const handleScroll = () => {
  //     if (window.scrollY > 300) {
  //       setShowTopButton(true);
  //     } else {
  //       setShowTopButton(false);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   // Clean up
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  // // Scroll to top function
  // const scrollToTop = () => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth",
  //   });
  // };




  return (
   <>
     <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
     <Header isDarkMode={isDarkMode} />
     <About isDarkMode={isDarkMode} />
     <Services isDarkMode={isDarkMode} />
     <Work isDarkMode={isDarkMode} />
     <Contact isDarkMode={isDarkMode} />
     <Footer isDarkMode={isDarkMode} />


    {/* Back to Top Button */}
        {/* {showTopButton && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 bg-primary hover:bg-secondary text-white p-3 rounded-full shadow-lg z-50 transition duration-300"
          >
            <p>Top</p>
          </button>
        )} */}



   </>
  );
}
