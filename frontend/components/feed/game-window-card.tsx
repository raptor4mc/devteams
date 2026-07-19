"use client"

import { useEffect, useRef, useState } from "react"
import { Gamepad2, Maximize2 } from "lucide-react"
import type { GameWindowPost } from "@/lib/feed-types"
import { AuthorHeader } from "./author-header"
import { EngagementActions } from "./engagement-actions"

export function GameWindowCard({ post }: { post: GameWindowPost }) {
  const frameContainer = useRef<HTMLDivElement>(null)
  const [shouldMount, setShouldMount] = useState(false)

  useEffect(() => {
    const node = frameContainer.current
    if (!node || !post.gameUrl) return
    const observer = new IntersectionObserver(([entry]) => setShouldMount(entry.isIntersecting), { rootMargin: "800px 0px" })
    observer.observe(node)
    return () => observer.disconnect()
  }, [post.gameUrl])

  return (
    <article className="feed-card game-card">
      <AuthorHeader author={post.author} createdAt={post.createdAt} />
      <div className="game-heading"><div><span className="live-label"><Gamepad2 /> PLAYABLE</span><h2>{post.title}</h2></div><button type="button" className="icon-button" disabled aria-label="Open game in full screen"><Maximize2 /></button></div>
      {post.description ? <p className="post-body muted">{post.description}</p> : null}
      <div ref={frameContainer} className="game-window">
        {post.gameUrl && shouldMount ? (
          // TODO: Replace the host-level CSP with a backend-defined allowlist before enabling third-party game URLs.
          <iframe title={post.title} src={post.gameUrl} sandbox="allow-scripts allow-pointer-lock" loading="lazy" />
        ) : <div className="game-unavailable"><Gamepad2 /><strong>{post.gameUrl ? "Game loads near viewport" : "Game unavailable"}</strong><span>{post.gameUrl ? "Scroll closer to initialize the sandbox." : "A playable URL has not been provided yet."}</span></div>}
      </div>
      {post.tech?.length ? <div className="tag-row">{post.tech.map((item) => <span key={item}>{item}</span>)}</div> : null}
      <EngagementActions engagement={post.engagement} />
    </article>
  )
}
