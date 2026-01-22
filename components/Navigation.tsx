import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { SectionId, Theme } from '../types';

interface NavigationProps {
  activeSection: SectionId;
  theme: Theme;
  toggleTheme: () => void;
  onNavigate: (id: SectionId) => void;
}

const navItems: { id: SectionId; label: string }[] = [
  { id: 'work', label: 'Selected Work' },
  { id: 'philosophy', label: 'Philosophy' },
  { id: 'contact', label: 'Contact' },
];

export const Navigation: React.FC<NavigationProps> = ({ 
  activeSection, 
  theme, 
  toggleTheme,
  onNavigate 
}) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, x: "-50%", opacity: 0 }}
      animate={{ y: 0, x: "-50%", opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-6 left-1/2 z-50 w-auto max-w-[90vw]`}
    >
      <div 
        className={`
          relative flex items-center gap-1 px-2 py-2 rounded-full border transition-all duration-300
          ${scrolled 
            ? 'bg-white/70 dark:bg-black/60 backdrop-blur-md border-black/5 dark:border-white/10 shadow-sm' 
            : 'bg-white/50 dark:bg-black/40 backdrop-blur-sm border-transparent'
          }
        `}
      >
        {/* Home/Logo as implicit nav item */}
        <button
          onClick={() => onNavigate('hero')}
          className="px-4 py-2 font-display font-bold text-sm tracking-tight hover:opacity-70 transition-opacity"
        >
          R.
        </button>

        <div className="w-px h-4 bg-black/10 dark:bg-white/10 mx-1" />

        {/* Nav Links */}
        <ul className="flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            
            return (
              <li key={item.id} className="relative">
                <button
                  onClick={() => onNavigate(item.id)}
                  className={`
                    relative px-4 py-2 text-sm font-medium transition-colors duration-300 z-10
                    ${isActive 
                      ? 'text-text-primary-light dark:text-text-primary-dark' 
                      : 'text-text-secondary-light dark:text-text-secondary-dark hover:text-text-primary-light dark:hover:text-text-primary-dark'
                    }
                  `}
                >
                  {item.label}
                  
                  {/* Signature Micro-interaction: Smooth sliding underline */}
                  {isActive && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-black/5 dark:bg-white/10 rounded-full -z-10"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </button>
              </li>
            );
          })}
        </ul>

        <div className="w-px h-4 bg-black/10 dark:bg-white/10 mx-1" />

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="p-2 ml-1 rounded-full text-text-secondary-light dark:text-text-secondary-dark hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
          aria-label="Toggle dark mode"
        >
          <AnimatePresence mode='wait'>
            {theme === 'light' ? (
              <motion.div
                key="moon"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
              >
                <Moon size={16} />
              </motion.div>
            ) : (
              <motion.div
                key="sun"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
              >
                <Sun size={16} />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>
    </motion.nav>
  );
};