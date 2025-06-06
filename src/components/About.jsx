import { assets, certificateList, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const About = ({ isDarkMode }) => {
    return (
        <motion.div id='about' className='w-full px-[12%] py-10 scroll-mt-20 '

            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}

        >
            <motion.h4
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className='text-center mb-2 text-lg font-Ovo '>Introduction</motion.h4>

            <motion.h2
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className='text-center text-5xl font-Ovo'>About me</motion.h2>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className='flex w-full flex-col lg:flex-row sm:items-center justify-center gap-20 my-20 '>
                {/* Left side */}
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className='w-64 sm:w-80 rounded-3xl max-w-none   ' >
                    <Image src={assets.user_image} alt='user' className='w-full rounded-full' />
                </motion.div>


                {/* Right side */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className='flex-1 '>
                    <p className='mb-10 max-w-2xl font-Ovo'>
                        I'm Chamith Sadeepa Kulathunga, an ICT undergraduate with a passion for UI/UX design and front-end development. I’ve gained hands-on experience through internships and real-world projects using React, WordPress, and Figma. I enjoy learning new skills and creating user-friendly digital solutions.
                    </p>

                    <motion.ul
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 1 }}
                        className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl '>
                        {
                            infoList.map(({ icon, iconDark, title, description }, index) => (
                                <motion.li
                                    whileHover={{ scale: 1.05 }}
                                    className='border-[0.5px] border-gray-400 rounded-xl p-6 
                            cursor-pointer hover:bg-lightHover hover:-translate-y-1 
                            duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50'
                                    key={index}>
                                    <Image src={isDarkMode ? iconDark : icon} alt={title} className='w-7 mt-3' />
                                    <h3 className='my-4 font-semibold text-gray-700 dark:text-white'>{title}</h3>
                                    <p className='text-gray-600 text-sm dark:text-white/80'>{description}</p>
                                </motion.li>
                            ))
                        }
                    </motion.ul>



                    <motion.h4
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 1.3 }}
                        className='my-6 mt-8 text-xl text-gray-700 font-Ovo dark:text-white/80'
                    >Certificates</motion.h4>


                    <motion.ul
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 1 }}
                        className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'
                    >
                        {
                            certificateList.map(({ bgImage, title, link, description }, index) => (
                                <motion.li
                                    key={index}
                                    whileHover={{ scale: 1.05 }}
                                    className='aspect-square bg-no-repeat bg-cover bg-center m-2 py-1 rounded-lg relative cursor-pointer group border-[0.5px]
        border-gray-400 p-6 bg-lightHover/95 dark:bg-darkHover/95 -translate-y-1 duration-500 hover:shadow-black
        dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/95'
                                    style={{ backgroundImage: `url(${bgImage})` }}
                                >
                                    {/* Image overlay */}
                                    <div className="absolute inset-0 bg-white/95 dark:bg-black/95 group-hover:bg-black/10 rounded-lg transition-opacity duration-300"></div>

                                    <a
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        href={link}
                                        className='relative z-10 block w-full h-full'
                                    >
                                        <h3 className='my-4 font-semibold text-gray-700 dark:text-white transition-opacity duration-300 group-hover:opacity-0'>
                                            {title}
                                        </h3>
                                        <p className='text-gray-600 text-sm dark:text-white/80 transition-opacity duration-300 group-hover:opacity-0'>
                                            {description}
                                        </p>
                                    </a>
                                </motion.li>
                            ))
                        }
                    </motion.ul>




                    <motion.h4
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 1.3 }}
                        className='my-6 text-xl text-gray-700 font-Ovo dark:text-white/80'
                    >Languages, frameworks and tools</motion.h4>


                    <motion.ul
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 1.5 }}
                        className='flex items-center gap-3 sm:gap-5 '>
                        {toolsData.map((tool, index) => (
                            <motion.li
                                whileHover={{ scale: 1.1 }}
                                className='flex  items-center justify-center w-32 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'
                                key={index}>
                                <Image src={tool} alt='tool'
                                    className='w-5 sm:w-7'
                                />
                            </motion.li>
                        ))}
                    </motion.ul>
                </motion.div>


            </motion.div>
        </motion.div>
    )
}

export default About