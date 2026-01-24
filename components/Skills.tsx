import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SkillGroup } from '../types';

const skillGroups: SkillGroup[] = [
  {
    category: 'Languages',
    items: ['Python (Research & Prod)', 'TypeScript / Node.js', 'Rust (Systems)', 'C++', 'SQL']
  },
  {
    category: 'AI & Systems',
    items: ['LLM Orchestration', 'RAG Pipelines', 'Multi-Agent Systems', 'LangGraph', 'Computer Vision', 'Gemini API']
  },
  {
    category: 'Stack & Cloud',
    items: ['FastAPI', 'React / Next.js', 'PostgreSQL', 'Docker', 'AWS / GCP', 'Vector Databases']
  }
];

export const Skills: React.FC = () => {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  return (
    <section id="skills" className="py-24 border-t border-black/5 dark:border-white/5">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <h2 className="font-display font-medium text-sm tracking-widest uppercase text-text-muted-light dark:text-text-muted-dark">
            Focus
          </h2>
        </div>

        <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-8">
          {skillGroups.map((group) => (
            <div 
              key={group.category}
              className="space-y-4"
              onMouseEnter={() => setHoveredCategory(group.category)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              <h3 className={`
                font-display text-lg font-medium transition-colors duration-300
                ${hoveredCategory && hoveredCategory !== group.category 
                  ? 'text-text-muted-light dark:text-text-muted-dark opacity-50' 
                  : 'text-text-primary-light dark:text-text-primary-dark'}
              `}>
                {group.category}
              </h3>
              
              <ul className="space-y-2">
                {group.items.map((item) => (
                  <motion.li 
                    key={item}
                    className={`
                      text-sm transition-all duration-300 cursor-default
                      ${hoveredCategory && hoveredCategory !== group.category
                        ? 'text-text-muted-light dark:text-text-muted-dark opacity-40 blur-[0.5px]' 
                        : 'text-text-secondary-light dark:text-text-secondary-dark'}
                      ${hoveredCategory === group.category 
                        ? 'text-text-primary-light dark:text-text-primary-dark translate-x-1' 
                        : ''}
                    `}
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};