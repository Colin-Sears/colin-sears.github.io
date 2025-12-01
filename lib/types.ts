export type Mode = 'professional' | 'personal';

export interface Project {
  title: string;
  description: string;
  images: (string | null)[]; // Array of image paths, null for missing images
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  category: 'web' | 'mobile' | 'ai' | 'engineering' | 'other';
}

export interface Experience {
  company: string;
  role: string;
  startDate: string;
  endDate: string | 'Present';
  description: string;
  achievements: string[];
}

export interface Skill {
  category: string;
  items: string[];
}

export interface GitHubStats {
  totalCommits: number;
  publicRepos: number;
  contributions: number;
  languages: { name: string; percentage: number }[];
}

export interface LinkedInProfile {
  headline: string;
  summary: string;
  connections: number;
  positions: LinkedInPosition[];
  skills: string[];
  recommendations: number;
}

export interface LinkedInPosition {
  title: string;
  company: string;
  startDate: string;
  endDate: string | 'Present';
  description: string;
}

export interface TabletopGame {
  title: string;
  type: 'rpg' | 'board' | 'miniatures';
  image: string;
  description: string;
  sessions?: number;
}

export interface LoreDocument {
  title: string;
  category: string;
  preview: string;
  tags: string[];
  lastUpdated: string;
}
