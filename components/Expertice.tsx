'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '@/utils/motion';
import Image from 'next/image';
import { expertise } from '@/constans';
import SectionWrapper from '@/hoc/SectionWrapper';

const Expertice = () => {
  return (
    <div className="relative flex flex-col items-center justify-center w-full h-screen max-auto xl:my-0 lg:my-[50%] md:my-[40%] sm:my-[30%] my-[50%]">
      <motion.div variants={textVariant(0.3)}>
        <h2 className="font-poppins text-white font-bold md:text-[68px] sm:text-[58px] xs:text-[50px] text-[40px] ">
          My Expertise.
        </h2>
      </motion.div>
      <motion.div variants={fadeIn('left', 'spring', 0.5, 1)}>
        <div className="flex flex-col items-center xl:flex-row mt-7 p-2 md:p-0">
          {expertise.map((expert, index) => (
            <div
              key={index}
              className="flex flex-col justify-between border-2 p-7 my-2 md:w-[380px] md:h-[400px] w-[100%] h-[300px]"
            >
              <div className="flex ">
                <Image src={expert.icon} alt="fe" className="w-[50px] h-auto" />
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
              <div className="flex items-center justify-center mt-5 h-[70%]">
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
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Expertice, 'expertice');
