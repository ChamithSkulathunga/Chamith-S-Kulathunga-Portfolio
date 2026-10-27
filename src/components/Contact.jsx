
"use client";

import { assets } from "@/assets/assets";
import Image from "next/image";
import { useState } from "react";
import { motion } from "motion/react";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");

    const formData = new FormData(event.target);

    formData.append(
      "access_key",
      "52296794-ff34-40be-b32b-9cb61ee3dc08"
    );

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.8 }}
      id="contact"
      className="relative w-full overflow-hidden px-[6%] sm:px-[10%] lg:px-[12%] py-20 sm:py-24 scroll-mt-20"
    >
      {/* Animated background */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -25, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 left-[8%] w-64 h-64 rounded-full bg-purple-400/10 dark:bg-purple-500/10 blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -25, 0], y: [0, 30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-[5%] bottom-0 w-72 h-72 rounded-full bg-blue-400/10 dark:bg-blue-500/10 blur-3xl"
        />
      </div>

      {/* Heading */}
      <motion.div
        initial={{ y: 25, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-12"
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-gray-300/70 dark:border-white/15 px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 bg-white/60 dark:bg-white/5 backdrop-blur-md mb-5">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          Connect with me
        </span>

        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-Ovo font-semibold tracking-tight">
          Let&apos;s work{" "}
          <span className="bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            together.
          </span>
        </h2>

        <p className="max-w-xl mx-auto mt-5 text-gray-600 dark:text-gray-400 leading-7">
          Have a project or idea in mind? Send me a message and let&apos;s
          create something amazing together.
        </p>
      </motion.div>

      {/* Contact Form */}
      <motion.form
        initial={{ y: 35, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.8, delay: 0.15 }}
        onSubmit={onSubmit}
        className="relative max-w-3xl mx-auto p-5 sm:p-8 md:p-10 rounded-3xl border border-gray-200/80 dark:border-white/10 bg-white/75 dark:bg-gray-900/50 backdrop-blur-xl shadow-xl shadow-gray-200/40 dark:shadow-black/20"
      >
        {/* Top gradient line */}
        <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-purple-500/70 to-transparent" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <label
              htmlFor="contact-name"
              className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300"
            >
              Your Name
            </label>
            <input
              id="contact-name"
              type="text"
              placeholder="Enter your name"
              className="w-full p-4 rounded-xl outline-none border border-gray-200 dark:border-white/10 bg-gray-50/80 dark:bg-white/5 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 transition-all duration-300 placeholder:text-gray-400 dark:placeholder:text-gray-500"
              name="name"
              required
            />
          </motion.div>

          <motion.div
            initial={{ x: 20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <label
              htmlFor="contact-email"
              className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300"
            >
              Email Address
            </label>
            <input
              id="contact-email"
              type="email"
              placeholder="Enter your email"
              className="w-full p-4 rounded-xl outline-none border border-gray-200 dark:border-white/10 bg-gray-50/80 dark:bg-white/5 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 transition-all duration-300 placeholder:text-gray-400 dark:placeholder:text-gray-500"
              name="email"
              required
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mb-6"
        >
          <label
            htmlFor="contact-message"
            className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300"
          >
            Your Message
          </label>
          <textarea
            id="contact-message"
            rows={6}
            placeholder="Tell me about your project..."
            className="w-full p-4 rounded-xl outline-none resize-y border border-gray-200 dark:border-white/10 bg-gray-50/80 dark:bg-white/5 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 transition-all duration-300 placeholder:text-gray-400 dark:placeholder:text-gray-500"
            required
            name="message"
          />
        </motion.div>

        <motion.button
          whileHover={{ scale: 1.03, y: -2 }}
          whileTap={{ scale: 0.97 }}
          transition={{ duration: 0.25 }}
          type="submit"
          className="group relative flex items-center justify-center gap-3 mx-auto px-8 py-4 rounded-full text-white font-medium bg-gradient-to-r from-gray-900 to-gray-700 dark:from-purple-600 dark:to-blue-600 shadow-lg shadow-gray-900/15 dark:shadow-purple-500/20 hover:shadow-xl hover:shadow-purple-500/20 transition-shadow duration-300"
        >
          Submit Message
          <Image
            src={assets.right_arrow_white}
            alt=""
            className="w-4 transition-transform duration-300 group-hover:translate-x-1"
          />
        </motion.button>

        <motion.p
          key={result}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          aria-live="polite"
          className={`mt-5 text-center text-sm ${
            result === "Sending...."
              ? "text-gray-500 dark:text-gray-400"
              : result === "Form Submitted Successfully"
                ? "text-green-600 dark:text-green-400"
                : result
                  ? "text-red-500"
                  : ""
          }`}
        >
          {result}
        </motion.p>
      </motion.form>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="text-center mt-8 text-sm text-gray-500 dark:text-gray-500"
      >
        Have a great idea? I&apos;d love to hear from you.
      </motion.p>
    </motion.section>
  );
};

export default Contact;
