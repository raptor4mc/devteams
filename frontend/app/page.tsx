import { FeedList } from "@/components/feed/feed-list"
import { BottomTabBar } from "@/components/navigation/bottom-tab-bar"
import { Sidebar } from "@/components/navigation/sidebar"
import { TopHeader } from "@/components/navigation/top-header"
import { TrendingPanel } from "@/components/navigation/trending-panel"
import type { FeedItem } from "@/lib/feed-types"

export const runtime = "edge"

const feedItems: FeedItem[] = []

export default function HomePage() {
  return <><TopHeader /><div className="app-shell"><Sidebar /><main className="feed-column" aria-label="Home feed"><FeedList items={feedItems} /></main><TrendingPanel /></div><BottomTabBar /></>
}
