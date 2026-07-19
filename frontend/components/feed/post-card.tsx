import type { Post } from "@/lib/feed-types"
import { AuthorHeader } from "./author-header"
import { EngagementActions } from "./engagement-actions"

export function PostCard({ post, onVote }: { post: Post; onVote?: (postId: string, optionId: string) => void }) {
  return (
    <article className="feed-card">
      <AuthorHeader author={post.author} createdAt={post.createdAt} />
      <p className="post-body">{post.body}</p>
      {post.tags?.length ? <div className="tag-row">{post.tags.map((tag) => <span key={tag}>#{tag}</span>)}</div> : null}
      {post.poll ? (
        <div className="poll" aria-label="Poll">
          {post.poll.options.map((option) => {
            const percentage = post.poll!.totalVotes ? Math.round((option.votes / post.poll!.totalVotes) * 100) : 0
            return (
              <button key={option.id} type="button" disabled={!onVote} onClick={() => onVote?.(post.id, option.id)} className="poll-option">
                <span className="poll-fill" style={{ width: `${percentage}%` }} aria-hidden="true" />
                <span>{option.label}</span><strong>{percentage}%</strong>
              </button>
            )
          })}
          <p className="poll-meta">{post.poll.totalVotes} votes{post.poll.endsAt ? ` · ${post.poll.endsAt}` : ""}</p>
        </div>
      ) : null}
      <EngagementActions engagement={post.engagement} />
    </article>
  )
}
