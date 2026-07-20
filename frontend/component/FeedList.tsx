"use client";

import { useRef } from "react";
import { VariableSizeList, ListChildComponentProps } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import { FeedItem, CARD_HEIGHTS } from "@/types/feed";
import PostCard from "./PostCard";
import ThreadCard from "./ThreadCard";
import ImageCard from "./ImageCard";
import VideoCard from "./VideoCard";
import GameWindowCard from "./GameWindowCard";

const VERTICAL_GAP = 20;

function renderCard(item: FeedItem) {
  switch (item.kind) {
    case "post":
      return <PostCard post={item} />;
    case "thread":
      return <ThreadCard thread={item} />;
    case "image":
      return <ImageCard post={item} />;
    case "video":
      return <VideoCard post={item} />;
    case "game":
      return <GameWindowCard game={item} />;
  }
}

interface FeedListProps {
  items: FeedItem[];
}

export default function FeedList({ items }: FeedListProps) {
  const listRef = useRef<VariableSizeList | null>(null);

  const getItemSize = (index: number) => CARD_HEIGHTS[items[index].kind] + VERTICAL_GAP;

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-center">
        <p className="font-display text-lg text-zinc-300">Nothing here yet</p>
        <p className="text-sm text-zinc-500 mt-1">
          Post something, or follow a few people to fill your feed.
        </p>
      </div>
    );
  }

  return (
    <div className="h-[calc(100vh-90px)]">
      <AutoSizer>
        {({ height, width }: { height: number; width: number }) => (
          <VariableSizeList
            ref={listRef}
            height={height}
            width={width}
            itemCount={items.length}
            itemSize={getItemSize}
            overscanCount={2}
          >
            {({ index, style }: ListChildComponentProps) => (
              <div style={{ ...style, paddingBottom: VERTICAL_GAP }}>
                {renderCard(items[index])}
              </div>
            )}
          </VariableSizeList>
        )}
      </AutoSizer>
    </div>
  );
}
