export interface Author {
  username: string;
  avatarUrl?: string;
}

export interface PollOption {
  label: string;
  votes: number;
}

export interface PostContent {
  kind: "post";
  id: string;
  author: Author;
  timestamp: string;
  body: string;
  poll?: PollOption[];
  likes: number;
  comments: number;
}

export interface ThreadContent {
  kind: "thread";
  id: string;
  author: Author;
  timestamp: string;
  title: string;
  excerpt: string;
  replyCount: number;
}

export interface ImageContent {
  kind: "image";
  id: string;
  author: Author;
  timestamp: string;
  imageUrl: string;
  caption: string;
  likes: number;
  comments: number;
}

export interface VideoContent {
  kind: "video";
  id: string;
  author: Author;
  timestamp: string;
  posterUrl: string;
  videoUrl: string;
  caption: string;
  likes: number;
  comments: number;
}

export interface GameWindowContent {
  kind: "game";
  id: string;
  author: Author;
  timestamp: string;
  title: string;
  embedSrc: string;
  likes: number;
  comments: number;
  forkCount: number;
}

// Discriminated union — every feed item is exactly one of these, tagged by `kind`
export type FeedItem =
  | PostContent
  | ThreadContent
  | ImageContent
  | VideoContent
  | GameWindowContent;

// Fixed estimated heights per card type, used by the virtualized list
// to size rows before they've actually rendered. Game windows are the
// clear outlier by design — they're meant to dominate the feed visually.
export const CARD_HEIGHTS: Record<FeedItem["kind"], number> = {
  post: 180,
  thread: 130,
  image: 220,
  video: 240,
  game: 620,
};
