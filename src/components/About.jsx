
import { assets, certificateList, infoList, toolsData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";



const About = ({ isDarkMode }) => {
  return (
    <motion.div
      id="about"
      className="w-full px-[12%] py-10 scroll-mt-20"
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {/* Section Heading */}
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        Introduction
      </motion.h4>

      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
         className="text-center text-4xl sm:text-5xl font-Ovo font-semibold tracking-tight text-gray-900 dark:text-white"
      >
       
        <span className="bg-gradient-to-r from-blue-600 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
          About
        </span>
        {" "}me
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex w-full flex-col lg:flex-row sm:items-center justify-center gap-12 lg:gap-20 my-20"
      >
        {/* Left Side - Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 25 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          whileHover={{
            scale: 1.03,
            y: -5,
            transition: { duration: 0.3 },
          }}
          className="w-64 sm:w-80 rounded-3xl max-w-none self-start sm:justify-center"
        >
          <div className="relative">
            <div className="absolute -inset-3 rounded-full bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-cyan-400/20 blur-xl opacity-70" />

            <Image
              src={assets.user_image}
              alt="Chamith Sadeepa Kulathunga"
              className="relative w-full rounded-full"
            />
          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            delay: 0.2,
            ease: "easeOut",
          }}
          className="flex-1"
        >
          {/* About Description */}
          <p className="mb-10 max-w-2xl font-Ovo text-justify leading-relaxed text-gray-700 dark:text-white/80">
            I am Chamith Sadeepa Kulathunga, a BICT (Hons) graduate passionate
            about web design, web development, UI/UX design, and graphic design.
            I have practical experience working in a publications company, along
            with industry training and real-world projects. My skills include
            React, WordPress, Figma, Adobe Illustrator, Photoshop, and InDesign.
            I enjoy learning new technologies and creating user-friendly
            websites and visually engaging digital experiences.
          </p>

          {/* Information Cards */}
          <motion.ul
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.15 },
              },
            }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-3xl"
          >
            {infoList.map(
              ({ icon, iconDark, title, description }, index) => (
                <motion.li
                  key={`${title}-${index}`}
                  variants={{
                    hidden: { opacity: 0, y: 30, scale: 0.95 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      transition: {
                        duration: 0.5,
                        ease: "easeOut",
                      },
                    },
                  }}
                  whileHover={{
                    y: -8,
                    scale: 1.025,
                    transition: {
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                    },
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative cursor-pointer rounded-2xl p-[1px]
                    bg-gradient-to-br from-gray-300 via-gray-200 to-gray-400
                    dark:from-gray-700 dark:via-gray-800 dark:to-gray-600
                    hover:from-blue-500 hover:via-purple-500 hover:to-cyan-400
                    transition-colors duration-500"
                >
                  <div
                    className="h-full rounded-2xl p-6
                      bg-white dark:bg-gray-950
                      group-hover:bg-gray-50 dark:group-hover:bg-gray-900
                      transition-colors duration-300"
                  >
                    <motion.div
                      whileHover={{ rotate: -8, scale: 1.12 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 15,
                      }}
                      className="flex w-12 h-12 items-center justify-center
                        rounded-xl bg-gray-100 dark:bg-gray-800
                        group-hover:bg-blue-50 dark:group-hover:bg-gray-800
                        transition-colors duration-300"
                    >
                      <Image
                        src={isDarkMode ? iconDark : icon}
                        alt={title}
                        className="w-7 h-7 object-contain"
                      />
                    </motion.div>

                    <h3
                      className="my-4 font-semibold text-lg text-gray-800
                        dark:text-white transition-colors duration-300
                        group-hover:text-blue-600 dark:group-hover:text-cyan-400"
                    >
                      {title}
                    </h3>

                    <p className="text-gray-600 text-sm leading-relaxed dark:text-white/70">
                      {description}
                    </p>

                    <div
                      className="mt-5 h-[2px] w-8 rounded-full
                        bg-gray-300 dark:bg-gray-700
                        group-hover:w-16 group-hover:bg-gradient-to-r
                        group-hover:from-blue-500 group-hover:to-purple-500
                        transition-all duration-500"
                    />
                  </div>
                </motion.li>
              )
            )}
          </motion.ul>

          {/* Certificates Section */}
          <motion.h4
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="my-6 mt-10 text-xl text-gray-700 font-Ovo dark:text-white/80"
          >
            Certificates
          </motion.h4>

          <motion.ul
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.15 },
              },
            }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-3xl"
          >
            {certificateList.map(
              ({ bgImage, title, link, description }, index) => (
                <motion.li
                  key={`${title}-${index}`}
                  variants={{
                    hidden: { opacity: 0, y: 30, scale: 0.96 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      transition: {
                        duration: 0.6,
                        ease: "easeOut",
                      },
                    },
                  }}
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                    transition: {
                      type: "spring",
                      stiffness: 280,
                      damping: 20,
                    },
                  }}
                  className="group relative aspect-square rounded-2xl p-[1px]
                    bg-gradient-to-br from-gray-300 via-gray-200 to-gray-400
                    dark:from-gray-700 dark:via-gray-800 dark:to-gray-600
                    hover:from-blue-500 hover:via-purple-500 hover:to-cyan-400
                    transition-colors duration-500"
                >
                  <div className="relative h-full w-full overflow-hidden rounded-2xl bg-white dark:bg-gray-950">
                    {/* Certificate Background */}
                    <div
                      className="absolute inset-0 bg-cover bg-center
                        transition-transform duration-700 ease-out
                        group-hover:scale-110"
                      style={{ backgroundImage: `url(${bgImage})` }}
                    />

                    {/* Overlay */}
                    <div
                      className="absolute inset-0 bg-white/90 dark:bg-black/85
                        transition-colors duration-500
                        group-hover:bg-black/65"
                    />

                    {/* Certificate Content */}
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View certificate: ${title}`}
                      className="absolute inset-0 z-10 flex flex-col justify-between p-5 sm:p-6"
                    >
                      <div>
                        <h3
                          className="mt-5 font-semibold text-lg leading-snug
                            text-gray-800 dark:text-white
                            transition-colors duration-300
                            group-hover:text-white"
                        >
                          {title}
                        </h3>

                        <p
                          className="mt-3 text-sm leading-relaxed
                            text-gray-600 dark:text-gray-300
                            opacity-90 transition-all duration-300
                            group-hover:text-white/90"
                        >
                          {description}
                        </p>
                      </div>

                      {/* View Certificate Link */}
                      <div className="flex items-center justify-between">
                        <span
                          className="text-sm font-medium text-gray-700 dark:text-gray-200
                            group-hover:text-white transition-colors duration-300"
                        >
                          View Certificate
                        </span>

                        <motion.span
                          whileHover={{ rotate: 45 }}
                          className="flex h-10 w-10 items-center justify-center
                            rounded-full border border-gray-300 dark:border-white/30
                            text-gray-700 dark:text-white
                            group-hover:bg-white group-hover:text-black
                            group-hover:border-white transition-colors duration-300"
                        >
                          ↗
                        </motion.span>
                      </div>
                    </a>
                  </div>
                </motion.li>
              )
            )}
          </motion.ul>

          {/* Languages, Frameworks and Tools */}
          <motion.h4
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="my-6 mt-10 text-xl text-gray-700 font-Ovo dark:text-white/80"
          >
            Languages, Frameworks and Tools
          </motion.h4>

          <motion.ul
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.08 },
              },
            }}
            className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-3 sm:gap-4 max-w-2xl"
          >
            {toolsData.map((tool, index) => (
              <motion.li
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 25, scale: 0.8 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: { duration: 0.4 },
                  },
                }}
                whileHover={{
                  y: -8,
                  scale: 1.08,
                  transition: { duration: 0.25 },
                }}
                whileTap={{ scale: 0.95 }}
                className="group relative aspect-square rounded-2xl p-[1px]
                  bg-gradient-to-br from-gray-300 via-gray-200 to-gray-400
                  dark:from-gray-600 dark:via-gray-800 dark:to-gray-500
                  hover:from-blue-500 hover:via-purple-500 hover:to-cyan-400
                  transition-colors duration-300 cursor-pointer"
              >
                <div
                  className="flex h-full w-full items-center justify-center rounded-2xl
                    bg-white dark:bg-gray-900
                    group-hover:bg-gray-50 dark:group-hover:bg-gray-800
                    transition-colors duration-300"
                >
                  <motion.div
                    animate={{ y: [0, -3, 0] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.1,
                    }}
                    className="flex items-center justify-center"
                  >
                    <Image
                      src={tool}
                      alt={`Technology ${index + 1}`}
                      className="w-7 h-7 sm:w-9 sm:h-9 object-contain
                        transition-transform duration-300
                        group-hover:scale-110"
                    />
                  </motion.div>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
