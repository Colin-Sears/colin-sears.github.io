'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { useState } from 'react';
import { tabletopGames, gameCategories } from '@/lib/data/games';
import { TabletopGame } from '@/lib/types/personal';

function GameCard({ game }: { game: TabletopGame }) {
  const prefersReducedMotion = useReducedMotion();
  return (
    <motion.div
      className="relative group"
      initial={prefersReducedMotion ? false : { opacity: 0, y: 30 }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={prefersReducedMotion ? undefined : { y: -4 }}
      transition={{ type: 'tween', duration: 0.2 }}
    >
      <div className="relative bg-[#0f0f0f] border border-gray-800 hover:border-purple-500/50 transition-colors overflow-hidden">
        {/* Subtle noise texture on card */}
        <div 
          className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
          }}
        />

        {/* Subtle grid overlay on card */}
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px'
          }}
        />
        
        {/* Top accent line */}
        <div className="h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
        
        {/* Game cover placeholder */}
        <div className="relative h-48 bg-gradient-to-br from-gray-900 to-black flex items-center justify-center border-b border-gray-800">
          {/* Scanline effect on cover */}
          <div 
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage: 'repeating-linear-gradient(0deg, rgba(139, 92, 246, 0.1) 0px, transparent 1px, transparent 2px)',
            }}
          />
          
          <div className="text-gray-700 text-5xl font-black font-mono relative z-10">
            {game.title.split(' ').map(w => w[0]).join('').slice(0, 3)}
          </div>
          
          {/* Status badges */}
          <div className="absolute top-3 right-3 flex flex-col gap-2">
            {game.currentlyPlaying && (
              <div className="bg-purple-500 text-black text-xs font-bold px-2 py-1 font-mono">
                ACTIVE
              </div>
            )}
            {game.favorite && (
              <div className="bg-gray-900 border border-purple-500 text-purple-400 text-xs font-bold px-2 py-1 font-mono">
                ★ FAV
              </div>
            )}
          </div>

          {/* Corner brackets */}
          <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-purple-500/30" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-purple-500/30" />
        </div>

        {/* Game info */}
        <div className="p-5 space-y-4">
          <div className="space-y-2">
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-xl font-bold text-white leading-tight font-sans">
                {game.title}
              </h3>
              <span className="text-purple-400 text-xs font-mono whitespace-nowrap bg-purple-500/10 px-2 py-1 border border-purple-500/30">
                {gameCategories[game.category].toUpperCase()}
              </span>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed">
              {game.description}
            </p>
          </div>

          {/* Meta info grid */}
          <div className="grid grid-cols-3 gap-2 pt-3 border-t border-gray-800">
            {game.playerCount && (
              <div className="text-xs">
                <div className="text-gray-500 font-mono mb-1">PLAYERS</div>
                <div className="text-gray-300">{game.playerCount}</div>
              </div>
            )}
            {game.playTime && (
              <div className="text-xs">
                <div className="text-gray-500 font-mono mb-1">TIME</div>
                <div className="text-gray-300">{game.playTime}</div>
              </div>
            )}
            {game.sessions && (
              <div className="text-xs">
                <div className="text-gray-500 font-mono mb-1">SESSIONS</div>
                <div className="text-purple-400 font-bold">{game.sessions}</div>
              </div>
            )}
          </div>

          {/* Tags */}
          {game.tags && game.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {game.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs text-gray-500 font-mono border border-gray-800 px-2 py-0.5"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Hover glow effect */}
        <div className="absolute inset-0 border border-purple-500/0 group-hover:border-purple-500/50 transition-colors pointer-events-none" />
      </div>
    </motion.div>
  );
}

export default function TabletopGames() {
  const [filter, setFilter] = useState<string>('all');
  const prefersReducedMotion = useReducedMotion();

  const filteredGames =
    filter === 'all'
      ? tabletopGames
      : tabletopGames.filter((game) => game.category === filter);

  const categories = [
    { key: 'all', label: 'ALL' },
    ...Object.entries(gameCategories).map(([key, label]) => ({
      key,
      label: label.toUpperCase(),
    })),
  ];

  return (
    <section className="relative py-24 px-6 bg-transparent">
      {/* Local subtle texture layer */}
      <div className="absolute inset-0 opacity-[0.01]">
        <div className="absolute inset-0" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          className="mb-12"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="mb-3 text-purple-400 text-xs font-mono tracking-widest">
            [ DATABASE ACCESS ]
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-4 leading-none tracking-tight">
            TABLETOP
            <br />
            <span className="text-purple-500">SYSTEMS</span>
          </h2>
          <div className="h-px bg-gradient-to-r from-purple-500 via-transparent to-transparent max-w-md mb-6" />
          <p className="text-gray-400 text-lg max-w-2xl">
            Campaign archives and game systems
          </p>
        </motion.div>

        {/* Category filter */}
        <motion.div
          className="flex flex-wrap gap-2 mb-12"
          initial={prefersReducedMotion ? false : { opacity: 0 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setFilter(category.key)}
              aria-pressed={filter === category.key}
              className={`px-4 py-2 min-h-[44px] text-xs font-mono transition-all border focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500/40 touch-manipulation ${
                filter === category.key
                  ? 'bg-purple-500 text-black border-purple-500'
                  : 'bg-transparent text-gray-400 border-gray-800 hover:border-purple-500/50 hover:text-purple-400'
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Games grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGames.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>

        {filteredGames.length === 0 && (
          <motion.div
            className="text-center py-20 border border-gray-800"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className="text-gray-600 text-sm font-mono">
              [ NO ENTRIES FOUND ]
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
