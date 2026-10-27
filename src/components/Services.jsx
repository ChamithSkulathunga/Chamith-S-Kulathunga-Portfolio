
import { assets, serviceData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const Services = ({ isDarkMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      id="service"
      className="relative w-full px-[12%] py-16 scroll-mt-20 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-40 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-400/10 blur-[100px] dark:bg-purple-500/10" />

      {/* Section Heading */}
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-3 text-center text-lg font-Ovo text-gray-600 dark:text-gray-300"
      >
        What I Offer
      </motion.h4>

      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-center text-4xl sm:text-5xl font-Ovo font-semibold tracking-tight text-gray-900 dark:text-white"
      >
        My{" "}
        <span className="bg-gradient-to-r from-blue-600 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
          Services
        </span>
      </motion.h2>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mx-auto mt-6 mb-14 max-w-2xl text-center font-Ovo leading-7 text-gray-600 dark:text-white/70"
      >
        I am a graphic designer, web developer and UI/UX specialist. I make
        creative designs with Adobe Illustrator, Photoshop and InDesign. I build
        responsive and easy to use websites with React, WordPress and Figma. I
        can bring real-world projects, internship experience and a publications
        company to the table to create hands-on, modern and successful digital
        solutions.
      </motion.p>

      {/* Service Cards */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
        className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 my-10"
      >
        {serviceData.map(
          ({ icon, title, description, link }, index) => (
            <motion.div
              key={`${title}-${index}`}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 35,
                  scale: 0.96,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    duration: 0.55,
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
              whileTap={{ scale: 0.98 }}
              className="group relative h-full rounded-2xl p-[1px]
                bg-gradient-to-br from-gray-200 via-gray-300 to-gray-200
                dark:from-gray-700 dark:via-gray-800 dark:to-gray-700
                hover:from-blue-500 hover:via-purple-500 hover:to-cyan-400
                transition-colors duration-500"
            >
              {/* Card Inner */}
              <div
                className="relative flex h-full flex-col overflow-hidden rounded-2xl
                  bg-white p-7 sm:p-8
                  dark:bg-gray-950
                  transition-colors duration-500
                  group-hover:bg-gray-50 dark:group-hover:bg-gray-900"
              >
                {/* Decorative Glow */}
                <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-blue-500/0 blur-3xl transition-all duration-500 group-hover:bg-blue-500/15 dark:group-hover:bg-purple-500/15" />

                {/* Service Number */}
                <div className="relative mb-6 flex items-center justify-between">
                  <span className="text-xs font-semibold tracking-[0.2em] text-gray-400 dark:text-gray-500">
                    SERVICE {String(index + 1).padStart(2, "0")}
                  </span>

                  <motion.div
                    whileHover={{
                      rotate: -8,
                      scale: 1.1,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 15,
                    }}
                    className="flex h-14 w-14 items-center justify-center rounded-2xl
                      bg-gray-100 dark:bg-gray-800
                      group-hover:bg-blue-50 dark:group-hover:bg-gray-800
                      transition-colors duration-300"
                  >
                    <Image
                      src={icon}
                      alt={title}
                      className="h-8 w-8 object-contain transition-transform duration-300 group-hover:scale-110"
                    />
                  </motion.div>
                </div>

                {/* Title */}
                <h3 className="relative mb-3 text-xl font-semibold text-gray-800 dark:text-white transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-cyan-400">
                  {title}
                </h3>

                {/* Description */}
                <p className="relative flex-1 text-sm leading-6 text-gray-600 dark:text-white/70">
                  {description}
                </p>

                {/* Read More Link */}
                <a
                  href={link}
                  className="relative mt-7 inline-flex w-fit items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-200 transition-colors duration-300 hover:text-blue-600 dark:hover:text-cyan-400"
                >
                  <span>Read more</span>

                  <motion.span
                    className="inline-flex"
                    whileHover={{ x: 5 }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 15,
                    }}
                  >
                    <Image
                      src={
                        isDarkMode
                          ? assets.right_arrow_white
                          : assets.right_arrow
                      }
                      alt=""
                      className="h-4 w-4 object-contain"
                    />
                  </motion.span>
                </a>

                {/* Bottom Accent */}
                <div className="absolute bottom-0 left-0 h-[3px] w-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 transition-all duration-500 group-hover:w-full" />
              </div>
            </motion.div>
          )
        )}
      </motion.div>
    </motion.div>
  );
};

export default Services;
