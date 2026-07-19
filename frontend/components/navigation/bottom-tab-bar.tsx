"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Bell, Home, Upload, UserRound } from "lucide-react"

const links = [{ href: "/", label: "Home", icon: Home }, { href: "/uploads", label: "Uploads", icon: Upload }, { href: "/notifications", label: "Alerts", icon: Bell }, { href: "/profile", label: "Profile", icon: UserRound }]

export function BottomTabBar() {
  const pathname = usePathname()
  return <nav className="bottom-tabs" aria-label="Mobile navigation">{links.map(({ href, label, icon: Icon }) => <Link key={href} href={href} className={pathname === href ? "active" : ""}><Icon aria-hidden="true" /><span>{label}</span></Link>)}</nav>
}
