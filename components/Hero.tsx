'use client';

import { styles } from '@/styles';
import Image from 'next/image';
import React from 'react';
import Scroll from '@/public/assets/scroll.gif';
import SectionWrapper from '@/hoc/SectionWrapper';

const Hero = () => {
  return (
    <section className="w-full h-[80vh] max-auto">
      <div className="relative h-full mx-auto flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <h1 className="font-bold text-white text-[50px] md:text-center md:text-[120px] font-poppins">
            AKHYAR YAR
          </h1>
          <h3 className="font-semibold text-base sm:text-2xl text-center font-mono">
            FRONT END, BACK END & FULLSTACK DEVELOPER.
          </h3>
        </div>
        <a href="#about" className="absolute bottom-0">
          <Image src={Scroll} width={60} height={100} alt="icon-scoll" />
        </a>
      </div>
    </section>
  );
};

export default SectionWrapper(Hero, 'home');
