import { BottomTabBar } from './components/BottomTabBar';
import { FeedList } from './components/FeedList';
import { RightSidebar, Sidebar } from './components/Sidebar';
import { feedItems, trendingThreads } from './data/feed';

export default function Home() {
  return (
    <main className="appShell">
      <Sidebar />
      <section className="feedColumn">
        <header className="feedHeader">
          <div>
            <p className="eyebrow">Rust first. Frontend next.</p>
            <h1>Home Feed</h1>
          </div>
          <button className="headerAction">Latest</button>
        </header>
        <FeedList items={feedItems} />
      </section>
      <RightSidebar threads={trendingThreads} />
      <BottomTabBar />
    </main>
  );
}
