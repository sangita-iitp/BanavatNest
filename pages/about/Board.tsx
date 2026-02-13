import React from 'react';
import { motion } from 'framer-motion';
import { UserCircle2, CircleDot } from 'lucide-react';

const Board = () => {
    return (
        <div className="min-h-screen bg-zinc-50 dark:bg-[#09090b] transition-colors pb-24">
            <header className="bg-white dark:bg-zinc-900/50 pt-24 pb-20 border-b border-gray-100 dark:border-zinc-800 grid-bg mb-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl">
                        <h1 className="text-5xl md:text-7xl font-black text-zinc-900 dark:text-zinc-100 mb-8 tracking-tighter leading-tight">
                            Board of <span className="text-[#84CC16]">Directors</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-500 dark:text-zinc-400 font-medium leading-relaxed">
                            Strategic leadership ensuring alignment between academic excellence and industry needs.
                        </p>
                    </div>
                </div>
            </header>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Dr. Sukhdev Singh Card */}
                    <motion.div
                        whileHover={{ y: -10 }}
                        className="bg-white dark:bg-zinc-900/50 rounded-[4rem] p-12 border border-zinc-100 dark:border-zinc-800 relative text-left transition-all duration-300 shadow-xl hover:shadow-2xl dark:hover:shadow-[0_0_40px_rgba(132,204,22,0.15)] dark:hover:border-lime-500/30"
                    >
                        <div className="w-20 h-20 bg-[#84CC16] rounded-3xl flex items-center justify-center shadow-lg mb-8">
                            <UserCircle2 className="w-12 h-12 text-zinc-900" />
                        </div>
                        <h3 className="text-3xl font-black text-zinc-900 dark:text-zinc-100 mb-2">Dr. Sukhdev Singh</h3>
                        <p className="text-[#84CC16] font-bold text-lg mb-8 uppercase tracking-widest">Director | PhD (IIT Patna)</p>
                        <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed mb-6 font-medium">
                            Experienced academic and researcher with over 8 years in higher education. Holds strong expertise in statistical modeling, estimation, and data-driven problem solving. Active contributor to bridging academia and industry.
                        </p>
                        <ul className="space-y-3 text-zinc-500 dark:text-zinc-500 font-bold text-sm">
                            <li className="flex items-center"><CircleDot className="w-4 h-4 mr-3 text-[#84CC16]" /> Author of 20+ research publications</li>
                            <li className="flex items-center"><CircleDot className="w-4 h-4 mr-3 text-[#84CC16]" /> CSIR Junior and Senior Research Fellow</li>
                            <li className="flex items-center"><CircleDot className="w-4 h-4 mr-3 text-[#84CC16]" /> Strategic leadership in research planning</li>
                        </ul>
                    </motion.div>

                    {/* Dr. Sangita Roy Card */}
                    <motion.div
                        whileHover={{ y: -10 }}
                        className="bg-white dark:bg-zinc-900/50 rounded-[4rem] p-12 border border-zinc-100 dark:border-zinc-800 relative text-left transition-all duration-300 shadow-xl hover:shadow-2xl dark:hover:shadow-[0_0_40px_rgba(132,204,22,0.15)] dark:hover:border-lime-500/30 overflow-hidden"
                    >
                        <div className="w-20 h-20 bg-[#84CC16]/20 dark:bg-white/10 rounded-3xl flex items-center justify-center shadow-lg mb-8">
                            <UserCircle2 className="w-12 h-12 text-[#84CC16]" />
                        </div>
                        <h3 className="text-3xl font-black mb-2 text-zinc-900 dark:text-zinc-100">Dr. Sangita Roy</h3>
                        <p className="text-[#84CC16] font-bold text-lg mb-8 uppercase tracking-widest">Director | PhD (IIT Patna)</p>
                        <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed mb-6 font-medium">
                            Accomplished academic with expertise in Computer Science, Cybersecurity, and Blockchain. Assistant Professor at Thapar Institute. Experienced in industry-oriented and funded research.
                        </p>
                        <ul className="space-y-3 text-zinc-500 dark:text-zinc-500 font-bold text-sm">
                            <li className="flex items-center"><CircleDot className="w-4 h-4 mr-3 text-[#84CC16]" /> PhD from IIT Patna, Postdoc at Tel Aviv University</li>
                            <li className="flex items-center"><CircleDot className="w-4 h-4 mr-3 text-[#84CC16]" /> Former Senior Scientist at IIT Bombay</li>
                            <li className="flex items-center"><CircleDot className="w-4 h-4 mr-3 text-[#84CC16]" /> Leadership in technology innovation</li>
                        </ul>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Board;
