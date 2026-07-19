import Link from "next/link"

const categories = ["Posts", "Threads", "Images", "Videos", "Games"]

export function TopHeader() {
  return <header className="top-header"><Link className="wordmark" href="/">DEVTEAMS</Link><nav aria-label="Content categories">{categories.map((category) => <button key={category} type="button" disabled title="Available when content filters are connected">{category}</button>)}</nav><label className="top-search"><span className="sr-only">Search DevTeams</span><input type="search" placeholder="Search DevTeams..." disabled /></label></header>
}
