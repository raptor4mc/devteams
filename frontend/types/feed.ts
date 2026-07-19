/**
 * Feed content types - discriminated union for type-safe feed items
 */

export interface PollOption {
  id: string;
  label: string;
  votes: number;
}

export interface Post {
  type: 'post';
  id: string;
  author: {
    username: string;
    avatar: string;
  };
  timestamp: Date;
  content: string;
  poll?: {
    id: string;
    options: PollOption[];
    totalVotes: number;
  };
  engagement: {
    likes: number;
    comments: number;
    shares: number;
  };
}

export interface Thread {
  type: 'thread';
  id: string;
  author: {
    username: string;
    avatar: string;
  };
  timestamp: Date;
  title: string;
  excerpt: string;
  replyCount: number;
  engagement: {
    likes: number;
    comments: number;
    shares: number;
  };
}

export interface ImagePost {
  type: 'image';
  id: string;
  author: {
    username: string;
    avatar: string;
  };
  timestamp: Date;
  imageUrl: string;
  caption: string;
  engagement: {
    likes: number;
    comments: number;
    shares: number;
  };
}

export interface VideoPost {
  type: 'video';
  id: string;
  author: {
    username: string;
    avatar: string;
  };
  timestamp: Date;
  posterUrl: string;
  caption: string;
  engagement: {
    likes: number;
    comments: number;
    shares: number;
  };
}

export interface GameWindowPost {
  type: 'game';
  id: string;
  author: {
    username: string;
    avatar: string;
  };
  timestamp: Date;
  gameTitle: string;
  iframeSrc?: string; // Lazy-loaded
  engagement: {
    likes: number;
    comments: number;
    shares: number;
  };
}

export type FeedItem =
  | Post
  | Thread
  | ImagePost
  | VideoPost
  | GameWindowPost;

export interface FeedState {
  items: FeedItem[];
  isLoading: boolean;
  hasMore: boolean;
}
