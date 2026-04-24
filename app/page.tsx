'use client';
import { useAOS } from '@/hooks/useAOS';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import About from '@/components/About';
import Menu from '@/components/Menu';
import Chef from '@/components/Chef';
import Experience from '@/components/Experience';
import Reviews from '@/components/Reviews';
import Reservation from '@/components/Reservation';
import Footer from '@/components/Footer';

export default function Home() {
  useAOS();
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Menu />
        <Chef />
        <Experience />
        <Reviews />
        <Reservation />
      </main>
      <Footer />
    </>
  );
}
