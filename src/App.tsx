import React from 'react';
import { Header } from './components/Header';
import { AboutSection } from './components/AboutSection';
import { ExpectSection } from './components/ExpectSection';
import { TicketPackages } from './components/TicketPackages';
import { SpecialOffer } from './components/SpecialOffer';
export function App() {
  return <div className="w-full min-h-screen bg-white">
      <Header />
      <main>
        <AboutSection />
        <ExpectSection />
        <TicketPackages />
        <SpecialOffer />
      </main>
    </div>;
}