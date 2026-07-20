import { FeedItem } from "@/types/feed";

export const mockFeed: FeedItem[] = [
  {
    kind: "post",
    id: "p1",
    author: { username: "ferris_dev" },
    timestamp: "2h ago",
    body: "Should we switch the compiler to nightly for edition 2024?",
    poll: [
      { label: "Yes, do it", votes: 218 },
      { label: "Wait for stable", votes: 134 },
    ],
    likes: 42,
    comments: 18,
  },
  {
    kind: "thread",
    id: "t1",
    author: { username: "async_ada" },
    timestamp: "5h ago",
    title: "Async traits, finally?",
    excerpt:
      "Now that the feature has landed in stable, what's everyone's real-world experience been like migrating existing trait objects...",
    replyCount: 84,
  },
  {
    kind: "image",
    id: "i1",
    author: { username: "shader_sam" },
    timestamp: "8h ago",
    imageUrl: "/placeholder/wgpu-progress.png",
    caption: "day 42 of learning wgpu — finally got the shadows right",
    likes: 96,
    comments: 11,
  },
  {
    kind: "game",
    id: "g1",
    author: { username: "ferris_dev" },
    timestamp: "1d ago",
    title: "crab_jumper.wasm — a tiny platformer",
    embedSrc: "/games/crab_jumper/index.html",
    likes: 128,
    comments: 34,
    forkCount: 19,
  },
  {
    kind: "video",
    id: "v1",
    author: { username: "roguelike_rae" },
    timestamp: "1d ago",
    posterUrl: "/placeholder/bevy-trailer-poster.png",
    videoUrl: "/placeholder/bevy-trailer.mp4",
    caption: "Full trailer: my Bevy roguelike",
    likes: 210,
    comments: 27,
  },
];
