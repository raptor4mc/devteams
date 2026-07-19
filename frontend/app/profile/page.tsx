import Link from "next/link"
import { ThemeSwitcher } from "@/components/theme-switcher"

export default function ProfilePage() {
  return <main className="settings-page"><header><Link href="/">DEVTEAMS</Link><Link href="/">Back to feed</Link></header><section><p className="eyebrow">Profile</p><h1>Settings</h1><p className="settings-intro">Manage your DevTeams experience. Account settings will appear here when the backend is connected.</p><ThemeSwitcher /></section></main>
}
