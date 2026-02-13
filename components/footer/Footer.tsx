import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Facebook, Instagram, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';

const Logo = () => (
    <div className="flex font-extrabold text-2xl tracking-tighter items-center group cursor-pointer">
        <div className="flex items-baseline">
            <span className="text-[#84CC16]">Banavat</span>
            <span className="text-[#5D3A1A] dark:text-zinc-100 transition-colors">Nest</span>
        </div>
    </div>
);

const Footer = () => {
    const socialLinks = [
        { Icon: Linkedin, href: "#", label: "LinkedIn" },
        { Icon: Facebook, href: "#", label: "Facebook" },
        { Icon: Instagram, href: "#", label: "Instagram" },
        { Icon: Twitter, href: "#", label: "X (Twitter)" },
    ];

    return (
        <footer className="bg-white dark:bg-[#070708] pt-24 pb-12 border-t border-gray-100 dark:border-zinc-900 relative overflow-hidden transition-colors">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-1">
                        <Link to="/" className="inline-block transition-transform hover:scale-105 mb-6">
                            <Logo />
                        </Link>
                        <div className="text-gray-500 dark:text-zinc-400 text-sm leading-relaxed font-medium space-y-2">
                            <p>BanavatNest Private Limited</p>
                            <p>CIN: U72100WB2025PTC280919</p>
                        </div>
                        <div className="mt-8 flex space-x-3">
                            {socialLinks.map(({ Icon, href }, i) => (
                                <motion.div key={i} whileHover={{ y: -5, scale: 1.1 }}>
                                    <a href={href} className="block p-2.5 bg-gray-50 dark:bg-zinc-800/50 rounded-xl hover:bg-lime-50 dark:hover:bg-lime-900/10 text-gray-400 dark:text-zinc-500 hover:text-[#84CC16] transition-all">
                                        <Icon className="w-5 h-5" />
                                    </a>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-zinc-900 dark:text-zinc-100 font-bold mb-8 text-lg">Platform</h4>
                        <ul className="space-y-4 text-sm text-gray-500 dark:text-zinc-400 font-bold">
                            <li><Link to="/what-we-do/focus" className="hover:text-[#84CC16] transition-colors flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-lime-400 mr-2" />Focus Areas</Link></li>
                            <li><Link to="/what-we-do/domains" className="hover:text-[#84CC16] transition-colors flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-lime-400 mr-2" />Research Domains</Link></li>
                            <li><Link to="/bridge/collaboration" className="hover:text-[#84CC16] transition-colors flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-lime-400 mr-2" />Collaboration</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-zinc-900 dark:text-zinc-100 font-bold mb-8 text-lg">Company</h4>
                        <ul className="space-y-4 text-sm text-gray-500 dark:text-zinc-400 font-bold">
                            <li><Link to="/about/name" className="hover:text-[#84CC16] transition-colors flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-[#5D3A1A] dark:bg-zinc-100 mr-2" />About Us</Link></li>
                            <li><Link to="/privacy" className="hover:text-[#84CC16] transition-colors flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-[#5D3A1A] dark:bg-zinc-100 mr-2" />Privacy Policy</Link></li>
                            <li><Link to="/terms" className="hover:text-[#84CC16] transition-colors flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-[#5D3A1A] dark:bg-zinc-100 mr-2" />Terms of Use</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-zinc-900 dark:text-zinc-100 font-bold mb-8 text-lg">Contact & Address</h4>
                        <ul className="space-y-4 text-sm text-gray-500 dark:text-zinc-400 font-bold">
                            <li className="flex items-start"><Mail className="w-5 h-5 mr-3 text-[#84CC16] shrink-0" /> banavatnest@gmail.com</li>
                            <li className="flex items-start"><Phone className="w-5 h-5 mr-3 text-[#84CC16] shrink-0" /> +91 99340 44777<br />+91 80023 96506</li>
                            <li className="flex items-start"><MapPin className="w-5 h-5 mr-3 text-[#84CC16] shrink-0" />
                                <span>
                                    Registered Address:<br />
                                    C/O Utsab Roy,<br />
                                    Vill–Bajitpur, Gobindpurbajitpur,<br />
                                    Sutahata, East Midnapore,<br />
                                    West Bengal, India – 721645
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-100 dark:border-zinc-900 pt-10 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 dark:text-zinc-500 font-medium">
                    <p>© 2025 BanavatNest Private Limited. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
