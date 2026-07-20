"use client";

import { useEffect, useRef, useState } from 'react';
import type { GameWindowPost } from '../types/feed';
import { CardHeader, EngagementFooter } from './CardShared';

export function GameWindowCard({ item }: { item: GameWindowPost }) {
  const rootRef = useRef<HTMLElement | null>(null);
  const [iframeSrc, setIframeSrc] = useState<string | undefined>();

  useEffect(() => {
    const node = rootRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIframeSrc(entry.isIntersecting ? item.iframeSrc : undefined);
      },
      { rootMargin: '650px 0px' },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [item.iframeSrc]);

  return (
    <article ref={rootRef} className="feedCard gameCard">
      <div className="gameTitleRow">
        <div>
          <h2>{item.title}</h2>
          <CardHeader author={item.author} timestamp={item.timestamp} />
        </div>
        <span className="liveBadge">Playable</span>
      </div>
      <div className="gameFrameShell">
        {/* TODO: Add a production Content-Security-Policy for embedded community games before loading real game origins. */}
        <iframe title={`${item.title} play area`} src={iframeSrc} sandbox="allow-scripts allow-same-origin" loading="lazy" />
        {!iframeSrc ? <div className="gamePlaceholder">Game window will load near viewport</div> : null}
      </div>
      <div className="gameControls">
        <button>▶ Fork</button>
        <button>&lt;/&gt; View Code</button>
        <EngagementFooter engagement={item.engagement} />
      </div>
    </article>
  );
}
