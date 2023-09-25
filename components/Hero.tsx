import { styles } from '@/styles';
import Image from 'next/image';
import React from 'react';
import Scroll from '@/public/assets/scroll.gif';

const Hero = () => {
  return (
    <section className="relative w-full h-screen max-auto">
      <div
        className={`${styles.paddingX} absolute inset-0  max-w-7xl mx-auto flex flex-col items-center justify-center gap-5`}
      >
        <div className="flex flex-col items-center justify-center">
          <h1 className="font-bold text-white text-[50px] md:text-center md:text-[120px] font-poppins">
            AKHYAR YAR
          </h1>
          <h3 className="font-semibold text-base sm:text-2xl text-center font-mono">
            FRONT END, BACK END & FULLSTACK DEVELOPER.
          </h3>
        </div>
        <a href="#about" className="absolute bottom-10 z-10">
          <Image src={Scroll} width={60} height={100} alt="icon-scoll" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
