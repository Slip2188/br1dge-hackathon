import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Countdown from '../components/Countdown';
import EventFlow from '../components/EventFlow';
// import Prizes from '@/react-app/components/Prizes';
import Sponsors from '../components/Sponsors';
import Tracks from '../components/Tracks';
import Requirements from '../components/Requirements';
import Team from '../components/Team';
import Socials from '../components/Socials';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Countdown />
      <About />
      <Sponsors />
      <Requirements />
      <Tracks />
      {/* <Prizes /> */}
      <EventFlow />
      <Team />
      <Socials />
      <Footer />
    </div>
  );
}
