"use client"

import { useRef } from "react"
import { useVirtualizer } from "@tanstack/react-virtual"
import { Code2 } from "lucide-react"
import type { FeedItem } from "@/lib/feed-types"
import { GameWindowCard } from "./game-window-card"
import { ImageCard } from "./image-card"
import { PostCard } from "./post-card"
import { ThreadCard } from "./thread-card"
import { VideoCard } from "./video-card"

export function FeedList({ items, loading = false }: { items: FeedItem[]; loading?: boolean }) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const virtualizer = useVirtualizer({ count: items.length, getScrollElement: () => scrollRef.current, estimateSize: (index) => estimate(items[index]), overscan: 4 })

  if (loading) return <FeedSkeleton />
  if (!items.length) return <EmptyFeed />

  return (
    <div ref={scrollRef} className="feed-scroll" aria-label="Developer feed">
      <div className="virtual-feed" style={{ height: virtualizer.getTotalSize() }}>
        {virtualizer.getVirtualItems().map((row) => {
          const item = items[row.index]
          return <div key={item.id} ref={virtualizer.measureElement} data-index={row.index} className="virtual-row" style={{ transform: `translateY(${row.start}px)` }}><FeedCard item={item} /></div>
        })}
      </div>
    </div>
  )
}

function estimate(item: FeedItem) { return item.kind === "game" ? 630 : item.kind === "image" || item.kind === "video" ? 530 : item.kind === "thread" ? 310 : 280 }

function FeedCard({ item }: { item: FeedItem }) {
  switch (item.kind) {
    case "post": return <PostCard post={item} />
    case "thread": return <ThreadCard thread={item} />
    case "image": return <ImageCard post={item} />
    case "video": return <VideoCard post={item} />
    case "game": return <GameWindowCard post={item} />
  }
}

function EmptyFeed() {
  return <section className="empty-state"><div className="empty-icon"><Code2 /></div><p className="eyebrow">Your dev feed</p><h2>The feed is ready for a signal.</h2><p>Posts from developers and teams will appear here once the backend is connected.</p><button type="button" disabled>Compose post</button></section>
}

function FeedSkeleton() {
  return <div className="skeleton-list" aria-label="Loading feed" aria-busy="true">{[0, 1, 2].map((item) => <div className="feed-card skeleton-card" key={item}><span /><span /><span /></div>)}</div>
}
