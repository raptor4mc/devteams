import TopBar from "@/components/TopBar";
import Sidebar from "@/components/Sidebar";
import TrendingPanel from "@/components/TrendingPanel";
import BottomTabBar from "@/components/BottomTabBar";
import FeedList from "@/components/FeedList";
import { mockFeed } from "@/data/mockFeed";

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
