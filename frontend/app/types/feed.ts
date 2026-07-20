export type Author = {
  username: string;
  displayName: string;
  avatarUrl: string;
};

export type Engagement = {
  likes: number;
  comments: number;
  shares: number;
};

export type PollOption = {
  id: string;
  label: string;
  percentage: number;
};

export interface Post {
  type: 'post';
  id: string;
  author: Author;
  timestamp: string;
  body: string;
  poll?: {
    question: string;
    options: PollOption[];
    totalVotes: number;
  };
  engagement: Engagement;
}

export interface Thread {
  type: 'thread';
  id: string;
  author: Author;
  timestamp: string;
  title: string;
  excerpt: string;
  replies: number;
  engagement: Engagement;
}

export interface ImagePost {
  type: 'image';
  id: string;
  author: Author;
  timestamp: string;
  caption: string;
  imageUrl: string;
  imageAlt: string;
  engagement: Engagement;
}

export interface VideoPost {
  type: 'video';
  id: string;
  author: Author;
  timestamp: string;
  caption: string;
  posterUrl: string;
  engagement: Engagement;
}

export interface GameWindowPost {
  type: 'game';
  id: string;
  title: string;
  author: Author;
  timestamp: string;
  iframeSrc: string;
  engagement: Engagement;
}

export type FeedItem = Post | Thread | ImagePost | VideoPost | GameWindowPost;
