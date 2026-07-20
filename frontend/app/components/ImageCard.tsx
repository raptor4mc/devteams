import type { ImagePost } from '../types/feed';
import { CardHeader, EngagementFooter } from './CardShared';

export function ImageCard({ item }: { item: ImagePost }) {
  return (
    <article className="feedCard mediaCard">
      <CardHeader author={item.author} timestamp={item.timestamp} />
      <img className="mediaImage" src={item.imageUrl} alt={item.imageAlt} />
      <p className="bodyText">{item.caption}</p>
      <EngagementFooter engagement={item.engagement} />
    </article>
  );
}
