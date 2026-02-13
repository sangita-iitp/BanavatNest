import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Rocket } from 'lucide-react';

const Opportunities = () => {
    const opps = [
        {
            icon: <GraduationCap />,
            color: "bg-blue-50 dark:bg-blue-900/20 text-blue-600",
            title: "Undergraduate Students",
            text: "Engage through exploratory projects, internships, and innovation challenges aimed at skill development and early research exposure."
        },
        {
            icon: <BookOpen />,
            color: "bg-purple-50 dark:bg-purple-900/20 text-purple-600",
            title: "Postgraduate Students",
            text: "Work on advanced problem-solving, system design, and prototype development aligned with industry needs."
        },
        {
            icon: <Rocket />,
            color: "bg-zinc-100 dark:bg-zinc-800 text-[#84CC16]",
            title: "Doctoral Researchers",
            text: "Supported through industry-relevant research problems, joint supervision, access to real datasets, and opportunities for funded research."
        }
    ];

    return (
        <div className="min-h-screen bg-white dark:bg-[#09090b] transition-colors pb-24">
            <header className="bg-zinc-50 dark:bg-zinc-900/40 pt-32 pb-20 border-b border-gray-100 dark:border-zinc-800 grid-bg mb-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl text-left">
                        <h1 className="text-6xl md:text-8xl font-extrabold text-zinc-900 dark:text-zinc-100 mb-8 leading-tight tracking-tighter">
                            Student <span className="text-[#84CC16]">Growth</span>
                        </h1>
                        <p className="text-xl text-gray-500 dark:text-zinc-400 font-medium leading-relaxed">
                            Creating research and innovation opportunities for students at all levels.
                        </p>
                    </div>
                </div>
            </header>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="space-y-6">
                    {opps.map((item, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ scale: 1.01 }}
                            className="flex flex-col md:flex-row gap-8 p-10 bg-zinc-50 dark:bg-zinc-900/30 rounded-[2.5rem] border border-gray-100 dark:border-zinc-800 hover:border-[#84CC16]/30 transition-all"
                        >
                            <div className={`shrink-0 w-20 h-20 ${item.color} rounded-3xl flex items-center justify-center shadow-sm`}>
                                {React.cloneElement(item.icon as React.ReactElement<any>, { className: "w-10 h-10" })}
                            </div>
                            <div>
                                <h4 className="text-3xl font-black text-zinc-900 dark:text-zinc-100 mb-3">{item.title}</h4>
                                <p className="text-lg text-zinc-500 dark:text-zinc-400 font-medium leading-relaxed max-w-3xl">{item.text}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Opportunities;
