import { ImageIcon } from "lucide-react"
import type { ImagePost } from "@/lib/feed-types"
import { AuthorHeader } from "./author-header"
import { EngagementActions } from "./engagement-actions"

export function ImageCard({ post }: { post: ImagePost }) {
  return (
    <article className="feed-card">
      <AuthorHeader author={post.author} createdAt={post.createdAt} />
      {post.body ? <p className="post-body">{post.body}</p> : null}
      {post.imageUrl ? (
        <div className="media-frame" style={{ aspectRatio: post.aspectRatio ?? "16/10" }}>
          <img src={post.imageUrl} alt={post.imageAlt ?? "Image attached to post"} />
        </div>
      ) : <div className="media-unavailable"><ImageIcon /><span>Image unavailable</span></div>}
      <EngagementActions engagement={post.engagement} />
    </article>
  )
}
