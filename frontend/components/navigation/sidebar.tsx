"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Bell, Bookmark, Code2, Home, Search, Settings, Users } from "lucide-react"

const links = [
  { href: "/", label: "Home", icon: Home },
  { href: "/explore", label: "Explore", icon: Search },
  { href: "/teams", label: "Teams", icon: Users },
  { href: "/notifications", label: "Notifications", icon: Bell },
  { href: "/bookmarks", label: "Bookmarks", icon: Bookmark },
]

export function Sidebar() {
  const pathname = usePathname()
  return <aside className="sidebar"><Link href="/" className="brand"><span><Code2 /></span><strong>DevTeams</strong></Link><nav aria-label="Main navigation">{links.map(({ href, label, icon: Icon }) => <Link key={href} href={href} className={pathname === href ? "active" : ""}><Icon /><span>{label}</span></Link>)}</nav><div className="sidebar-footer"><button type="button" disabled className="compose-button">New post</button><Link href="/settings"><Settings /><span>Settings</span></Link></div></aside>
}
