import type { Author } from "@/lib/feed-types"

export function AuthorHeader({ author, createdAt }: { author: Author; createdAt: string }) {
  const initials = author.name.split(" ").map((part) => part[0]).join("").slice(0, 2).toUpperCase()

  return (
    <header className="author-row">
      <div className="avatar" aria-hidden="true">
        {author.avatarUrl ? <img src={author.avatarUrl} alt="" /> : initials}
      </div>
      <div className="author-copy">
        <div className="author-line">
          <strong>{author.name}</strong>
          <span>@{author.handle}</span>
          <span aria-hidden="true">·</span>
          <time dateTime={createdAt}>{createdAt}</time>
        </div>
        {author.role ? <span className="author-role">{author.role}</span> : null}
      </div>
    </header>
  )
}
