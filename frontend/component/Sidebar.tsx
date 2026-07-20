const NAV_ITEMS = ["Home Feed", "Following", "My Uploads", "Notifications", "Profile"];

export default function Sidebar() {
  return (
    <aside className="hidden md:flex md:flex-col w-56 shrink-0 border-r border-zinc-800 p-4 gap-2 h-[calc(100vh-70px)] sticky top-[70px]">
      {NAV_ITEMS.map((item) => (
        <button
          key={item}
          className="text-left text-sm text-zinc-200 border border-zinc-800 px-3 py-2 hover:border-zinc-600 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
        >
          {item}
        </button>
      ))}
      <button className="mt-2 text-left text-sm font-semibold text-accent border-2 border-accent px-3 py-2 hover:bg-accent/10 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent">
        + New Post
      </button>
    </aside>
  );
}
