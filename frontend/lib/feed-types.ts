export interface Author {
  id: string
  name: string
  handle: string
  avatarUrl?: string
  role?: string
}

export interface Engagement {
  replies: number
  reposts: number
  likes: number
  views?: number
}

interface BaseFeedItem {
  id: string
  author: Author
  createdAt: string
  engagement: Engagement
}

export interface PollOption {
  id: string
  label: string
  votes: number
}

export interface Post extends BaseFeedItem {
  kind: "post"
  body: string
  tags?: string[]
  poll?: {
    totalVotes: number
    endsAt?: string
    options: PollOption[]
  }
}

export interface Thread extends BaseFeedItem {
  kind: "thread"
  title: string
  summary: string
  partCount: number
}

export interface ImagePost extends BaseFeedItem {
  kind: "image"
  body?: string
  imageUrl?: string
  imageAlt?: string
  aspectRatio?: `${number}/${number}`
}

export interface VideoPost extends BaseFeedItem {
  kind: "video"
  body?: string
  videoUrl?: string
  posterUrl?: string
  duration?: string
}

export interface GameWindowPost extends BaseFeedItem {
  kind: "game"
  title: string
  description?: string
  gameUrl?: string
  tech?: string[]
}

export type FeedItem = Post | Thread | ImagePost | VideoPost | GameWindowPost
