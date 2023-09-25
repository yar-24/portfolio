'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { slideIn, textVariant } from '@/utils/motion';
import Image from 'next/image';
import { expertise } from '@/constans';
import SectionWrapper from '@/hoc/SectionWrapper';

const About = () => {
  return (
    <div className="relative flex flex-col items-center justify-center w-full h-screen max-auto mt-[50%] md:mt-0">
      <motion.div variants={textVariant()}>
        <h2 className="font-poppins text-white font-bold md:text-[68px] sm:text-[58px] xs:text-[50px] text-[40px] ">
          My Expertise.
        </h2>
      </motion.div>
      <div className="flex flex-col items-center xl:flex-row mt-7 p-2 md:p-0">
        {expertise.map((expert, index) => (
          <div
            key={index}
            className="border-2 p-7 my-2 md:w-[380px] md:h-[340px] w-[100%]"
          >
            <div className="flex ">
              <Image src={expert.icon} alt="fe" width={50} height={50} />
              <div className="flex flex-col">
                <h3
                  className="font-poppins md:text-[24px] font-bold ml-5 "
                  style={{
                    textDecoration: `underline solid ${expert.color} 5px`,
                  }}
                >
                  {expert.title}
                </h3>
                <h3 className="font-poppins md:text-[24px] font-bold leading-none ml-5 mt-2">
                  {expert.subtitle}
                </h3>
              </div>
            </div>
            <div></div>
            <div className="flex items-center justify-center mt-5 h-[150px]">
              <div className="flex h-full flex-col items-center text-secondary">
                <p>{'<h3>'}</p>
                <div className="w-[2px] h-full bg-gray-500" />
                <p>{'<h3>'}</p>
              </div>
              <p className="font-grotesk font-semibold text-[14px] md:text-lg">
                {expert.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, 'about');
