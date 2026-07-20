const TABS = [
  { label: "Home", icon: "⌂" },
  { label: "Threads", icon: "☰" },
  { label: "New", icon: "+" },
  { label: "Alerts", icon: "◔" },
  { label: "Profile", icon: "◍" },
];

export default function BottomTabBar() {
  return (
    <nav className="md:hidden fixed bottom-0 inset-x-0 border-t border-zinc-800 bg-zinc-950/95 backdrop-blur flex justify-around py-2 z-20">
      {TABS.map((tab) => (
        <button
          key={tab.label}
          className="flex flex-col items-center text-xs text-zinc-300 px-3 py-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
        >
          <span className="text-lg leading-none">{tab.icon}</span>
          <span className="mt-1">{tab.label}</span>
        </button>
      ))}
    </nav>
  );
}
