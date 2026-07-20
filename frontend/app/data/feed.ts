import type { FeedItem } from '../types/feed';

const avatars = {
  ferris: 'https://api.dicebear.com/9.x/bottts-neutral/svg?seed=ferris',
  aya: 'https://api.dicebear.com/9.x/bottts-neutral/svg?seed=aya',
  theo: 'https://api.dicebear.com/9.x/bottts-neutral/svg?seed=theo',
  mina: 'https://api.dicebear.com/9.x/bottts-neutral/svg?seed=mina',
};

export const feedItems: FeedItem[] = [
  {
    type: 'post',
    id: 'compiler-nightly',
    author: { username: 'ferris_dev', displayName: 'Ferris', avatarUrl: avatars.ferris },
    timestamp: '2m',
    body: 'Should we switch the compiler to nightly for edition 2024 experiments?',
    poll: {
      question: 'Compiler channel for the next sprint',
      options: [
        { id: 'stable', label: 'Stay on stable', percentage: 38 },
        { id: 'nightly', label: 'Move experiments to nightly', percentage: 62 },
      ],
      totalVotes: 1284,
    },
    engagement: { likes: 342, comments: 88, shares: 41 },
  },
  {
    type: 'game',
    id: 'crab-jumper',
    title: 'crab_jumper.wasm — a tiny platformer',
    author: { username: 'wasm_mage', displayName: 'Mina', avatarUrl: avatars.mina },
    timestamp: '8m',
    iframeSrc: 'about:blank',
    engagement: { likes: 1200, comments: 214, shares: 98 },
  },
  {
    type: 'image',
    id: 'wgpu-shadows',
    author: { username: 'shader_sam', displayName: 'Sam', avatarUrl: avatars.theo },
    timestamp: '19m',
    caption: 'day 42 of learning wgpu ⚙️ finally got the shadows right',
    imageUrl: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Code editor with colorful syntax highlighting',
    engagement: { likes: 516, comments: 32, shares: 17 },
  },
  {
    type: 'thread',
    id: 'async-traits-finally',
    author: { username: 'trait_bound', displayName: 'Aya', avatarUrl: avatars.aya },
    timestamp: '31m',
    title: 'Async traits, finally?',
    excerpt: 'A practical roundup of what stabilized, what still needs boxing, and how teams are modeling service boundaries in Rust today.',
    replies: 47,
    engagement: { likes: 288, comments: 47, shares: 24 },
  },
  {
    type: 'video',
    id: 'bevy-editor',
    author: { username: 'bevy_builder', displayName: 'Theo', avatarUrl: avatars.theo },
    timestamp: '44m',
    caption: 'Prototype editor timeline running in the browser. Rust core, React shell.',
    posterUrl: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80',
    engagement: { likes: 731, comments: 96, shares: 55 },
  },
  ...Array.from({ length: 20 }, (_, index) => ({
    type: index % 3 === 0 ? 'thread' : 'post',
    id: `mock-${index}`,
    author: { username: index % 2 ? 'frontend_friend' : 'rustacean_io', displayName: index % 2 ? 'Frontend Friend' : 'Rustacean IO', avatarUrl: index % 2 ? avatars.aya : avatars.ferris },
    timestamp: `${index + 1}h`,
    ...(index % 3 === 0
      ? { title: 'Best WASM game framework for a weekend jam?', excerpt: 'Comparing Bevy, Macroquad, Fyrox, and a few tiny render-loop setups for small browser games.', replies: 12 + index }
      : { body: 'Today I learned another borrow checker lesson and somehow the code got simpler.' }),
    engagement: { likes: 80 + index, comments: 8 + index, shares: 3 + index },
  } as FeedItem)),
];

export const trendingThreads = ['Why is Servo still slow?', 'Async traits, finally?', 'Best WASM game framework', 'React Server Components on the edge'];
