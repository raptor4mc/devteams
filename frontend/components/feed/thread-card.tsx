import Link from "next/link"
import { ArrowRight, ListTree } from "lucide-react"
import type { Thread } from "@/lib/feed-types"
import { AuthorHeader } from "./author-header"
import { EngagementActions } from "./engagement-actions"

export function ThreadCard({ thread }: { thread: Thread }) {
  return (
    <article className="feed-card thread-card">
      <AuthorHeader author={thread.author} createdAt={thread.createdAt} />
      <div className="eyebrow"><ListTree /> Thread · {thread.partCount} parts</div>
      <h2>{thread.title}</h2>
      <p className="post-body muted">{thread.summary}</p>
      <Link className="text-link" href={`/threads/${thread.id}`}>Read thread <ArrowRight /></Link>
      <EngagementActions engagement={thread.engagement} />
    </article>
  )
}
