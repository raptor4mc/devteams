import { Play, Video } from "lucide-react"
import type { VideoPost } from "@/lib/feed-types"
import { AuthorHeader } from "./author-header"
import { EngagementActions } from "./engagement-actions"

export function VideoCard({ post }: { post: VideoPost }) {
  return (
    <article className="feed-card">
      <AuthorHeader author={post.author} createdAt={post.createdAt} />
      {post.body ? <p className="post-body">{post.body}</p> : null}
      {post.videoUrl ? (
        <div className="media-frame video-frame">
          <video controls preload="metadata" poster={post.posterUrl} aria-label="Video attached to post">
            <source src={post.videoUrl} />
          </video>
          <span className="play-badge" aria-hidden="true"><Play /></span>
          {post.duration ? <span className="duration">{post.duration}</span> : null}
        </div>
      ) : <div className="media-unavailable"><Video /><span>Video unavailable</span></div>}
      <EngagementActions engagement={post.engagement} />
    </article>
  )
}
