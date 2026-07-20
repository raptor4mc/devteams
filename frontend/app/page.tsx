import TopBar from "@/components/TopBar.tsx";
import Sidebar from "@/components/Sidebar.tsx";
import TrendingPanel from "@/components/TrendingPanel.tsx";
import BottomTabBar from "@/components/BottomTabBar.tsx";
import FeedList from "@/components/FeedList.tsx";
import { mockFeed } from "@/data/mockFeed.tsx";

export default function HomePage() {
  return (
    <>
      <TopBar />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 min-w-0 px-4 py-4 pb-20 md:pb-4">
          <FeedList items={mockFeed} />
        </main>
        <TrendingPanel />
      </div>
      <BottomTabBar />
    </>
  );
}
