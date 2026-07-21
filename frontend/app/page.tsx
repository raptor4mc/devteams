import TopBar from "@/component/TopBar";
import Sidebar from "@/component/Sidebar";
import TrendingPanel from "@/component/TrendingPanel";
import BottomTabBar from "@/component/BottomTabBar";
import FeedList from "@/component/FeedList";
import { mockFeed } from "@/data/mockFeed";

export default function HomePage() {
  return (
    <>
      <Head>
        <meta name="google-site-verification" content="dvKKYev6im0XU4AEzXiDjxSktZTi5qMS__k-Yqq38yk" />
      </Head>
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
