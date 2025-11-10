import React from 'react';
import { motion } from 'framer-motion';

const Chapter = ({ id, eyebrow, title, text, image, align = 'left' }) => {
  return (
    <section id={id} className="relative w-full bg-black text-white">
      <div className={`mx-auto max-w-7xl px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-16 items-center ${align === 'right' ? 'md:[&>*:first-child]:order-2' : ''}`}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="space-y-4"
        >
          <p className="text-sm tracking-widest text-white/60 uppercase">{eyebrow}</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold">{title}</h2>
          <p className="text-white/80 text-lg leading-relaxed max-w-xl">{text}</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="relative w-full h-80 sm:h-96 md:h-[28rem] overflow-hidden bg-gradient-to-br from-purple-600/30 via-blue-600/30 to-orange-500/30"
        >
          {image ? (
            <img src={image} alt="chapter" className="w-full h-full object-cover" />
          ) : (
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.35),transparent_60%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.35),transparent_60%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.35),transparent_60%)]" />
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Chapter;
