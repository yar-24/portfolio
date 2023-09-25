'use client';

import Image from 'next/image';
import React from 'react';
import { arrow } from '@/public/assets';
import SectionWrapper from '@/hoc/SectionWrapper';

const Work = () => {
  return (
    <div className="relative flex md:flex-row flex-col items-center md:justify-between w-full h-screen max-auto pt-32 md:pt-0">
      <div className="flex flex-col md:w-[40%] ">
        <h1 className="text-[60px] md:text-[110px] font-poppins font-bold leading-tight w-40">
          My Work
        </h1>
        <p className="font-mono text-[18px] md:text-[20px] leading-snug">
          Deployed scalable travel, event and telemedicine web and hybrid mobile
          apps using React SPA and PWA. Collaborated in 140+ projects with 50+
          clients all around the world. I am also interested in data analytics
          and visualization.
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
        <div className="absolute flex flex-col bottom-10 md:right-0">
          <Image
            className="self-center md:-scale-x-100"
            src={arrow}
            alt="arrow"
            width={100}
            height={100}
            // style={{ transform: 'scaleX(-1)' }}
          />
          <div className="flex flex-col md:items-end">
            <p className="md:text-xl text-base font-semibold font-poppins">
              Featured Project
            </p>
            <h1 className="md:text-3xl text-xl font-bold font-mono">
              Tryotel App
            </h1>
            <button className="bg-ungu w-[80%] py-2 rounded-sm font-semibold mt-3">
              View Project
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Work, 'work');
