import { LoreDocument } from '@/lib/types/personal';

export const loreDocuments: LoreDocument[] = [
  {
    id: '1',
    title: 'The Shattered Isles',
    category: 'world-building',
    excerpt: 'A fantasy archipelago where ancient magic fractured the continent into floating islands. Each island drifts on invisible currents, sometimes colliding, sometimes drifting apart.',
    createdDate: '2024-03-15',
    updatedDate: '2024-11-20',
    tags: ['Fantasy', 'Archipelago', 'Magic System'],
    featured: true,
  },
  {
    id: '2',
    title: 'Captain Elara Vex',
    category: 'character',
    excerpt: 'Sky pirate captain with a mysterious past. Commands the airship "Crimson Dawn" and searches for the legendary Chart of Eternities.',
    createdDate: '2024-04-02',
    updatedDate: '2024-10-15',
    tags: ['NPC', 'Sky Pirate', 'Major Character'],
    featured: true,
    relatedDocs: ['1', '3'],
  },
  {
    id: '3',
    title: 'The Great Convergence Campaign',
    category: 'campaign',
    excerpt: 'A year-long D&D campaign where the islands begin converging toward a single point. The party must uncover why and prevent catastrophic collision.',
    createdDate: '2024-01-10',
    updatedDate: '2024-11-25',
    tags: ['D&D 5e', 'Active Campaign', 'Level 1-15'],
    featured: false,
    relatedDocs: ['1', '2'],
  },
  {
    id: '4',
    title: 'The Aetherium Codex',
    category: 'history',
    excerpt: 'Ancient texts describing the magic that shattered the continent. Written in a forgotten language, only fragments have been translated.',
    createdDate: '2024-05-20',
    updatedDate: '2024-09-12',
    tags: ['Lore', 'Magic', 'Ancient History'],
    featured: false,
    relatedDocs: ['1'],
  },
  // TODO: Add more lore documents from your campaigns
];

export const loreCategoryColors = {
  'world-building': 'from-emerald-500 to-teal-500',
  character: 'from-purple-500 to-pink-500',
  campaign: 'from-orange-500 to-red-500',
  maps: 'from-blue-500 to-cyan-500',
  history: 'from-amber-500 to-yellow-500',
  other: 'from-gray-500 to-slate-500',
};

export const loreCategoryLabels = {
  'world-building': 'World Building',
  character: 'Characters',
  campaign: 'Campaigns',
  maps: 'Maps & Locations',
  history: 'History & Lore',
  other: 'Other',
};
