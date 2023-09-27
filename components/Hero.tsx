'use client';
import React from 'react';
import SectionWrapper from '@/hoc/SectionWrapper';

const Hero = () => {
  return (
    <section className="w-full h-screen max-auto">
      <div className="relative h-full mx-auto flex flex-col items-center">
        <div className="flex flex-col items-center justify-center md:mt-[10%] mt-[50%]">
          <h1 className="font-bold text-white text-[50px] md:text-center md:text-[120px] font-poppins">
            AKHYAR YAR
          </h1>
          <h3 className="font-semibold text-base sm:text-2xl text-center font-mono">
            FRONT END, BACK END & FULLSTACK DEVELOPER.
          </h3>
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper(Hero, 'home');
