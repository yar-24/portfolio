import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import bgHero from '@/public/assets/herobg.png';
import About from '@/components/About';
import { codebg } from '@/public/assets';
import Work from '@/components/Work';
import Projects from '@/components/Projects';

export default function Home() {
  return (
    <div className="relative z-0 bg-primary overflow-x-hidden">
      <div className="relative bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Image
          src={bgHero}
          alt="hero-bg"
          className="absolute w-full h-screen opacity-20 bg-cover"
        />
        <Navbar />
        <Hero />
        <div className="gradient-04 z-0" />
      </div>
      <div className="relative">
        <About />
        <Image
          src={codebg}
          alt="hero-bg"
          className="absolute z-0 w-[600px] h-[300px] opacity-20 bg-cover bottom-[90vh] left-[30%]"
        />
        <Work />
      </div>
      <Projects />
    </div>
  );
}
