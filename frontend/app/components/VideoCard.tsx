import type { VideoPost } from '../types/feed';
import { CardHeader, EngagementFooter } from './CardShared';

export function VideoCard({ item }: { item: VideoPost }) {
  return (
    <article className="feedCard mediaCard">
      <CardHeader author={item.author} timestamp={item.timestamp} />
      <div className="videoShell">
        <video className="mediaImage" poster={item.posterUrl} preload="none" aria-label={item.caption} />
        <span className="playOverlay">▶</span>
      </div>
      <p className="bodyText">{item.caption}</p>
      <EngagementFooter engagement={item.engagement} />
    </article>
  );
}
