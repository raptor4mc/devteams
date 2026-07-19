import type { FeedItem } from "@/lib/feed-types"
import { FeedList } from "@/components/feed/feed-list"
import { Sidebar } from "@/components/navigation/sidebar"
import { BottomTabBar } from "@/components/navigation/bottom-tab-bar"
import { TrendingPanel } from "@/components/navigation/trending-panel"

export const runtime = "edge"

export default function HomePage() {
  // Frontend shell only. Real feed data will be supplied by the backend.
  const feedItems: FeedItem[] = []

  return (
    <div className="app-shell">
      <Sidebar />
      <main className="feed-column" aria-label="Home timeline">
        <header className="feed-header">
          <h1>Home</h1>
          <div className="feed-tabs" role="tablist" aria-label="Timeline filter">
            <button role="tab" aria-selected="true" className="active" type="button">For you</button>
            <button role="tab" aria-selected="false" type="button">Following</button>
          </div>
        </header>
        <FeedList items={feedItems} />
      </main>
      <TrendingPanel />
      <BottomTabBar />
    </div>
  )
}
