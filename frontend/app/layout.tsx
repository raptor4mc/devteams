import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'DevTeams',
  description: 'A social feed for developer teams.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
