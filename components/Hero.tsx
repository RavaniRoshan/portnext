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
            AI Engineer & <br />
            Full-Stack Developer
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="max-w-xl"
        >
          <p className="text-lg md:text-xl text-text-secondary-light dark:text-text-secondary-dark leading-relaxed font-light">
            I build intelligent systems and large-scale software architectures. 
            Research-oriented focus on <span className="text-text-primary-light dark:text-text-primary-dark font-normal">agentic AI</span>, <span className="text-text-primary-light dark:text-text-primary-dark font-normal">reasoning models</span>, and <span className="text-text-primary-light dark:text-text-primary-dark font-normal">production-grade infrastructure</span>.
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