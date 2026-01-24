import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, MessageSquare } from 'lucide-react';
import { Theme } from '../types';

interface ContactProps {
  theme: Theme;
}

export const Contact: React.FC<ContactProps> = ({ theme }) => {
  const isLight = theme === 'light';
  // Indigo-600 for light mode, Indigo-400 for dark mode
  const glowBase = isLight ? '79, 70, 229' : '129, 140, 248';

  return (
    <section id="contact" className="py-32 border-t border-black/5 dark:border-white/5">
       <div className="max-w-3xl mx-auto text-center space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-medium text-text-primary-light dark:text-text-primary-dark mb-6">
              Let's build something meaningful.
            </h2>
            <p className="text-xl text-text-secondary-light dark:text-text-secondary-dark font-light mb-10">
              Always open to discussing AI systems, research collaborations, or new engineering roles.
            </p>
            
            <motion.a 
              href="mailto:ravaniroshansingh@gmail.com" 
              variants={{
                initial: { scale: 1, boxShadow: "inset 0 0 0px 0px rgba(0,0,0,0)" },
                hover: {
                  scale: 1.05,
                  boxShadow: [
                    `inset 0 0 10px 1px rgba(${glowBase}, 0.2)`,
                    `inset 0 0 25px 4px rgba(${glowBase}, 0.4)`,
                    `inset 0 0 10px 1px rgba(${glowBase}, 0.2)`
                  ],
                  transition: {
                    scale: { type: "spring", stiffness: 400, damping: 17 },
                    boxShadow: { 
                      duration: 2, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }
                  }
                },
                tap: { scale: 0.95 }
              }}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              className="inline-flex items-center gap-2 px-8 py-4 bg-text-primary-light dark:bg-white text-white dark:text-black rounded-full font-medium"
            >
              <Mail size={18} />
              <span>Get in touch</span>
            </motion.a>
          </motion.div>

          <div className="flex justify-center gap-8 pt-12">
            {[
              { icon: Github, href: "https://github.com/RavaniRoshan", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com/in/roshan-ravani-3a79882a3", label: "LinkedIn" },
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="text-text-muted-light dark:text-text-muted-dark hover:text-text-primary-light dark:hover:text-text-primary-dark transition-colors duration-300"
              >
                <social.icon size={24} strokeWidth={1.5} />
              </motion.a>
            ))}
          </div>
       </div>
    </section>
  );
};