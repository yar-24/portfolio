'use client';

import { experiences } from '@/constans';
import Image, { StaticImageData } from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import { cardVariants, slideIn } from '@/utils/motion';
import SectionWrapper from '@/hoc/SectionWrapper';

interface Props {
  title: string;
  company_name: string;
  latest?: boolean;
  icon: StaticImageData;
  iconBg: string;
  date: string;
  points: string[];
}

const CardExperiences = ({
  title,
  company_name,
  latest,
  icon,
  iconBg,
  date,
  points,
}: Props) => {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <motion.div variants={cardVariants}>
        <li className="mb-10 ml-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <Image src={icon} alt="title" className="w-20 h-auto" />
          </span>
          <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
            {title} || {company_name}
            {latest == true && (
              <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3">
                Latest
              </span>
            )}
          </h3>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            {date}
          </time>
          <ul className="mt-5 list-disc ml-5 space-y-2">
            {points.map((point, index) => (
              <li
                key={index}
                className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400"
              >
                {point}
              </li>
            ))}
          </ul>
        </li>
      </motion.div>
    </motion.div>
  );
};

const Experiences = () => {
  return (
    <div className="flex flex-col w-full h-full md:mt-20 items-center ">
      <motion.div variants={slideIn('left', 'tween', 0.5, 1)}>
        <h2 className="font-poppins text-white font-bold md:w-[50%] md:text-[68px] sm:text-[58px] xs:text-[50px] text-[40px] ">
          Professional Experience.
        </h2>
      </motion.div>
      <ol className="relative border-l mt-10 border-gray-200 dark:border-gray-700 max-w-3xl">
        {experiences.map((experience, idx) => (
          <CardExperiences key={idx} {...experience} />
        ))}
      </ol>
    </div>
  );
};

export default SectionWrapper(Experiences, 'experiences');
