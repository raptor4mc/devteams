"use client"

import { useEffect, useState } from "react"

type Theme = "light" | "dark" | "system"

function applyTheme(theme: Theme) {
  const dark = theme === "dark" || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches)
  document.documentElement.classList.toggle("dark", dark)
  document.documentElement.style.colorScheme = dark ? "dark" : "light"
}

export function ThemeSwitcher() {
  const [theme, setTheme] = useState<Theme>("system")

  useEffect(() => {
    const saved = (localStorage.getItem("devteams-theme") as Theme | null) ?? "system"
    setTheme(saved)
    applyTheme(saved)
    const media = window.matchMedia("(prefers-color-scheme: dark)")
    const update = () => saved === "system" && applyTheme("system")
    media.addEventListener("change", update)
    return () => media.removeEventListener("change", update)
  }, [])

  function select(next: Theme) {
    setTheme(next)
    localStorage.setItem("devteams-theme", next)
    applyTheme(next)
  }

  return <fieldset className="theme-switcher"><legend>Theme</legend><p>Choose how DevTeams appears on this device.</p><div>{(["light", "dark", "system"] as const).map((item) => <button key={item} type="button" aria-pressed={theme === item} onClick={() => select(item)}>{item}</button>)}</div></fieldset>
}
