import React from 'react';

const chapters = [
  { id: 'chapter-one', label: 'Origin' },
  { id: 'chapter-two', label: 'Resonance' },
  { id: 'chapter-three', label: 'Becoming' },
  { id: 'chapter-four', label: 'Echo' },
];

const ChaptersNav = () => {
  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <nav id="chapters" className="sticky top-0 z-40 w-full bg-black/80 backdrop-blur border-b border-white/10">
      <div className="mx-auto max-w-7xl px-6">
        <ul className="flex items-center gap-6 overflow-x-auto py-4 text-white">
          {chapters.map((c) => (
            <li key={c.id}>
              <button
                onClick={() => handleScroll(c.id)}
                className="text-sm uppercase tracking-widest text-white/70 hover:text-white"
              >
                {c.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default ChaptersNav;
