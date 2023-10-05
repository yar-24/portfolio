'use client';

import { StrictMode } from 'react';
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
import ScrollBtn from '@/components/ScrollBtn';
import { motion, useScroll, useSpring } from 'framer-motion';

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <>
      <StrictMode>
        <div className="relative z-0 bg-primary overflow-x-hidden">
          <div className="flex relative flex-col items-center">
            <Image
              src={bgHero}
              alt="hero-bg"
              className="absolute w-screen h-screen opacity-20 bg-cover"
            />
            <Navbar />
            <Hero />
            <a
              href="#about"
              className="absolute bottom-52 md:bottom-40 cursor-pointer z-10"
            >
              <Image
                src={scroll}
                className="w-[70px] h-auto"
                alt="icon-scoll"
              />
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
      </StrictMode>
      <ScrollBtn />
      <motion.div className="progress-bar" style={{ scaleX }} />
    </>
  );
}
