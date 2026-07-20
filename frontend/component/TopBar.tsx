const NAV_LINKS = ["Home", "Threads", "Following", "Notifications", "Profile"];

export default function TopBar() {
  return (
    <header className="h-[70px] border-b border-zinc-800 flex items-center justify-between px-6 sticky top-0 bg-black/95 backdrop-blur z-30">
      <div className="flex items-center gap-8">
        <span className="font-display text-2xl font-bold text-accent tracking-tight">
          DEVTEAMS
        </span>
        <nav className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href="#"
              className="text-sm text-zinc-300 hover:text-zinc-100 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
            >
              {link}
            </a>
          ))}
        </nav>
      </div>
      <input
        type="search"
        placeholder="Search DevTeams..."
        className="hidden sm:block bg-transparent border border-zinc-700 px-3 py-1.5 text-sm text-zinc-200 placeholder:text-zinc-500 w-56 focus:outline-none focus:border-accent"
      />
    </header>
  );
}
