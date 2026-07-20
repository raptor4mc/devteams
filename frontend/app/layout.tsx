import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DevTeams",
  description: "A social platform for developers — share posts, threads, and live playable code.",
};

// Dark mode only, hardcoded — there is no light theme and no toggle.
// The color-scheme meta value below just tells the browser's own UI
// (scrollbars, form controls) to render dark, it doesn't add any
// switchable theme logic.
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" style={{ colorScheme: "dark" }}>
      <body className="bg-black text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
