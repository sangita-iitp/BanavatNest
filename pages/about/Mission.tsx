import React from 'react';
import { motion } from 'framer-motion';

const Mission = () => {
    return (
        <div className="min-h-screen bg-zinc-50 dark:bg-[#09090b] transition-colors pb-24">
            <header className="bg-white dark:bg-zinc-900/50 pt-24 pb-20 border-b border-gray-100 dark:border-zinc-800 grid-bg mb-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl">
                        <h1 className="text-5xl md:text-7xl font-black text-zinc-900 dark:text-zinc-100 mb-8 tracking-tighter leading-tight">
                            Mission <span className="text-[#84CC16]">& Vision</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-500 dark:text-zinc-400 font-medium leading-relaxed">
                            Research-driven innovation nurturing ideas from curiosity to impact.
                        </p>
                    </div>
                </div>
            </header>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-8">
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="bg-white dark:bg-zinc-900 p-12 rounded-[2.5rem] shadow-sm border-t-8 border-[#84CC16] hover:shadow-xl transition-all"
                    >
                        <h2 className="text-4xl font-black text-zinc-900 dark:text-zinc-100 mb-8 tracking-tight">Our Mission</h2>
                        <p className="text-xl text-gray-600 dark:text-zinc-300 leading-relaxed font-medium">
                            To create and nurture ideas through research and experimental development, shaping curiosity-driven concepts into innovative, practical, and scalable solutions.
                        </p>
                    </motion.div>
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="bg-white dark:bg-zinc-900 p-12 rounded-[2.5rem] shadow-sm border-t-8 border-[#84CC16] hover:shadow-xl transition-all"
                    >
                        <h2 className="text-4xl font-black text-zinc-900 dark:text-zinc-100 mb-8 tracking-tight">Our Vision</h2>
                        <p className="text-xl text-gray-600 dark:text-zinc-300 leading-relaxed font-medium">
                            To become a research-driven innovation ecosystem that nurtures ideas from curiosity to impact through continuous experimentation and learning.
                        </p>
                    </motion.div>

                </div>
            </div>
        </div>
    );
};

export default Mission;
