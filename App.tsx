import React, { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Work } from './components/Work';
import { Philosophy } from './components/Philosophy';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { SectionId, Theme } from './types';

const App: React.FC = () => {
  const [theme, setTheme] = useState<Theme>('light');
  const [activeSection, setActiveSection] = useState<SectionId>('hero');

  // Handle Theme Logic
  useEffect(() => {
    // Check system preference
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    }
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  // Handle Scroll Spy Logic
  useEffect(() => {
    const handleScroll = () => {
      const sections: SectionId[] = ['hero', 'work', 'philosophy', 'skills', 'contact'];
      
      // Find the section that is currently most visible
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the top of the section is within the top third of the viewport
          if (rect.top <= window.innerHeight / 3 && rect.bottom >= window.innerHeight / 3) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: SectionId) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark text-text-primary-light dark:text-text-primary-dark transition-colors duration-500 font-sans selection:bg-accent-light/30 dark:selection:bg-accent-dark/30">
      
      <Navigation 
        activeSection={activeSection} 
        theme={theme} 
        toggleTheme={toggleTheme}
        onNavigate={scrollToSection}
      />

      <main className="max-w-5xl mx-auto px-6 sm:px-8 md:px-12">
        <Hero />
        <Work />
        <Philosophy />
        <Skills />
        <Contact theme={theme} />
      </main>

      <footer className="py-8 text-center text-xs text-text-muted-light dark:text-text-muted-dark font-mono">
        <p>© {new Date().getFullYear()} Roshan. Designed & Engineered with precision.</p>
      </footer>
    </div>
  );
};

export default App;