"use client";

interface ActionRowProps {
  likes: number;
  comments: number;
  onFork?: () => void;
  onViewCode?: () => void;
}

export default function ActionRow({ likes, comments, onFork, onViewCode }: ActionRowProps) {
  return (
    <div className="flex items-center gap-2 mt-3 flex-wrap">
      {onFork && (
        <button
          onClick={onFork}
          className="text-xs px-3 py-1.5 border border-zinc-700 text-zinc-200 hover:border-accent hover:text-accent transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
        >
          ▶ Fork
        </button>
      )}
      {onViewCode && (
        <button
          onClick={onViewCode}
          className="text-xs px-3 py-1.5 border border-zinc-700 text-zinc-200 hover:border-accent hover:text-accent transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
        >
          {"</>"} View Code
        </button>
      )}
      <button className="text-xs px-3 py-1.5 border border-zinc-700 text-zinc-200 hover:border-accent hover:text-accent transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent">
        ♥ {likes}
      </button>
      <button className="text-xs px-3 py-1.5 border border-zinc-700 text-zinc-200 hover:border-accent hover:text-accent transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent">
        💬 {comments}
      </button>
    </div>
  );
}
