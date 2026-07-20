import Link from "next/link";
import { ThreadContent } from "@/types/feed";
import CardHeader from "./CardHeader";

export default function ThreadCard({ thread }: { thread: ThreadContent }) {
  return (
    <Link
      href={`/threads/${thread.id}`}
      className="block border border-zinc-800 bg-zinc-950 p-4 hover:border-zinc-600 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
    >
      <CardHeader username={thread.author.username} timestamp={thread.timestamp} kindLabel="Thread" />
      <p className="font-display text-base text-zinc-100">{thread.title}</p>
      <p className="text-sm text-zinc-400 mt-1 line-clamp-2">{thread.excerpt}</p>
      <p className="text-xs text-accent mt-2">{thread.replyCount} replies →</p>
    </Link>
  );
}
