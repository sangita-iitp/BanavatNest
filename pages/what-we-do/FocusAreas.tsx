import React from 'react';
import { motion } from 'framer-motion';
import { Microscope, Code2, Users2, Zap } from 'lucide-react';

const FocusCard: React.FC<{ area: any; idx: number }> = ({ area, idx }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ y: -8 }}
        viewport={{ once: true }}
        transition={{ duration: 0.25, delay: idx * 0.05 }}
        className={`bg-white dark:bg-zinc-900/50 p-10 rounded-[2.5rem] border border-gray-100 dark:border-zinc-800 transition-all duration-200 group flex flex-col items-start h-full text-left shadow-sm hover:shadow-xl`}
    >
        <div className={`w-16 h-16 ${area.bgColor} dark:bg-zinc-800 rounded-2xl flex items-center justify-center mb-6 shadow-inner`}>
            {area.icon}
        </div>
        <h3 className="text-2xl font-black text-zinc-900 dark:text-zinc-100 mb-4 tracking-tighter">{area.title}</h3>
        <p className="text-base text-gray-500 dark:text-zinc-400 font-medium leading-relaxed">{area.desc}</p>
    </motion.div>
);

const FocusAreas = () => {
    const focusAreas = [
        {
            title: 'Research & Development',
            desc: 'Addressing real-world problems through systematic investigation, analytical modeling, and experimental validation in pursuit of scalable solutions.',
            icon: <Microscope className="w-7 h-7 text-blue-500" />,
            bgColor: 'bg-blue-50'
        },
        {
            title: 'Product Prototyping',
            desc: 'Integrating design, engineering, and testing to translate research ideas into functional, industrial-grade prototypes tailored for deployment.',
            icon: <Code2 className="w-7 h-7 text-[#84CC16]" />,
            bgColor: 'bg-lime-50'
        },
        {
            title: 'Academia Collaboration',
            desc: 'Enabling student-driven projects and faculty-led innovation. Ensuring knowledge transfer and industry-relevant outcomes through active partnering.',
            icon: <Users2 className="w-7 h-7 text-purple-500" />,
            bgColor: 'bg-purple-50'
        },
        {
            title: 'Tech Transfer',
            desc: 'Transforming research outputs into deployable technologies through IP development, proof-of-concept validation, and commercialization support.',
            icon: <Zap className="w-7 h-7 text-amber-500" />,
            bgColor: 'bg-amber-50'
        }
    ];

    return (
        <div className="min-h-screen bg-zinc-50 dark:bg-[#09090b] transition-colors pb-24">
            <header className="bg-white dark:bg-zinc-900/20 pt-32 pb-20 border-b border-gray-100 dark:border-zinc-800 relative overflow-hidden mb-12">
                <div className="absolute top-0 right-0 w-80 h-80 bg-[#84CC16]/5 blur-[150px] rounded-full pointer-events-none" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-6xl md:text-8xl font-black text-zinc-900 dark:text-zinc-100 mb-8 tracking-tighter"
                    >
                        Focus <span className="text-[#84CC16]">Areas</span>
                    </motion.h1>
                    <p className="text-xl md:text-2xl text-gray-400 dark:text-zinc-400 font-medium max-w-3xl leading-relaxed">
                        From experimental development to market-ready prototypes, providing the technical foundation for innovation.
                    </p>
                </div>
            </header>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {focusAreas.map((area, idx) => (
                        <FocusCard key={idx} area={area} idx={idx} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FocusAreas;
