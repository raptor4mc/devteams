"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const links = [
  { href: "/", label: "Home Feed", exact: true },
  { href: "/following", label: "Following" },
  { href: "/uploads", label: "My Uploads" },
  { href: "/notifications", label: "Notifications" },
  { href: "/profile", label: "Profile" },
]

export function Sidebar() {
  const pathname = usePathname()
  return <aside className="sidebar"><nav aria-label="Primary navigation">{links.map(({ href, label, exact }) => <Link key={href} href={href} className={(exact ? pathname === href : pathname.startsWith(href)) ? "active" : ""}>{label}</Link>)}</nav><button className="compose-button" type="button" disabled title="Available when publishing is connected">+ New Post</button></aside>
}
