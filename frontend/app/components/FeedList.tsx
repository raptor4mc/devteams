"use client";

import { useRef } from 'react';
import { useVirtualizer } from '@tanstack/react-virtual';
import type { FeedItem } from '../types/feed';
import { GameWindowCard } from './GameWindowCard';
import { ImageCard } from './ImageCard';
import { PostCard } from './PostCard';
import { ThreadCard } from './ThreadCard';
import { VideoCard } from './VideoCard';

function renderCard(item: FeedItem) {
  switch (item.type) {
    case 'post': return <PostCard item={item} />;
    case 'thread': return <ThreadCard item={item} />;
    case 'image': return <ImageCard item={item} />;
    case 'video': return <VideoCard item={item} />;
    case 'game': return <GameWindowCard item={item} />;
  }
}

export function FeedList({ items, isLoading = false }: { items: FeedItem[]; isLoading?: boolean }) {
  const parentRef = useRef<HTMLDivElement | null>(null);
  const rowVirtualizer = useVirtualizer({
    count: items.length,
    getScrollElement: () => parentRef.current,
    estimateSize: (index) => (items[index]?.type === 'game' ? 560 : items[index]?.type === 'image' || items[index]?.type === 'video' ? 460 : 260),
    overscan: 4,
    initialRect: { width: 760, height: 900 },
  });

  if (isLoading) {
    return <div className="feedState"><div className="skeleton" /><div className="skeleton short" /></div>;
  }

  if (!items.length) {
    return <div className="feedState">Nothing here yet. Follow more developers to fill your feed.</div>;
  }

  return (
    <div ref={parentRef} className="feedScroller">
      <div className="virtualCanvas" style={{ height: `${rowVirtualizer.getTotalSize()}px` }}>
        {rowVirtualizer.getVirtualItems().map((virtualItem) => (
          <div
            key={items[virtualItem.index].id}
            ref={rowVirtualizer.measureElement}
            data-index={virtualItem.index}
            className="virtualRow"
            style={{ transform: `translateY(${virtualItem.start}px)` }}
          >
            {renderCard(items[virtualItem.index])}
          </div>
        ))}
      </div>
    </div>
  );
}
