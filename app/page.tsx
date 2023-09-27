import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import bgHero from '@/public/assets/herobg.png';
import { codebg } from '@/public/assets';
import About from '@/components/About';
import Projects from '@/components/Projects';
import scroll from '@/public/assets/scroll.gif';
import Experiences from '@/components/Experiences';
import Expertice from '@/components/Expertice';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <div className="relative z-0 bg-primary overflow-x-hidden">
      <div className="flex relative flex-col items-center">
        <Image
          src={bgHero}
          alt="hero-bg"
          className="absolute w-auto h-screen opacity-20 bg-cover"
        />
        <Navbar />
        <Hero />
        <a href="#about" className="absolute bottom-40 cursor-pointer z-10">
          <Image src={scroll} className="w-[70px] h-auto" alt="icon-scoll" />
        </a>
        <div className="gradient-04" />
      </div>
      <div className="relative">
        <Expertice />
        <Image
          src={codebg}
          alt="hero-bg"
          className="absolute z-0 w-[600px] h-[300px] opacity-20 bg-cover bottom-[90vh] left-[30%]"
        />
        <About />
      </div>
      <Projects />
      <Experiences />
      <Contact />
    </div>
  );
}
