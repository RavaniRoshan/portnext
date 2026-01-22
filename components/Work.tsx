import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '../types';
import { ArrowUpRight } from 'lucide-react';

const projects: Project[] = [
  {
    id: '1',
    title: 'Vanguard Design System',
    description: 'Architected the core component library serving 40+ internal products. Reduced production build times by 35%.',
    tags: ['Architecture', 'React', 'TypeScript'],
    year: '2023',
    link: '#'
  },
  {
    id: '2',
    title: 'Metropolis Finance',
    description: 'Led the frontend overhaul for a high-frequency trading dashboard. Sub-millisecond data rendering optimization.',
    tags: ['Performance', 'WebGL', 'Sockets'],
    year: '2023',
    link: '#'
  },
  {
    id: '3',
    title: 'Chronos',
    description: 'Designed and engineered a collaborative scheduling engine. Acquired by [Redacted] in Q4.',
    tags: ['Product', 'Next.js', 'Postgres'],
    year: '2022',
    link: '#'
  },
];

export const Work: React.FC = () => {
  return (
    <section id="work" className="py-24 md:py-32 border-t border-black/5 dark:border-white/5">
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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="font-display text-2xl md:text-3xl font-medium text-text-primary-light dark:text-text-primary-dark group-hover:text-accent-light dark:group-hover:text-accent-dark transition-colors duration-300">
                  {project.title}
                </h3>
                <span className="font-mono text-sm text-text-muted-light dark:text-text-muted-dark">{project.year}</span>
              </div>
              
              <p className="text-lg text-text-secondary-light dark:text-text-secondary-dark max-w-xl leading-relaxed mb-4">
                {project.description}
              </p>
              
              <div className="flex items-center gap-4">
                <div className="flex gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs font-medium bg-black/5 dark:bg-white/5 px-2 py-1 rounded text-text-secondary-light dark:text-text-muted-dark">
                      {tag}
                    </span>
                  ))}
                </div>
                {project.link && (
                  <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-accent-light dark:text-accent-dark">
                    <ArrowUpRight size={18} />
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};