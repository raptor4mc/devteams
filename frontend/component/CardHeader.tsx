interface CardHeaderProps {
  username: string;
  timestamp: string;
  kindLabel: string;
}

export default function CardHeader({ username, timestamp, kindLabel }: CardHeaderProps) {
  return (
    <div className="flex items-center justify-between mb-3">
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 border border-zinc-700 bg-zinc-800" />
        <div>
          <p className="font-display text-sm text-zinc-100 leading-none">{username}</p>
          <p className="text-xs text-zinc-500 mt-1">{timestamp}</p>
        </div>
      </div>
      <span className="text-[11px] tracking-wide uppercase text-accent font-mono">
        {kindLabel}
      </span>
    </div>
  );
}
