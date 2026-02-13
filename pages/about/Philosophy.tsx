import React from 'react';
import { motion } from 'framer-motion';

const Philosophy = () => {
    const banavatValues = [
        { letter: 'B', title: 'Building with Purpose', desc: 'Focusing on purposeful creation to address meaningful challenges.' },
        { letter: 'A', title: 'Analytical Thinking', desc: 'Rigorous analysis, critical reasoning, and evidence-based decision-making.' },
        { letter: 'N', title: 'Nurturing Curiosity', desc: 'Encouraging exploration, questioning, and continuous learning.' },
        { letter: 'A', title: 'Adaptability', desc: 'Staying flexible and responsive to new ideas and emerging technologies.' },
        { letter: 'V', title: 'Validation', desc: 'Refining ideas through systematic experimentation and iterative improvement.' },
        { letter: 'A', title: 'Accountability', desc: 'Integrity, responsibility, and ethical conduct are central.' },
        { letter: 'T', title: 'Translation', desc: 'Translating research outcomes into practical, scalable solutions.' },
    ];

    const nestValues = [
        { letter: 'N', title: 'Nurturing Ideas', desc: 'Supportive environment where ideas are encouraged and allowed to mature.' },
        { letter: 'E', title: 'Experimentation', desc: 'Learning through experimentation and evidence-based validation.' },
        { letter: 'S', title: 'Supportive Innovation', desc: 'Fostering collaboration across disciplines for shared problem-solving.' },
        { letter: 'T', title: 'Together', desc: 'Working together to deliver meaningful and lasting impact.' },
    ];

    return (
        <div className="min-h-screen bg-zinc-50 dark:bg-[#09090b] transition-colors pb-32">
            <header className="bg-white dark:bg-zinc-900/50 pt-32 pb-20 border-b border-gray-100 dark:border-zinc-800 grid-bg mb-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl">
                        <h1 className="text-5xl md:text-7xl font-black text-zinc-900 dark:text-zinc-100 mb-8 tracking-tighter leading-tight">
                            Philosophy <span className="text-[#84CC16]">& Values</span>
                        </h1>
                        <div className="w-24 h-2 bg-[#84CC16] mb-8" />
                        <p className="text-xl md:text-2xl text-gray-500 dark:text-zinc-400 font-medium leading-relaxed">
                            A unified philosophy where ideas are built with purpose and nurtured with care.
                        </p>
                    </div>
                </div>
            </header>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
                {/* BANAVAT SECTION */}
                <section>
                    <div className="mb-6">
                        <h3 className="text-xs font-black text-[#84CC16] uppercase tracking-[0.2em] mb-2">Our Foundation</h3>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-100 dark:border-zinc-800 shadow-xl dark:shadow-none overflow-hidden"
                    >
                        {banavatValues.map((v, i) => (
                            <div
                                key={i}
                                className={`group flex flex-row items-start p-6 border-b border-zinc-50 dark:border-zinc-800 last:border-0 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors duration-200`}
                            >
                                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#84CC16]/10 flex items-center justify-center mr-6 mt-1 group-hover:bg-[#84CC16] transition-colors duration-300">
                                    <span className="text-2xl font-black text-[#84CC16] group-hover:text-white transition-colors duration-300">{v.letter}</span>
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-zinc-900 dark:text-white mb-1">{v.title}</h4>
                                    <p className="text-sm text-zinc-500 dark:text-zinc-400 font-medium leading-relaxed">
                                        {v.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </section>

                {/* NEST SECTION */}
                <section>
                    <div className="mb-6">
                        <h3 className="text-xs font-black text-[#5D3A1A] dark:text-zinc-400 uppercase tracking-[0.2em] mb-2">Our Ecosystem</h3>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-[#5D3A1A]/5 dark:bg-zinc-900 rounded-3xl border border-[#5D3A1A]/10 dark:border-zinc-800 shadow-none overflow-hidden"
                    >
                        {nestValues.map((v, i) => (
                            <div
                                key={i}
                                className={`group flex flex-row items-start p-6 border-b border-[#5D3A1A]/5 dark:border-zinc-800 last:border-0 hover:bg-[#5D3A1A]/10 dark:hover:bg-zinc-800/50 transition-colors duration-200`}
                            >
                                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#5D3A1A] dark:bg-zinc-800 flex items-center justify-center mr-6 mt-1 group-hover:scale-110 transition-transform duration-300">
                                    <span className="text-2xl font-black text-white dark:text-zinc-200">{v.letter}</span>
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-[#5D3A1A] dark:text-white mb-1">{v.title}</h4>
                                    <p className="text-sm text-[#5D3A1A]/70 dark:text-zinc-400 font-medium leading-relaxed">
                                        {v.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </section>
            </div>
        </div>
    );
};

export default Philosophy;
