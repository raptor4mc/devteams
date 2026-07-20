const TRENDING = ["Why is Servo still slow?", "Async traits, finally?", "Best WASM game framework"];

export default function TrendingPanel() {
  return (
    <aside className="hidden lg:flex lg:flex-col w-72 shrink-0 border-l border-zinc-800 p-4 gap-2 h-[calc(100vh-70px)] sticky top-[70px]">
      <p className="text-xs tracking-wide uppercase text-zinc-500 mb-1">Trending Threads</p>
      {TRENDING.map((title) => (
        <div key={title} className="text-sm text-zinc-200 border border-zinc-800 px-3 py-2">
          {title}
        </div>
      ))}
    </aside>
  );
}
