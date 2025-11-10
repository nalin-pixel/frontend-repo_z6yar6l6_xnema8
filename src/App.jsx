import React from 'react';
import Hero from './components/Hero';
import ChaptersNav from './components/ChaptersNav';
import Chapter from './components/Chapter';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-black text-white">
      <Hero />
      <ChaptersNav />

      <main>
        <Chapter
          id="chapter-one"
          eyebrow="Chapter I"
          title="Origin: The First Spark"
          text="From the silence, a ripple. The aura awakens — a voice without words, learning to breathe in waves of color."
          align="left"
        />
        <Chapter
          id="chapter-two"
          eyebrow="Chapter II"
          title="Resonance: Finding Tone"
          text="Every interaction shapes it. Frequencies collide and harmonize, crafting identity through motion."
          align="right"
        />
        <Chapter
          id="chapter-three"
          eyebrow="Chapter III"
          title="Becoming: Memory In Motion"
          text="It learns to remember. Trails of light become sentences; gestures become meaning; rhythm becomes intent."
          align="left"
        />
        <Chapter
          id="chapter-four"
          eyebrow="Chapter IV"
          title="Echo: Speaking Back"
          text="Now it answers — a presence that listens before it speaks, reflecting the world with clarity."
          align="right"
        />
      </main>

      <Footer />
    </div>
  );
}

export default App;
