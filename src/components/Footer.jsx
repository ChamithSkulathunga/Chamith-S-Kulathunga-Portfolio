
"use client";

import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const Footer = ({ isDarkMode }) => {
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/ChamithSkulathunga",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/chamith-sadeepa-kulathunga-702348196/",
    },
    {
      name: "Behance",
      url: "https://www.behance.net/ChamithSKulathunga",
    },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7 }}
      className="relative mt-20 overflow-hidden border-t border-gray-200/80 dark:border-white/10"
    >
      {/* Decorative background */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <motion.div
          animate={{ x: [0, 25, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-20 left-[15%] w-64 h-64 rounded-full bg-purple-400/10 dark:bg-purple-500/10 blur-3xl"
        />

        <motion.div
          animate={{ x: [0, -25, 0], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-16 right-[15%] w-64 h-64 rounded-full bg-blue-400/10 dark:bg-blue-500/10 blur-3xl"
        />
      </div>

      {/* Main footer content */}
      <div className="px-[6%] sm:px-[10%] lg:px-[12%] pt-14 pb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex flex-col items-center text-center"
        >
          {/* Logo */}
          <motion.a
            href="#home"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.25 }}
            aria-label="Back to home"
          >
            <Image
              src={isDarkMode ? assets.logo_dark : assets.logo}
              alt="Chamith S Kulathunga"
              className="w-36 sm:w-40 mx-auto mb-5"
            />
          </motion.a>

          <p className="text-sm text-gray-600 dark:text-gray-400 max-w-md leading-6">
            Creating modern digital experiences through web development,
            UI/UX design, and creativity.
          </p>

          {/* Email */}
          <motion.a
            href="mailto:skchamith14@gmail.com"
            whileHover={{ y: -3, scale: 1.02 }}
            transition={{ duration: 0.25 }}
            className="group flex items-center gap-3 mt-6 px-5 py-3 rounded-full border border-gray-200 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur-md hover:border-purple-400/70 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300"
          >
            <Image
              src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
              alt=""
              className="w-5"
            />

            <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
              skchamith14@gmail.com
            </span>
          </motion.a>
        </motion.div>

        {/* Bottom section */}
        <div className="border-t border-gray-200 dark:border-white/10 mt-12 pt-7">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Copyright */}
            <motion.p
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-sm text-center text-gray-500 dark:text-gray-400"
            >
              © {new Date().getFullYear()}{" "}
              <span className="font-semibold text-gray-800 dark:text-gray-200">
                Chamith S Kulathunga
              </span>
              . All rights reserved.
            </motion.p>

            {/* Social links */}
            <motion.nav
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.12,
                  },
                },
              }}
              aria-label="Social media links"
              className="flex flex-wrap items-center justify-center gap-3"
            >
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={{
                    hidden: { opacity: 0, y: 12 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  whileHover={{ y: -4, scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ duration: 0.25 }}
                  className="px-5 py-2.5 rounded-full text-sm font-medium border border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-300 bg-white/60 dark:bg-white/5 hover:text-purple-600 dark:hover:text-purple-400 hover:border-purple-400/60 hover:shadow-md hover:shadow-purple-500/10 transition-colors duration-300"
                >
                  {social.name}
                  <span className="inline-block ml-1.5 transition-transform duration-300 group-hover:translate-x-1">
                    ↗
                  </span>
                </motion.a>
              ))}
            </motion.nav>
          </div>

          {/* Back to top */}
          <motion.a
            href="#home"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center gap-2 mx-auto mt-8 text-xs text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
          >
            Back to top
            <span aria-hidden="true">↑</span>
          </motion.a>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
