import React from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit, GlobeLock, Cpu, Tractor } from 'lucide-react';

const Domains = () => {
    const domains = [
        {
            title: 'AI, ML & Data Science',
            desc: 'Intelligent algorithms for prediction and optimization across engineering and health sectors. Data-driven models for complex problems.',
            icon: <BrainCircuit className="w-6 h-6" />,
            iconGradient: "from-blue-600 to-cyan-400"
        },
        {
            title: 'Cybersecurity & IoT',
            desc: 'Secure and decentralized systems for connected environments. Addressing network security, privacy, and blockchain-based solutions.',
            icon: <GlobeLock className="w-6 h-6" />,
            iconGradient: "from-[#84CC16] to-emerald-400"
        },
        {
            title: 'Smart Systems & Health',
            desc: 'Integrating sensing and automation for resource-efficient technologies. Sustainability-driven innovations for improved quality of life.',
            icon: <Cpu className="w-6 h-6" />,
            iconGradient: "from-purple-600 to-pink-400"
        },
        {
            title: 'Precision Agriculture',
            desc: 'Advanced data analytics and IoT monitoring to enhance farming productivity. Promoting sustainable and precision farming practices.',
            icon: <Tractor className="w-6 h-6" />,
            iconGradient: "from-[#84CC16] to-[#5D3A1A]"
        }
    ];

    return (
        <div className="min-h-screen bg-white dark:bg-[#09090b] transition-colors pb-24">
            <header className="bg-zinc-50 dark:bg-zinc-900/20 pt-32 pb-20 border-b border-gray-100 dark:border-zinc-800 relative overflow-hidden mb-12">
                <div className="absolute top-0 right-0 w-80 h-80 bg-[#84CC16]/5 blur-[150px] rounded-full pointer-events-none" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-6xl md:text-8xl font-black text-zinc-900 dark:text-zinc-100 mb-8 tracking-tighter"
                    >
                        Key <span className="text-[#84CC16]">Domains</span>
                    </motion.h1>
                    <p className="text-xl md:text-2xl text-gray-400 dark:text-zinc-400 font-medium max-w-3xl leading-relaxed">
                        Diverse expertise driving technological advancement across impactful sectors.
                    </p>
                </div>
            </header>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2  gap-6">
                    {domains.map((domain, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ y: -6 }}
                            className="bg-zinc-50 dark:bg-zinc-900/50 p-10 rounded-[2rem] border border-gray-100 dark:border-zinc-800 text-left group transition-all shadow-sm hover:shadow-lg"
                        >
                            <div className={`w-14 h-14 bg-gradient-to-br ${domain.iconGradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform shadow-sm`}>
                                <div className="text-white">{domain.icon}</div>
                            </div>
                            <h4 className="text-2xl font-black text-zinc-900 dark:text-white mb-4 tracking-tight">{domain.title}</h4>
                            <p className="text-base text-gray-500 dark:text-zinc-400 font-medium leading-relaxed">{domain.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Domains;
