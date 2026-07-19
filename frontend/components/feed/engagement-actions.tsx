import { BarChart3, Heart, MessageCircle, Repeat2, Share2 } from "lucide-react"
import type { Engagement } from "@/lib/feed-types"

interface EngagementActionsProps {
  engagement: Engagement
  onReply?: () => void
  onRepost?: () => void
  onLike?: () => void
  onShare?: () => void
}

export function EngagementActions({ engagement, onReply, onRepost, onLike, onShare }: EngagementActionsProps) {
  return (
    <footer className="engagement-row" aria-label="Post actions">
      <Action label="Reply" count={engagement.replies} onClick={onReply}><MessageCircle /></Action>
      <Action label="Repost" count={engagement.reposts} onClick={onRepost}><Repeat2 /></Action>
      <Action label="Like" count={engagement.likes} onClick={onLike}><Heart /></Action>
      {typeof engagement.views === "number" ? <span className="metric" aria-label={`${engagement.views} views`}><BarChart3 />{engagement.views}</span> : null}
      <Action label="Share" onClick={onShare}><Share2 /></Action>
    </footer>
  )
}

function Action({ label, count, onClick, children }: { label: string; count?: number; onClick?: () => void; children: React.ReactNode }) {
  return (
    <button className="action" type="button" onClick={onClick} disabled={!onClick} aria-label={count === undefined ? label : `${label}, ${count}`}>
      {children}<span aria-hidden="true">{count}</span>
    </button>
  )
}
