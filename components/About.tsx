'use client';

import Image from 'next/image';
import React from 'react';
import { arrow } from '@/public/assets';
import SectionWrapper from '@/hoc/SectionWrapper';

const About = () => {
  return (
    <div className="relative flex md:flex-row flex-col items-center md:justify-between w-full h-screen max-auto pt-26 md:pt-0">
      <div className="flex flex-col md:w-[40%] ">
        <h1 className="text-[60px] md:text-[110px] font-poppins font-bold leading-tight w-40">
          About Me
        </h1>
        <p className="font-mono text-[18px] md:text-[20px] leading-snug">
          I’m a fresh graduate and Frontend developer using ReactJs and NextJs
          technology with more than 3 years of experience in software
          development and extensive experience in various web development
          projects. Team player with excellent communication skills, high
          learning quality, passionate and highly self-motivated.
        </p>
      </div>
      <div className="mt-5 md:mt-0">
        <video
          width="700"
          height="500"
          preload="false"
          playsInline
          autoPlay
          loop
          muted
          controlsList="nodownload"
          className="relative"
        >
          <source data-src="/hp.webm" src="/hp.webm" type="video/webm" />
        </video>
        <div className="absolute flex flex-col bottom-0 lg:bottom-10 md:right-0">
          <Image
            className="self-center md:-scale-x-100"
            src={arrow}
            alt="arrow"
            width={100}
            height={100}
          />
          <div className="flex flex-col md:items-end">
            <p className="md:text-xl text-base font-semibold font-poppins">
              Featured Project
            </p>
            <h1 className="md:text-3xl text-xl font-bold font-mono">
              Mendelof App
            </h1>
            <a
              href="https://mendelof.vercel.app/"
              target="_blank"
              className="flex items-center justify-center bg-ungu w-[80%] py-2 rounded-sm font-semibold mt-3"
            >
              View Project
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(About, 'about');
