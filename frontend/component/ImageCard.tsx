import { ImageContent } from "@/types/feed";
import CardHeader from "./CardHeader";
import ActionRow from "./ActionRow";

export default function ImageCard({ post }: { post: ImageContent }) {
  return (
    <div className="border border-zinc-800 bg-zinc-950 p-4">
      <CardHeader username={post.author.username} timestamp={post.timestamp} kindLabel="Image" />
      <div className="flex gap-4">
        {/* Plain <img>, not next/image — the default optimizer isn't
            compatible with the Cloudflare Edge runtime this app deploys to. */}
        <img
          src={post.imageUrl}
          alt={post.caption}
          className="w-40 h-40 object-cover border border-zinc-800 flex-shrink-0"
          loading="lazy"
        />
        <p className="text-sm text-zinc-200 self-center">{post.caption}</p>
      </div>
      <ActionRow likes={post.likes} comments={post.comments} />
    </div>
  );
}
