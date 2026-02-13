import React from "react";
import {
  ArrowRight,
  Brain,
  Shield,
  Zap,
  Microscope,
  GraduationCap,
  Building2,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import FluidCursor from "../components/FluidCursor";
import DomainCarousel from "../components/DomainCarousel";
import InfiniteUpdateBar from "../components/InfiniteUpdateBar";
import PartnersFeedback from "../components/PartnersFeedback";
import image_agriculture from "../assets/homepage/agriculture.png";
import image_ai from "../assets/homepage/Ai.png";
import image_cyber from "../assets/homepage/cyberSecure.png";
import image_smart from "../assets/homepage/smart.png";

const Home = () => {
  const { scrollY } = useScroll();
  const y2 = useTransform(scrollY, [0, 500], [0, 30]);

  const domains = [
    {
      title: "AI & ML",
      url: image_ai,
      desc: "Artificial Intelligence, Machine Learning & Data Science",
      icon: <Brain className="w-7 h-7" />,
      accent: "from-[#84CC16] to-cyan-500",
      iconGradient: "from-blue-500 to-cyan-400",
    },
    {
      title: "Cybersecurity",
      url: image_cyber,
      desc: "Cybersecurity, Internet of Things & Blockchain",
      icon: <Shield className="w-7 h-7" />,
      accent: "from-emerald-500 to-[#84CC16]",
      iconGradient: "from-green-500 to-emerald-400",
    },
    {
      title: "Smart Systems",
      url: image_smart,
      desc: "Healthcare & Sustainability focus areas",
      icon: <Microscope className="w-7 h-7" />,
      accent: "from-purple-500 to-pink-500",
      iconGradient: "from-purple-500 to-pink-400",
    },
    {
      title: "Agriculture",
      url: image_agriculture,
      desc: "Smart Farming and Precision Agriculture",
      icon: <Zap className="w-7 h-7" />,
      accent: "from-amber-500 to-[#84CC16]",
      iconGradient: "from-lime-500 to-yellow-600",
    },
  ];

  const updates = [
    {
      title: "🚀 BanavatNest 2.0 is now live! Explore our new research ecosystem.",
      route: "/about",
    },
    {
      title: "🏆 Upcoming Hackathon: 'Innovate against Climate Change' - Register by March 15th.",
      route: "/news/hackathon-climate-change",
    },
    {
      title: "📄 Nesearew Rch Paper Published: 'AI in Sustainable Agriculture' by Dr. Sharma.",
      route: "/research/ai-agriculture",
    },
    {
      title: "🤝 Partnership Announcement: Collaborating with TechGiant Industries for IoT solutions.",
      route: "/partnerships/techgiant",
    },
    {
      title: "🎓 Student Internship Program Applications are now open for Summer 2026.",
      route: "/careers/internships",
    },
  ];

  return (
    <div className="relative pt-20"> {/* Added pt-20 to account for fixed navbar, ensuring bar is visible below it */}
      <FluidCursor />

      {/* Infinite Update Bar positioned below fixed navbar */}
      <div className="relative z-30 bg-zinc-50 dark:bg-[#09090b]">
        <InfiniteUpdateBar updates={updates} />
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden grid-bg pt-12 pb-24 md:pt-12 md:pb-40 dark:bg-[#09090b]">
        <div className="hidden dark:block">
          <motion.div
            animate={{ scale: [1, 1.05, 1], opacity: [0.08, 0.12, 0.08] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute top-[15%] right-[5%] w-[35rem] h-[35rem] bg-[#84CC16]/10 blur-[130px] rounded-full pointer-events-none"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center space-x-3 px-4 py-1.5 rounded-full bg-lime-50 dark:bg-lime-900/10 border border-lime-100/50 dark:border-lime-500/20 mb-10 shadow-sm"
          >
            <span className="flex h-2 w-2 rounded-full bg-[#84CC16] animate-pulse"></span>
            <span className="text-[10px] font-black text-[#65A30D] dark:text-[#84CC16] uppercase tracking-[0.2em]">
              Research-Led Innovation Ecosystem
            </span>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
            <div className="max-w-3xl">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-7xl lg:text-[80px] font-black text-zinc-900 dark:text-zinc-100 tracking-tighter leading-[0.9] mb-12"
              >
                Build with <br />
                <span className="text-zinc-500 dark:text-zinc-500">
                  Purpose
                </span>{" "}
                <br />
                Nurture to <br />
                <span className="text-[#84CC16]">Impact</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-xl md:text-2xl text-gray-500 dark:text-zinc-400 font-medium leading-relaxed mb-14 max-w-xl"
              >
                BanavatNest transforms curiosity into practical, scalable, and
                impactful solutions through systematic investigation.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start"
              >
                <Link
                  to="/services"
                  className="bg-[#5D3A1A] text-white px-10 py-5 rounded-full font-black text-lg hover:bg-[#4B2C13] transition-all shadow-xl flex items-center justify-center hover:scale-[1.03] active:scale-95 group"
                >
                  What We Do{" "}
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/bridge"
                  className="border-2 border-zinc-900 dark:border-zinc-700 bg-transparent text-zinc-900 dark:text-zinc-100 px-10 py-5 rounded-full font-black text-lg hover:bg-zinc-900 dark:hover:bg-zinc-700 hover:text-white transition-all flex items-center justify-center hover:scale-[1.03] active:scale-95"
                >
                  Our Bridge
                </Link>
              </motion.div>
            </div>
            <motion.div
              style={{ y: y2 }}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="w-full lg:w-[120%]" // Make it slightly wider to peek
            >
              <DomainCarousel items={domains} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partners & Feedback Section */}
      <PartnersFeedback />


      {/* Mission & Vision Section - Fixed for Light Mode */}
      {/* <section className="py-32 bg-white dark:bg-black overflow-hidden relative border-y border-gray-100 dark:border-zinc-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 text-left">
              <h2 className="text-4xl md:text-5xl font-black text-zinc-900 dark:text-white tracking-tighter mb-6">Creation and <span className="text-[#84CC16]">Nurturing.</span></h2>
              <div className="w-16 h-1 bg-[#84CC16] mb-6" />
              <p className="text-lg text-zinc-600 dark:text-zinc-400 font-medium leading-relaxed">
                Thoughtfully building and carefully growing ideas into impactful industrial and societal innovations.
              </p>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-zinc-50 dark:bg-zinc-800 p-12 rounded-[3rem] border border-gray-100 dark:border-zinc-700/50 text-left transition-all shadow-sm dark:hover:shadow-[0_0_40px_rgba(132,204,22,0.1)]"
              >
                <div className="text-[#84CC16] font-black text-xs uppercase tracking-widest mb-4">Our Mission</div>
                <p className="text-xl font-bold text-zinc-900 dark:text-white leading-tight">Shaping curiosity-driven concepts into innovative, practical, and scalable solutions through R&D.</p>
              </motion.div>
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-[#84CC16] p-12 rounded-[3rem] text-left transition-all shadow-lg"
              >
                <div className="text-[#5D3A1A] font-black text-xs uppercase tracking-widest mb-4">Our Vision</div>
                <p className="text-xl font-bold text-zinc-900 leading-tight">Becoming a research-driven ecosystem that nurtures ideas from curiosity to lasting global impact.</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Bridge Preview Section */}
      {/* <section className="py-32 bg-white dark:bg-[#0c0c0e] transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black text-zinc-900 dark:text-zinc-100 mb-8 tracking-tighter">Bridging the Gap</h2>
            <p className="text-xl text-gray-500 dark:text-zinc-400 font-medium leading-relaxed">
              Acting as a dynamic bridge between academia, industry, and society to address real-world challenges through co-creation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <GraduationCap className="w-10 h-10 text-[#84CC16]" />, title: "Students", desc: "Project-based learning and early exposure to real-world industrial challenges." },
              { icon: <Microscope className="w-10 h-10 text-blue-600" />, title: "Faculty", desc: "Mentors and domain experts guiding projects with academic rigor." },
              { icon: <Building2 className="w-10 h-10 text-zinc-800 dark:text-zinc-200" />, title: "Industry", desc: "Innovation-driven solutions providing technical feasibility and prototyping." },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -8 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                className={`p-12 rounded-[3rem] border border-gray-100 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 shadow-sm hover:shadow-xl dark:hover:shadow-[0_0_40px_rgba(132,204,22,0.1)] transition-all duration-300 text-left group`}
              >
                <div className="w-16 h-16 bg-gray-50 dark:bg-zinc-800 rounded-2xl flex items-center justify-center mb-10 group-hover:scale-105 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-black mb-6 tracking-tight text-zinc-900 dark:text-zinc-100">{item.title}</h3>
                <p className="text-lg text-gray-500 dark:text-zinc-400 font-medium leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Home;
