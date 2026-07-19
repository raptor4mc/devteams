import { Search, TrendingUp } from "lucide-react"

export function TrendingPanel() {
  return <aside className="right-rail"><label className="search-box"><Search /><span className="sr-only">Search DevTeams</span><input type="search" placeholder="Search developers" disabled /></label><section className="trend-card"><header><TrendingUp /><h2>Trending in dev</h2></header><div className="trend-empty"><p>Signals will appear here.</p><span>Trending topics are waiting for backend data.</span></div></section><section className="join-card"><span className="eyebrow">Built by developers</span><h2>Find your next great collaborator.</h2><p>Share work, trade hard-won lessons, and build in public with people who get it.</p><button type="button" disabled>Join DevTeams</button></section></aside>
}
