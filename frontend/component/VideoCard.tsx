import { VideoContent } from "@/types/feed";
import CardHeader from "./CardHeader";
import ActionRow from "./ActionRow";

export default function VideoCard({ post }: { post: VideoContent }) {
  return (
    <div className="border border-zinc-800 bg-zinc-950 p-4">
      <CardHeader username={post.author.username} timestamp={post.timestamp} kindLabel="Video" />
      <div className="relative overflow-hidden border border-zinc-800 bg-black aspect-video max-w-md">
        {/* Poster only for now — real playback wiring comes with the real
            upload pipeline. Plain <img> for the poster, not next/image. */}
        <img
          src={post.posterUrl}
          alt={post.caption}
          className="w-full h-full object-cover opacity-80"
          loading="lazy"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 bg-black/60 border border-zinc-300 flex items-center justify-center">
            <div
              className="w-0 h-0 ml-1
                border-t-[8px] border-t-transparent
                border-b-[8px] border-b-transparent
                border-l-[14px] border-l-zinc-100"
            />
          </div>
        </div>
      </div>
      <p className="text-sm text-zinc-200 mt-3">{post.caption}</p>
      <ActionRow likes={post.likes} comments={post.comments} />
    </div>
  );
}
