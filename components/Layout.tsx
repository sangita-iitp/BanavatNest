import React from 'react';
import Navbar from './Navbar';
import Footer from './footer/Footer';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col selection:bg-[#84CC16]/20 selection:text-[#5D3A1A] dark:selection:text-zinc-100 transition-colors bg-zinc-50 dark:bg-[#09090b]">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;