import { TabletopGame } from '@/lib/types/personal';

export const tabletopGames: TabletopGame[] = [
  {
    id: '1',
    title: 'Dungeons & Dragons 5th Edition',
    category: 'rpg',
    coverImage: '/personal/games/dnd5e.jpg', // TODO: Add actual image
    description: 'The classic fantasy RPG. Currently running a homebrew campaign.',
    publisher: 'Wizards of the Coast',
    releaseYear: 2014,
    playTime: '2-4 hours',
    playerCount: '3-7',
    sessions: 45,
    favorite: true,
    currentlyPlaying: true,
    tags: ['Fantasy', 'Storytelling', 'Tactical Combat'],
  },
  {
    id: '2',
    title: 'Pathfinder 2nd Edition',
    category: 'rpg',
    coverImage: '/personal/games/pathfinder2e.jpg', // TODO: Add actual image
    description: 'Deep tactical fantasy with intricate character building.',
    publisher: 'Paizo',
    releaseYear: 2019,
    playTime: '3-5 hours',
    playerCount: '4-6',
    sessions: 12,
    favorite: false,
    currentlyPlaying: false,
    tags: ['Fantasy', 'Tactical', 'Character Building'],
  },
  {
    id: '3',
    title: 'Gloomhaven',
    category: 'board-game',
    coverImage: '/personal/games/gloomhaven.jpg', // TODO: Add actual image
    description: 'Tactical dungeon crawler with legacy elements and campaign progression.',
    publisher: 'Cephalofair Games',
    releaseYear: 2017,
    playTime: '1-2 hours',
    playerCount: '1-4',
    sessions: 8,
    favorite: true,
    currentlyPlaying: false,
    tags: ['Dungeon Crawler', 'Strategy', 'Campaign'],
  },
  // TODO: Add more games from your collection
];

export const gameCategories = {
  rpg: 'Roleplaying Games',
  'board-game': 'Board Games',
  miniatures: 'Miniatures',
  'card-game': 'Card Games',
};
