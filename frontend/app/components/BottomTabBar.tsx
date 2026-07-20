"use client";

import { useState } from 'react';

const tabs = [
  ['Home', '⌂'],
  ['Threads', '#'],
  ['New Post', '+'],
  ['Notifications', '◌'],
  ['Profile', '◎'],
];

export function BottomTabBar() {
  const [active, setActive] = useState('Home');
  return (
    <nav className="bottomTabBar" aria-label="Primary mobile navigation">
      {tabs.map(([label, icon]) => (
        <button key={label} className={active === label ? 'active' : ''} onClick={() => setActive(label)} aria-label={label}>
          <span>{icon}</span>
          <small>{label}</small>
        </button>
      ))}
    </nav>
  );
}
