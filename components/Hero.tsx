import React from 'react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-[85vh] flex flex-col justify-center pt-20">
      <div className="space-y-8 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="font-display font-medium text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[1.1] text-text-primary-light dark:text-text-primary-dark">
            Building digital <br />
            systems with <br />
            <span className="text-text-secondary-light dark:text-text-muted-dark">clarity & intent.</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="max-w-md"
        >
          <p className="text-lg md:text-xl text-text-secondary-light dark:text-text-secondary-dark leading-relaxed font-light">
            I’m Roshan. A senior product engineer focused on scalable architecture, interface precision, and the space between design and code.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: 60 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="h-px bg-text-primary-light dark:bg-text-primary-dark"
        />
      </div>
    </section>
  );
};