import { Header } from './components/Header';
import { AboutSection } from './components/AboutSection';
import { ExpectSection } from './components/ExpectSection';
import { TicketPackages } from './components/TicketPackages';
import { Footer } from './components/Footer';

export function App() {
  return <div className="w-full min-h-screen bg-white">
    <Header />
    <main>
      <AboutSection />
      <ExpectSection />
      <TicketPackages />
    </main>
    <Footer />
  </div>;
}