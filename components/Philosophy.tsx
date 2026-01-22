import React from 'react';
import { motion } from 'framer-motion';

export const Philosophy: React.FC = () => {
  return (
    <section id="philosophy" className="py-24 md:py-32 border-t border-black/5 dark:border-white/5">
       <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <h2 className="font-display font-medium text-sm tracking-widest uppercase text-text-muted-light dark:text-text-muted-dark">
            Philosophy
          </h2>
        </div>

        <div className="md:col-span-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="prose prose-lg dark:prose-invert"
          >
            <p className="font-sans text-xl md:text-2xl font-light leading-relaxed text-text-primary-light dark:text-text-primary-dark mb-8">
              Great software is an exercise in subtraction. It is not about adding features, but about removing friction.
            </p>
            
            <div className="space-y-6 text-text-secondary-light dark:text-text-secondary-dark leading-relaxed">
              <p>
                My approach to engineering is deeply rooted in systems thinking. I don't just write code; I design sustainable architectures that can evolve. I believe that the quality of the codebase directly reflects the quality of the user experience.
              </p>
              <p>
                In a world of noise, I strive for silence. Interfaces should be intuitive to the point of invisibility. Performance should be felt, not measured. Reliability is the baseline, not a feature.
              </p>
              <p>
                I partner with founders and design teams who value craftsmanship and long-term thinking over short-term hacks.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};