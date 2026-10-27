
"use client";

import { assets, workData } from "@/assets/assets";
import Image from "next/image";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Work = ({ isDarkMode }) => {
  const [visibleItems, setVisibleItems] = useState(4);
  const [activeCategory, setActiveCategory] = useState("development");

  const filteredWorks = workData.filter(
    (item) => item.category === activeCategory
  );

  const handleShowMore = () => {
    setVisibleItems((prev) => prev + 4);
  };

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setVisibleItems(4);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      id="work"
      className="relative w-full px-[6%] sm:px-[12%] py-16 scroll-mt-20 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-40 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-purple-500/10 blur-[100px] dark:bg-blue-500/10" />

      {/* Section Heading */}
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-3 text-lg font-Ovo text-gray-600 dark:text-gray-300"
      >
        Portfolio
      </motion.h4>

      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-center text-4xl sm:text-5xl font-Ovo font-semibold tracking-tight text-gray-900 dark:text-white"
      >
        My Latest{" "}
        <span className="bg-gradient-to-r from-blue-600 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
          Works
        </span>
      </motion.h2>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-2xl mx-auto mt-6 mb-10 font-Ovo text-center leading-7 text-gray-600 dark:text-white/70"
      >
        A showcase of my recent web development and UI/UX design projects,
        including websites built with React, WordPress, and Figma.
      </motion.p>

      {/* Category Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex justify-center gap-3 sm:gap-4 mb-12 flex-wrap"
      >
        {[
          { label: "Development Work", value: "development" },
          { label: "Design Work", value: "design" },
        ].map((category) => (
          <motion.button
            key={category.value}
            type="button"
            onClick={() => handleCategoryChange(category.value)}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.96 }}
            className={`relative overflow-hidden rounded-full border px-5 sm:px-7 py-3 text-sm sm:text-base font-medium transition-all duration-300 ${
              activeCategory === category.value
                ? "border-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 text-white shadow-lg shadow-purple-500/20"
                : "border-gray-300 bg-white/70 text-gray-700 hover:border-purple-400 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-900/70 dark:text-gray-200 dark:hover:border-purple-500 dark:hover:bg-gray-800"
            }`}
          >
            {category.label}
          </motion.button>
        ))}
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
      >
        <AnimatePresence mode="popLayout">
          {filteredWorks.slice(0, visibleItems).map((project, index) => (
            <motion.a
              key={`${project.category}-${project.title}-${index}`}
              href={project.Link}
              target="_blank"
              rel="noopener noreferrer"
              layout
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{
                duration: 0.4,
                delay: Math.min(index * 0.06, 0.3),
                layout: { duration: 0.35 },
              }}
              whileHover={{ y: -7 }}
              className="group relative block rounded-2xl p-[1px] bg-gradient-to-br from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-800 dark:to-gray-700 hover:from-blue-500 hover:via-purple-500 hover:to-cyan-400 transition-colors duration-500"
            >
              {/* Project Card */}
              <div
                className="relative aspect-square overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-900 bg-no-repeat bg-cover bg-center"
                style={{
                  backgroundImage: `url(${project.bgImage})`,
                }}
              >
                {/* Image Zoom */}
                <motion.div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${project.bgImage})`,
                  }}
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Project Number */}
                <div className="absolute top-4 left-4 z-10 rounded-full border border-white/30 bg-black/30 px-3 py-1 text-xs font-medium tracking-wider text-white backdrop-blur-md">
                  PROJECT {String(index + 1).padStart(2, "0")}
                </div>

                {/* Project Information */}
                <div className="absolute bottom-0 left-0 right-0 z-10 p-4 sm:p-5">
                  <div className="flex items-end justify-between gap-3">
                    <div className="min-w-0 translate-y-2 transition-transform duration-500 group-hover:translate-y-0">
                      <h2 className="text-lg font-semibold leading-tight text-white">
                        {project.title}
                      </h2>

                      <p className="mt-2 text-sm leading-5 text-white/75 line-clamp-3">
                        {project.description}
                      </p>
                    </div>

                    {/* Arrow Button */}
                    <motion.div
                      whileHover={{ rotate: 45, scale: 1.08 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 15,
                      }}
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/50 bg-white/10 backdrop-blur-md transition-colors duration-300 group-hover:border-white group-hover:bg-white"
                    >
                      <Image
                        src={assets.send_icon}
                        alt=""
                        className="w-5 transition-all duration-300 group-hover:brightness-0"
                      />
                    </motion.div>
                  </div>

                  {/* Bottom Accent */}
                  <div className="mt-4 h-[2px] w-8 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 transition-all duration-500 group-hover:w-full" />
                </div>
              </div>
            </motion.a>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Empty Category Message */}
      {filteredWorks.length === 0 && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="py-16 text-center"
        >
          <p className="text-gray-500 dark:text-gray-400">
            No projects available in this category yet.
          </p>
        </motion.div>
      )}

      {/* Show More Button */}
      {visibleItems < filteredWorks.length && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-14 flex justify-center"
        >
          <motion.button
            type="button"
            onClick={handleShowMore}
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.96 }}
            className="group flex items-center justify-center gap-3 rounded-full border border-gray-300 bg-white px-8 py-3.5 font-medium text-gray-700 shadow-sm transition-all duration-300 hover:border-purple-400 hover:bg-gray-50 hover:shadow-lg hover:shadow-purple-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:hover:border-purple-500 dark:hover:bg-gray-800"
          >
            <span>Show More Projects</span>

            <motion.span
              animate={{ y: [0, 3, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Image
                src={
                  isDarkMode
                    ? assets.right_arrow_bold_dark
                    : assets.right_arrow_bold
                }
                alt=""
                className="w-4"
              />
            </motion.span>
          </motion.button>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Work;
