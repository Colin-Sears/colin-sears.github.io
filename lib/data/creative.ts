import { CreativeProject } from '@/lib/types/personal';

export const creativeProjects: CreativeProject[] = [
  {
    id: '1',
    title: 'Worldbuilding Sketchbook',
    type: 'art',
    description: 'Character sketches, maps, and creature designs for homebrew campaigns.',
    tags: ['Sketching', 'Fantasy Art', 'Character Design'],
  },
  {
    id: '2',
    title: 'Campaign Soundtracks',
    type: 'music',
    description: 'Curated playlists and ambient soundscapes for different campaign locations and moods.',
    tags: ['Music', 'Atmosphere', 'Spotify'],
  },
  {
    id: '3',
    title: 'The Aetherium Chronicles',
    type: 'writing',
    description: 'Short stories expanding on the lore of my D&D campaign world.',
    tags: ['Fiction', 'Fantasy', 'Worldbuilding'],
  },
  // TODO: Add more creative projects
];

export const projectTypeColors = {
  art: 'from-pink-500 to-rose-500',
  writing: 'from-blue-500 to-indigo-500',
  worldbuilding: 'from-emerald-500 to-green-500',
  music: 'from-purple-500 to-violet-500',
  other: 'from-orange-500 to-amber-500',
};

export const projectTypeLabels = {
  art: 'Art & Design',
  writing: 'Writing',
  worldbuilding: 'Worldbuilding',
  music: 'Music & Audio',
  other: 'Other',
};
