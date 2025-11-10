import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-white/60 text-sm">© {new Date().getFullYear()} Aura Story. All rights reserved.</p>
        <div className="flex items-center gap-6 text-sm">
          <a href="#chapter-one" className="hover:text-white text-white/70 uppercase tracking-widest">Begin</a>
          <a href="#chapters" className="hover:text-white text-white/70 uppercase tracking-widest">Chapters</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
