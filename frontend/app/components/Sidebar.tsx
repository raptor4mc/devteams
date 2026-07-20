"use client";

import { useState } from 'react';

const navItems = ['Home', 'Threads', 'Following', 'Notifications', 'Profile'];

export function Sidebar() {
  const [active, setActive] = useState('Home');

  return (
    <aside className="leftSidebar">
      <div className="wordmark"><span>◇</span> DevTeams</div>
      <nav>
        {navItems.map((item) => (
          <button key={item} className={active === item ? 'active' : ''} onClick={() => setActive(item)}>{item}</button>
        ))}
      </nav>
      <button className="newPost">+ New Post</button>
    </aside>
  );
}

export function RightSidebar({ threads }: { threads: string[] }) {
  return (
    <aside className="rightSidebar">
      <section className="trendingPanel">
        <h2>Trending Threads</h2>
        {threads.map((thread) => <a key={thread} href="#">{thread}</a>)}
      </section>
    </aside>
  );
}
