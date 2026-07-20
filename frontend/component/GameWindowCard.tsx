"use client";

import { useEffect, useRef, useState } from "react";
import { GameWindowContent } from "@/types/feed";
import ActionRow from "./ActionRow";

export default function GameWindowCard({ game }: { game: GameWindowContent }) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [shouldLoadIframe, setShouldLoadIframe] = useState(false);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    // Lazy-load: don't set the iframe src until the card is about to
    // enter the viewport. Unload again once it's well out of view so
    // we're not keeping many live WASM instances running at once.
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShouldLoadIframe(entry.isIntersecting);
      },
      { rootMargin: "200px 0px", threshold: 0.01 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="border-2 border-accent bg-zinc-950 p-4 shadow-[0_0_0_1px_rgba(90,170,255,0.15)]"
    >
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-display text-lg text-zinc-100">{game.title}</h3>
        <span className="text-[11px] tracking-wide uppercase text-accent font-mono">
          Game Window
        </span>
      </div>
      <p className="text-xs text-zinc-500 mb-3">
        {game.author.username} · {game.timestamp}
      </p>

      <div className="relative w-full aspect-[16/10] border border-zinc-700 bg-black overflow-hidden">
        {shouldLoadIframe ? (
          // sandbox is intentionally restrictive: no same-origin access to
          // the parent page, no top-level navigation, no form submission
          // outside its own frame. A real Content-Security-Policy header
          // is applied server-side alongside this on the actual embed route.
          <iframe
            src={game.embedSrc}
            sandbox="allow-scripts"
            className="w-full h-full"
            title={game.title}
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-zinc-600 text-sm">
            Scroll to load
          </div>
        )}
      </div>

      <ActionRow
        likes={game.likes}
        comments={game.comments}
        onFork={() => console.log("fork", game.id)}
        onViewCode={() => console.log("view code", game.id)}
      />
    </div>
  );
}
