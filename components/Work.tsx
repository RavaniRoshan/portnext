import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '../types';
import { ArrowUpRight, X, ExternalLink } from 'lucide-react';

const projects: Project[] = [
  {
    id: 'axiom',
    title: 'AXIOM-ONE',
    description: 'A reasoning-first research agent optimized for epistemic correctness rather than conversational fluency.',
    features: [
      'Designing a reasoning-first research agent optimized for epistemic correctness.',
      'Implements structured problem decomposition and iterative multi-step reasoning.',
      'Features self-verification mechanisms and explicit exposure of intermediate reasoning artifacts.',
      'Targeted for high-stakes research and analytical settings where auditability is critical.'
    ],
    tags: ['AI Agents', 'Reasoning Systems', 'Python', 'Research'],
    year: '2025',
    link: '#'
  },
  {
    id: 'legacylens',
    title: 'LegacyLens',
    description: 'AI Archaeologist for legacy codebases transforming millions of lines of code into dynamic dependency graphs.',
    features: [
      'Developed for a Kaggle competition addressing large-scale program comprehension.',
      'Transforms over one million lines of legacy source code into dynamic dependency graphs.',
      'Employs Gemini 3.0 Pro to trace control flow and identify structural fragility.',
      'Enables conversational interrogation of monolithic systems.'
    ],
    tags: ['Gemini 3.0 Pro', 'AST Analysis', 'Graph Theory', 'Kaggle'],
    year: '2025',
    link: '#'
  },
  {
    id: 'solar-api',
    title: 'ZERO-COMP Solar API',
    description: 'Enterprise-grade solar flare prediction platform powered by NASA-IBM’s Surya-1.0 transformer model.',
    features: [
      'Architected a real-time solar flare prediction platform using NASA-IBM Surya-1.0.',
      'Exposes predictive intelligence through RESTful APIs and WebSocket alerts.',
      'Includes a Next.js-based analytical dashboard for real-time monitoring.',
      'Engineered with FastAPI, Supabase, and deployed for scalable production use.'
    ],
    tags: ['FastAPI', 'Transformers', 'Next.js', 'WebSockets'],
    year: '2025',
    link: '#'
  },
  {
    id: 'agent-x',
    title: 'Agent-X',
    description: 'Browser-native AI automation agent capable of executing complex web tasks using vision-language models.',
    features: [
      'Built a browser-native AI agent executing web tasks from natural language.',
      'Integrates Python, Playwright, React, and Gemini 2.5.',
      'Designed for robust, hands-free interaction with live web environments.',
      'Emphasizes safety, transparency, and open-source extensibility.'
    ],
    tags: ['Playwright', 'Gemini 2.5', 'React', 'Automation'],
    year: '2024',
    link: '#'
  }
];

export const Work: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  return (
    <section id="work" className="py-24 md:py-32 border-t border-black/5 dark:border-white/5 relative">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <h2 className="font-display font-medium text-sm tracking-widest uppercase text-text-muted-light dark:text-text-muted-dark mb-4">
            Selected Work
          </h2>
        </div>
        
        <div className="md:col-span-8 space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              layoutId={`project-container-${project.id}`}
              onClick={() => setSelectedProject(project)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="flex justify-between items-baseline mb-2">
                <motion.h3 
                  layoutId={`project-title-${project.id}`}
                  className="font-display text-2xl md:text-3xl font-medium text-text-primary-light dark:text-text-primary-dark group-hover:text-accent-light dark:group-hover:text-accent-dark transition-colors duration-300"
                >
                  {project.title}
                </motion.h3>
                <span className="font-mono text-sm text-text-muted-light dark:text-text-muted-dark">{project.year}</span>
              </div>
              
              <motion.p 
                layoutId={`project-desc-${project.id}`}
                className="text-lg text-text-secondary-light dark:text-text-secondary-dark max-w-xl leading-relaxed mb-4"
              >
                {project.description}
              </motion.p>
              
              <div className="flex items-center gap-4">
                <div className="flex gap-2 flex-wrap">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs font-medium bg-black/5 dark:bg-white/5 px-2 py-1 rounded text-text-secondary-light dark:text-text-muted-dark">
                      {tag}
                    </span>
                  ))}
                </div>
                <motion.div className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-accent-light dark:text-accent-dark">
                  <ArrowUpRight size={18} />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/20 dark:bg-black/60 backdrop-blur-sm z-[60]"
            />
            <div className="fixed inset-0 flex items-center justify-center z-[70] p-4 pointer-events-none">
              <motion.div
                layoutId={`project-container-${selectedProject.id}`}
                className="w-full max-w-2xl bg-surface-light dark:bg-surface-dark rounded-2xl shadow-2xl overflow-hidden pointer-events-auto border border-black/5 dark:border-white/10"
              >
                <div className="relative p-8 md:p-10">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProject(null);
                    }}
                    className="absolute top-6 right-6 p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 text-text-secondary-light dark:text-text-secondary-dark transition-colors"
                  >
                    <X size={20} />
                  </button>

                  <div className="space-y-6">
                    <div>
                      <motion.h3 
                        layoutId={`project-title-${selectedProject.id}`}
                        className="font-display text-3xl md:text-4xl font-semibold text-text-primary-light dark:text-text-primary-dark mb-2"
                      >
                        {selectedProject.title}
                      </motion.h3>
                      <p className="font-mono text-sm text-accent-light dark:text-accent-dark">
                        {selectedProject.year}
                      </p>
                    </div>

                    <motion.p 
                      layoutId={`project-desc-${selectedProject.id}`}
                      className="text-lg text-text-secondary-light dark:text-text-secondary-dark leading-relaxed font-light"
                    >
                      {selectedProject.description}
                    </motion.p>

                    <div className="w-full h-px bg-black/5 dark:bg-white/5 my-6" />

                    <div className="space-y-4">
                      <h4 className="text-sm font-medium uppercase tracking-widest text-text-muted-light dark:text-text-muted-dark">
                        Key Features
                      </h4>
                      <ul className="space-y-3">
                        {selectedProject.features?.map((feature, i) => (
                          <motion.li 
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 + (i * 0.1) }}
                            key={i} 
                            className="flex gap-3 text-text-secondary-light dark:text-text-secondary-dark"
                          >
                            <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-accent-light dark:bg-accent-dark mt-2.5" />
                            <span className="leading-relaxed">{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-6 flex flex-wrap gap-2">
                      {selectedProject.tags.map((tag) => (
                        <span 
                          key={tag} 
                          className="px-3 py-1.5 text-xs font-medium rounded-md bg-black/5 dark:bg-white/5 text-text-primary-light dark:text-text-primary-dark border border-black/5 dark:border-white/5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {selectedProject.link && (
                      <div className="pt-4">
                         <a 
                          href={selectedProject.link}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-medium text-accent-light dark:text-accent-dark hover:underline underline-offset-4"
                        >
                          View Project <ExternalLink size={14} />
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};