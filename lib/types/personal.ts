// Types for personal/hobby content

export interface TabletopGame {
  id: string;
  title: string;
  category: 'rpg' | 'board-game' | 'miniatures' | 'card-game';
  coverImage: string;
  description: string;
  publisher?: string;
  releaseYear?: number;
  playTime?: string;
  playerCount?: string;
  sessions?: number;
  favorite?: boolean;
  currentlyPlaying?: boolean;
  tags?: string[];
}

export interface LoreDocument {
  id: string;
  title: string;
  category: 'world-building' | 'character' | 'campaign' | 'maps' | 'history' | 'other';
  excerpt: string;
  content?: string;
  createdDate: string;
  updatedDate: string;
  tags?: string[];
  featured?: boolean;
  relatedDocs?: string[]; // IDs of related documents
}

export interface CreativeProject {
  id: string;
  title: string;
  type: 'art' | 'writing' | 'worldbuilding' | 'music' | 'other';
  description: string;
  image?: string;
  link?: string;
  completedDate?: string;
  tags?: string[];
}

export interface HobbyMilestone {
  id: string;
  title: string;
  date: string;
  type: 'campaign' | 'session' | 'achievement' | 'event';
  description: string;
  relatedGame?: string;
  participants?: string[];
}
