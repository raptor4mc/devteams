import type { Author, Engagement } from '../types/feed';

export function CardHeader({ author, timestamp }: { author: Author; timestamp: string }) {
  return (
    <div className="cardHeader">
      <img className="avatar" src={author.avatarUrl} alt={`${author.displayName} avatar`} />
      <div>
        <div className="displayName">{author.displayName}</div>
        <div className="muted">@{author.username} · {timestamp}</div>
      </div>
    </div>
  );
}

export function EngagementFooter({ engagement }: { engagement: Engagement }) {
  return (
    <div className="engagement" aria-label="Post engagement actions">
      <button>♡ {engagement.likes}</button>
      <button>💬 {engagement.comments}</button>
      <button>↗ {engagement.shares}</button>
    </div>
  );
}
