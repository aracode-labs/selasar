import { useEffect, useState } from 'react';
import { fetchRsvpStats } from './lib/supabaseClient.js';
import eventData from './data/event.js';
import Hero from './components/Hero.jsx';
import EventDetails from './components/EventDetails.jsx';
import RsvpForm from './components/RsvpForm.jsx';
import Footer from './components/Footer.jsx';

function App() {
  const [stats, setStats] = useState({ yes: 0, no: 0 });

  useEffect(() => {
    fetchRsvpStats().then(setStats).catch(console.warn);
  }, []);

  return (
    <div className="page-shell">
      <Hero event={eventData} stats={stats} />
      <main>
        <EventDetails event={eventData} />
        <RsvpForm event={eventData} onSubmitSuccess={() => fetchRsvpStats().then(setStats)} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
