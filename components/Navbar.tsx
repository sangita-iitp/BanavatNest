import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowUpRight, Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

const Logo = () => (
    <div className="flex font-extrabold text-2xl tracking-tighter items-center group cursor-pointer">
        <div className="flex items-baseline">
            <span className="text-[#84CC16]">Banavat</span>
            <span className="text-[#5D3A1A] dark:text-zinc-100 transition-colors">Nest</span>
        </div>
    </div>
);

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const location = useLocation();

    const navLinks = [
        {
            name: 'About Us',
            path: '/about', // Fallback
            subItems: [
                { name: 'Our Name', path: '/about/name' },
                { name: 'Philosophy & Core Values', path: '/about/philosophy' },
                { name: 'Mission and Vision', path: '/about/mission' },
                { name: 'Our Team', path: '/about/team' },
                { name: 'Board of Directors', path: '/about/board' },
            ]
        },
        {
            name: 'What We Do',
            path: '/what-we-do',
            subItems: [
                { name: 'Focus Areas', path: '/what-we-do/focus' },
                { name: 'Domains', path: '/what-we-do/domains' },
            ]
        },
        {
            name: 'Academia-Industry Bridge',
            path: '/bridge',
            subItems: [
                { name: 'Collaboration Model', path: '/bridge/collaboration' },
                { name: 'Opportunities for Students', path: '/bridge/opportunities' },
                { name: 'Faculty Engagement', path: '/bridge/faculty' },
                { name: 'Industry Partnerships', path: '/bridge/partnerships' },
            ]
        },
        { name: 'Contact', path: '/contact' },
    ];

    const handleDropdownEnter = (name: string) => {
        setActiveDropdown(name);
    };

    const handleDropdownLeave = () => {
        setActiveDropdown(null);
    };

    return (
        <nav className="fixed top-0 w-full z-50 bg-white/90 dark:bg-[#09090b]/90 backdrop-blur-xl border-b border-gray-100/50 dark:border-zinc-800/50 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">
                    <Link to="/" className="flex items-center transition-transform hover:scale-[1.01]">
                        <Logo />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <div
                                key={link.name}
                                className="relative group h-20 flex items-center"
                                onMouseEnter={() => link.subItems && handleDropdownEnter(link.name)}
                                onMouseLeave={handleDropdownLeave}
                            >
                                {link.subItems ? (
                                    <button
                                        className={`text-sm font-bold transition-all flex items-center gap-1 py-1 ${location.pathname.startsWith(link.path)
                                            ? 'text-[#84CC16]'
                                            : 'text-gray-500 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-zinc-100'
                                            }`}
                                    >
                                        {link.name}
                                        <ChevronDown size={14} className={`transition-transform duration-200 ${activeDropdown === link.name ? 'rotate-180' : ''}`} />
                                    </button>
                                ) : (
                                    <Link
                                        to={link.path}
                                        className={`text-sm font-bold transition-all relative py-1 ${location.pathname === link.path
                                            ? 'text-[#84CC16]'
                                            : 'text-gray-500 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-zinc-100'
                                            }`}
                                    >
                                        {link.name}
                                        {location.pathname === link.path && (
                                            <motion.div
                                                layoutId="navUnderline"
                                                className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#84CC16] rounded-full"
                                            />
                                        )}
                                    </Link>
                                )}

                                {/* Dropdown Menu */}
                                {link.subItems && (
                                    <AnimatePresence>
                                        {activeDropdown === link.name && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                                exit={{ opacity: 0, y: 5, scale: 0.95 }}
                                                transition={{ duration: 0.2 }}
                                                className="absolute top-full left-0 w-64 bg-white dark:bg-[#09090b] border border-gray-100 dark:border-zinc-800 rounded-xl shadow-xl overflow-hidden py-2"
                                            >
                                                {link.subItems.map((subItem) => (
                                                    <Link
                                                        key={subItem.path}
                                                        to={subItem.path}
                                                        className="block px-4 py-3 text-sm text-gray-600 dark:text-zinc-400 hover:bg-gray-50 dark:hover:bg-zinc-900 hover:text-[#84CC16] dark:hover:text-[#84CC16] font-medium transition-colors"
                                                    >
                                                        {subItem.name}
                                                    </Link>
                                                ))}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                )}
                            </div>
                        ))}
                        <div className="flex items-center space-x-4 ml-4 pl-4 border-l border-gray-200 dark:border-zinc-800">
                            <ThemeToggle />
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Link
                                    to="/contact"
                                    className="bg-[#5D3A1A] dark:bg-zinc-100 text-white dark:text-zinc-900 px-7 py-2.5 rounded-full text-sm font-bold flex items-center hover:bg-[#4B2C13] dark:hover:bg-zinc-200 transition-all shadow-lg hover:shadow-[#84CC16]/20"
                                >
                                    Get Involved <ArrowUpRight className="ml-2 w-4 h-4" />
                                </Link>
                            </motion.div>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center space-x-4">
                        <ThemeToggle />
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-600 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-zinc-100 focus:outline-none p-2"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white dark:bg-[#09090b] border-b border-gray-100 dark:border-zinc-800 px-4 pt-2 pb-6 space-y-4 shadow-xl overflow-y-auto max-h-[80vh]"
                    >
                        {navLinks.map((link) => (
                            <div key={link.name}>
                                {link.subItems ? (
                                    <div className="py-2 border-b border-gray-50 dark:border-zinc-800 last:border-0 pointer-events-auto">
                                        <span className="block text-lg font-bold text-gray-900 dark:text-zinc-100 mb-2">
                                            {link.name}
                                        </span>
                                        <div className="pl-4 space-y-2 border-l-2 border-gray-100 dark:border-zinc-800">
                                            {link.subItems.map(subItem => (
                                                <Link
                                                    key={subItem.path}
                                                    to={subItem.path}
                                                    onClick={() => setIsOpen(false)}
                                                    className="block text-sm font-medium text-gray-600 dark:text-zinc-400 hover:text-[#84CC16] py-1"
                                                >
                                                    {subItem.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                ) : (
                                    <Link
                                        to={link.path}
                                        onClick={() => setIsOpen(false)}
                                        className="block text-lg font-bold text-gray-900 dark:text-zinc-100 hover:text-[#84CC16] py-2 border-b border-gray-50 dark:border-zinc-800 last:border-0"
                                    >
                                        {link.name}
                                    </Link>
                                )}
                            </div>
                        ))}
                        <Link
                            to="/contact"
                            onClick={() => setIsOpen(false)}
                            className="block w-full text-center bg-[#5D3A1A] dark:bg-zinc-100 text-white dark:text-zinc-900 px-6 py-4 rounded-xl font-bold shadow-lg mt-4"
                        >
                            Get Involved
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
