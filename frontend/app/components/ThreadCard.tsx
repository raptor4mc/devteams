import Link from 'next/link';
import type { Thread } from '../types/feed';
import { CardHeader, EngagementFooter } from './CardShared';

export function ThreadCard({ item }: { item: Thread }) {
  return (
    <article className="feedCard compactCard">
      <CardHeader author={item.author} timestamp={item.timestamp} />
      <Link className="threadLink" href={`/threads/${item.id}`}>
        <h2>{item.title}</h2>
        <p>{item.excerpt}</p>
        <span>{item.replies} replies →</span>
      </Link>
      <EngagementFooter engagement={item.engagement} />
    </article>
  );
}
