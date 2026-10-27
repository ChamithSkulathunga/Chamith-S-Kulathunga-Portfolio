
"use client";

import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import { motion } from "motion/react";


const Header = () => {
  return (

    
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden flex items-center justify-center px-5 py-24"
    >
      {/* Background glow effects */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 left-[10%] w-64 h-64 rounded-full bg-blue-400/10 dark:bg-blue-500/10 blur-3xl"
        />

        <motion.div
          animate={{
            x: [0, -30, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-20 right-[10%] w-72 h-72 rounded-full bg-purple-400/10 dark:bg-purple-500/10 blur-3xl"
        />
      </div>

      <div className="w-full max-w-4xl mx-auto flex flex-col items-center text-center gap-6">

        {/* Profile image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.1,
            type: "spring",
            stiffness: 100,
          }}
          className="relative mb-2"
        >
          {/* Animated glow ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "linear",
            }}
            className=" absolute -inset-2 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 opacity-70 blur-[2px]"
          />

          <div className="relative rounded-full bg-white dark:bg-gray-950 p-1.5 ">
            <Image
              src={assets.profile_img}
              alt="Chamith Sadeepa Kulathunga"
              priority
              className="w-28 h-28 sm:w-32 sm:h-32 rounded-full object-cover"
            />
          </div>

          {/* Availability indicator */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1, type: "spring" }}
            className="absolute bottom-2 right-1 w-5 h-5 rounded-full bg-emerald-500 border-4 border-white dark:border-gray-950"
          />
        </motion.div>

        {/* Introduction */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center justify-center gap-2 text-lg sm:text-xl md:text-2xl font-Ovo text-gray-700 dark:text-gray-200"
        >
          Hi, I'm Chamith Sadeepa
          <motion.span
            animate={{ rotate: [0, 18, -8, 18, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatDelay: 2,
            }}
            className="inline-flex origin-bottom"
          >
            <Image
              src={assets.hand_icon}
              alt="Waving hand"
              className="w-6 sm:w-7"
            />
          </motion.span>
        </motion.h3>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-Ovo font-medium tracking-tight leading-tight text-gray-900 dark:text-white"
        >
          Creative Ideas.
          <br />
          <span className="bg-gradient-to-r from-blue-600 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
            Digital Experiences.
          </span>
        </motion.h1>

        {/* Role label */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm"
        >
          {["Web Development", "UI/UX Design", "Graphic Design"].map(
            (skill, index) => (
              <motion.span
                key={skill}
                whileHover={{ y: -3, scale: 1.04 }}
                className="px-3 py-1.5 rounded-full border border-gray-300/80 dark:border-gray-700 bg-white/70 dark:bg-gray-900/70 text-gray-600 dark:text-gray-300 backdrop-blur-sm"
              >
                {skill}
              </motion.span>
            )
          )}
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="max-w-2xl mx-auto text-sm sm:text-base leading-7 text-gray-600 dark:text-gray-300 font-Ovo"
        >
          I am a BICT (Hons) graduate passionate about web development,
          UI/UX design, and graphic design. I enjoy combining creativity
          and technology to build user-friendly websites and engaging
          digital experiences.
        </motion.p>

        {/* Action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-3 w-full sm:w-auto"
        >
          {/* Contact button */}
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.97 }}
            className="group flex items-center justify-center gap-3 px-8 py-3.5 min-w-44 rounded-full bg-gray-900 text-white dark:bg-white dark:text-gray-900 font-medium shadow-lg shadow-gray-900/10 dark:shadow-white/10 transition-shadow hover:shadow-xl"
          >
            Contact Me
            <motion.span
              className="inline-flex"
              whileHover={{ x: 4, y: -2 }}
            >
              <Image
                src={assets.right_arrow_white}
                alt=""
                className="w-4 dark:invert"
              />
            </motion.span>
          </motion.a>

          {/* Resume button */}
          <motion.a
            href="/S.K.Chamith Sadeepa KulathungaCV.pdf"
            download
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center justify-center gap-3 px-8 py-3.5 min-w-44 rounded-full border border-gray-300 dark:border-gray-700 bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm text-gray-800 dark:text-white font-medium hover:border-purple-400 dark:hover:border-purple-400 transition-colors"
          >
            Download CV
            <Image
              src={assets.download_icon}
              alt=""
              className="w-4 dark:invert"
            />
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.a
          href="#about"
          aria-label="Scroll to About section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 8, 0] }}
          transition={{
            opacity: { delay: 1.4, duration: 0.6 },
            y: { delay: 1.4, duration: 1.8, repeat: Infinity },
          }}
          className="mt-6 flex flex-col items-center gap-2 text-gray-400 dark:text-gray-500"
        >
          <span className="text-xs tracking-[0.2em] uppercase">
            Scroll to explore
          </span>
          <span className="w-6 h-10 rounded-full border border-current flex justify-center pt-2">
            <span className="w-1 h-2 rounded-full bg-current" />
          </span>
        </motion.a>
      </div>
    </section>
  );
};

export default Header;
