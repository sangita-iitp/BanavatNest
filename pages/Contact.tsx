import React from 'react';
import { Mail, Phone, MapPin, Send, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div className="pb-24 dark:bg-[#09090b] transition-colors duration-300">
      <header className="bg-white dark:bg-zinc-900/20 pt-32 pb-20 border-b border-gray-100 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-6xl md:text-8xl font-extrabold text-zinc-900 dark:text-zinc-100 mb-8 tracking-tighter">
            Contact <span className="text-[#84CC16]">Us.</span>
          </h1>
          <p className="text-xl text-gray-500 dark:text-zinc-400 max-w-2xl font-medium">
            Reach out to explore collaboration, internship opportunities, or general R&D inquiries.
          </p>
        </div>
      </header>

      <section className="py-24 grid-bg dark:bg-[#09090b]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
               <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 className="bg-white dark:bg-zinc-900 p-10 rounded-[2.5rem] border border-gray-100 dark:border-zinc-800 shadow-sm text-left"
               >
                  <h3 className="text-2xl font-black mb-8 text-zinc-900 dark:text-zinc-100 uppercase tracking-tight">Direct Channels</h3>
                  <div className="space-y-8">
                    <div className="flex items-start gap-6 group">
                       <div className="shrink-0 p-4 bg-lime-50 dark:bg-lime-900/20 text-[#84CC16] rounded-2xl group-hover:scale-110 transition-transform">
                          <Mail />
                       </div>
                       <div>
                          <p className="text-[10px] font-black text-gray-400 dark:text-zinc-400 uppercase tracking-[0.2em] mb-1">Email</p>
                          <p className="text-lg font-bold text-zinc-900 dark:text-zinc-100">banavatnest@gmail.com</p>
                       </div>
                    </div>
                    <div className="flex items-start gap-6 group">
                       <div className="shrink-0 p-4 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-2xl group-hover:scale-110 transition-transform">
                          <Phone />
                       </div>
                       <div>
                          <p className="text-[10px] font-black text-gray-400 dark:text-zinc-400 uppercase tracking-[0.2em] mb-1">Phone</p>
                          <p className="text-lg font-bold text-zinc-900 dark:text-zinc-100">+91 99340 44777</p>
                       </div>
                    </div>
                    <div className="flex items-start gap-6 group">
                       <div className="shrink-0 p-4 bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 rounded-2xl group-hover:scale-110 transition-transform">
                          <MapPin />
                       </div>
                       {/* <div>
                          <p className="text-[10px] font-black text-gray-400 dark:text-zinc-400 uppercase tracking-[0.2em] mb-1">Location</p>
                          <p className="text-sm font-bold text-zinc-900 dark:text-zinc-100 leading-snug">
                            Sutahata, East Midnapore,<br/>West Bengal, India – 721645
                          </p>
                       </div> */}
                    </div>
                  </div>
               </motion.div>
            </div>

            <motion.div 
               initial={{ opacity: 0, scale: 0.98 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               className="bg-white dark:bg-[#18181B] p-10 md:p-14 rounded-[3rem] text-zinc-900 dark:text-white border border-gray-100 dark:border-zinc-800 shadow-2xl text-left transition-all"
            >
               <h3 className="text-2xl font-black mb-8 uppercase tracking-tight text-zinc-900 dark:text-white">Drop a Note</h3>
               <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                     <div>
                        <label className="block text-[10px] font-black text-gray-500 dark:text-zinc-500 uppercase tracking-widest mb-2">Name</label>
                        <input type="text" className="w-full bg-gray-50 dark:bg-zinc-900/50 border border-gray-200 dark:border-zinc-700/30 rounded-xl px-5 py-3 text-zinc-900 dark:text-white focus:outline-none focus:border-[#84CC16] transition-all text-sm" placeholder="Your Name" />
                     </div>
                     <div>
                        <label className="block text-[10px] font-black text-gray-500 dark:text-zinc-500 uppercase tracking-widest mb-2">Email</label>
                        <input type="email" className="w-full bg-gray-50 dark:bg-zinc-900/50 border border-gray-200 dark:border-zinc-700/30 rounded-xl px-5 py-3 text-zinc-900 dark:text-white focus:outline-none focus:border-[#84CC16] transition-all text-sm" placeholder="your@email.com" />
                     </div>
                  </div>
                  <div>
                    <label className="block text-[10px] font-black text-gray-500 dark:text-zinc-500 uppercase tracking-widest mb-2">Message</label>
                    <textarea rows={4} className="w-full bg-gray-50 dark:bg-zinc-900/50 border border-gray-200 dark:border-zinc-700/30 rounded-xl px-5 py-3 text-zinc-900 dark:text-white focus:outline-none focus:border-[#84CC16] transition-all text-sm" placeholder="Tell us about your project or query..."></textarea>
                  </div>
                  <motion.button 
                    whileHover={{ scale: 1.02 }} 
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-[#84CC16] text-zinc-900 font-black py-4 rounded-xl flex items-center justify-center hover:bg-lime-300 transition-all shadow-lg"
                  >
                    Send Message <Send className="ml-2 w-4 h-4" />
                  </motion.button>
               </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}; export default Contact;