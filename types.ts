export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  year: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface SocialLink {
  label: string;
  href: string;
}

export type Theme = 'light' | 'dark';

export type SectionId = 'hero' | 'work' | 'philosophy' | 'skills' | 'contact';