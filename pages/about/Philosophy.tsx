import React from 'react';
import { motion } from 'framer-motion';
import ImageCarousel from '../../components/ImageCarousel';

import img1 from '../../assets/homepage/Ai.png';
import img2 from '../../assets/homepage/agriculture.png';
import img3 from '../../assets/homepage/cyberSecure.png';
import img4 from '../../assets/homepage/smart.png';

const images = [img1, img2, img3, img4];

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
        <section className="min-h-screen bg-zinc-50 dark:bg-[#09090b] transition-colors py-24">
            {/* Header */}
            <div className="max-w-7xl mx-auto px-6 mb-20">
                <div className="max-w-4xl">
                    <h1 className="text-5xl md:text-7xl font-black text-zinc-900 dark:text-zinc-100 mb-6 tracking-tight">
                        Philosophy <span className="text-[#84CC16]">& Values</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-zinc-500 dark:text-zinc-400 leading-relaxed">
                        A unified philosophy where ideas are built with purpose and nurtured with care.
                    </p>
                </div>
            </div>

            {/* Main Layout */}
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                    {/* left — Philosophy Content */}
                    <div className="space-y-16">

                        {/* BANAVAT */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="bg-white dark:bg-zinc-900 rounded-3xl shadow-xl border border-zinc-200 dark:border-zinc-800 overflow-hidden"
                        >
                            <div className="p-8 border-b border-zinc-200 dark:border-zinc-800">
                                <h3 className="text-sm font-bold uppercase tracking-widest text-[#84CC16]">
                                    Our Foundation — BANAVAT
                                </h3>
                            </div>

                            {banavatValues.map((v, i) => (
                                <div
                                    key={i}
                                    className="group flex items-start p-6 border-b border-zinc-100 dark:border-zinc-800 last:border-0 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-[#84CC16]/10 flex items-center justify-center mr-6">
                                        <span className="text-xl font-black text-[#84CC16]">{v.letter}</span>
                                    </div>

                                    <div>
                                        <h4 className="font-bold text-zinc-900 dark:text-white mb-1">
                                            {v.title}
                                        </h4>
                                        <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                                            {v.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </motion.div>

                        {/* NEST */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="bg-white dark:bg-zinc-900 rounded-3xl shadow-xl border border-zinc-200 dark:border-zinc-800 overflow-hidden"
                        >
                            <div className="p-8 border-b border-zinc-200 dark:border-zinc-800">
                                <h3 className="text-sm font-bold uppercase tracking-widest text-[#84CC16]">
                                    Our Ecosystem — NEST
                                </h3>
                            </div>

                            {nestValues.map((v, i) => (
                                <div
                                    key={i}
                                    className="group flex items-start p-6 border-b border-zinc-100 dark:border-zinc-800 last:border-0 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-[#84CC16]/10 flex items-center justify-center mr-6">
                                        <span className="text-xl font-black text-[#84CC16]">{v.letter}</span>
                                    </div>

                                    <div>
                                        <h4 className="font-bold text-zinc-900 dark:text-white mb-1">
                                            {v.title}
                                        </h4>
                                        <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                                            {v.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </motion.div>

                    </div>
                    {/* right — Carousel */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:sticky lg:top-28"
                    >
                        <div className="bg-white dark:bg-zinc-900 rounded-3xl shadow-xl border border-zinc-200 dark:border-zinc-800 p-6">
                            <ImageCarousel images={images} />
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Philosophy;
