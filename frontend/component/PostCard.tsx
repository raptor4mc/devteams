"use client";

import { useState } from "react";
import { PostContent } from "@/types/feed";
import CardHeader from "./CardHeader";
import ActionRow from "./ActionRow";

export default function PostCard({ post }: { post: PostContent }) {
  const [votedIndex, setVotedIndex] = useState<number | null>(null);
  const totalVotes = post.poll?.reduce((sum, o) => sum + o.votes, 0) ?? 0;

  return (
    <div className="border border-zinc-800 bg-zinc-950 p-4">
      <CardHeader username={post.author.username} timestamp={post.timestamp} kindLabel="Post" />
      <p className="text-sm text-zinc-200 leading-relaxed">{post.body}</p>

      {post.poll && (
        <div className="mt-3 space-y-2">
          {post.poll.map((option, i) => {
            const pct = totalVotes === 0 ? 0 : Math.round((option.votes / totalVotes) * 100);
            const isChosen = votedIndex === i;
            return (
              <button
                key={option.label}
                onClick={() => setVotedIndex(i)}
                className="w-full text-left"
                aria-pressed={isChosen}
              >
                <div className="relative h-8 border border-zinc-700 overflow-hidden">
                  <div
                    className="absolute inset-y-0 left-0 bg-accent/70 transition-all"
                    style={{ width: `${pct}%` }}
                  />
                  <div className="relative flex items-center justify-between h-full px-3 text-xs text-zinc-100">
                    <span>{option.label}</span>
                    <span>{pct}%</span>
                  </div>
                </div>
              </button>
            );
          })}
          <p className="text-xs text-zinc-500">{totalVotes} votes</p>
        </div>
      )}

      <ActionRow likes={post.likes} comments={post.comments} />
    </div>
  );
}
