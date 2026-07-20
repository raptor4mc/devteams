"use client";

import { useState } from 'react';
import type { Post } from '../types/feed';
import { CardHeader, EngagementFooter } from './CardShared';

export function PostCard({ item }: { item: Post }) {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <article className="feedCard compactCard">
      <CardHeader author={item.author} timestamp={item.timestamp} />
      <p className="bodyText">{item.body}</p>
      {item.poll ? (
        <div className="poll" aria-label={item.poll.question}>
          {item.poll.options.map((option) => (
            <button key={option.id} className={`pollOption ${selected === option.id ? 'selected' : ''}`} onClick={() => setSelected(option.id)}>
              <span className="pollFill" style={{ width: `${option.percentage}%` }} />
              <span className="pollLabel">{option.label}</span>
              <span className="pollPercent">{option.percentage}%</span>
            </button>
          ))}
          <div className="muted">{item.poll.totalVotes.toLocaleString()} votes</div>
        </div>
      ) : null}
      <EngagementFooter engagement={item.engagement} />
    </article>
  );
}
