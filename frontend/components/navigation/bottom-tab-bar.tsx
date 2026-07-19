"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Bell, Home, Search, Users } from "lucide-react"

const links = [{ href: "/", label: "Home", icon: Home }, { href: "/explore", label: "Explore", icon: Search }, { href: "/teams", label: "Teams", icon: Users }, { href: "/notifications", label: "Alerts", icon: Bell }]

export function BottomTabBar() {
  const pathname = usePathname()
  return <nav className="bottom-tabs" aria-label="Mobile navigation">{links.map(({ href, label, icon: Icon }) => <Link key={href} href={href} className={pathname === href ? "active" : ""}><Icon /><span>{label}</span></Link>)}</nav>
}
