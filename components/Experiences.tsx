'use client';

import { experiences } from '@/constans';
import Image from 'next/image';
import React from 'react';
// import { Chrono } from 'react-chrono';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const ExperienceCard = ({ experience }: any) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: '#1d1836', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid #232631' }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <Image
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p className="text-secondary text-[16px]">{experience.company_name}</p>
      </div>
      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point: any, index: number) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experiences = () => {
  return (
    // <div className="flex flex-col items-center h-full w-full">
    <div className="mt-20 flex flex-col">
      <VerticalTimeline>
        {experiences.map((experience, index) => (
          <React.Fragment key={index}>
            <ExperienceCard experience={experience} />
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </div>
    // </div>
  );
};

export default Experiences;
