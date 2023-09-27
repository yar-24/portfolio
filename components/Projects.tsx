'use client';

import { projects } from '@/constans';
import Image, { StaticImageData } from 'next/image';
import React, { useState } from 'react';

interface Props {
  name: string;
  desc: string;
  image: StaticImageData;
  link: string;
}

const CardProjects = ({ name, desc, image, link }: Props) => {
  return (
    <a
      href={link}
      target="_blank"
      className="w-full h-full bg-[#0B1232] rounded-md mb-4 md:mb-0"
    >
      <div className="h-auto overflow-hidden rounded-t-md">
        <Image
          src={image}
          alt="eundang"
          className="w-full h-auto rounded-t-md ease-out duration-300 hover:scale-110"
        />
      </div>
      <div className="py-7 px-5 ">
        <h1 className="font-bold text-xl">{name}</h1>
        <p className="font-semibold mt-2 text-base text-secondary">{desc}</p>
      </div>
    </a>
  );
};

const Projects = () => {
  const [item, setItem] = useState(projects);

  const filterItem = (curcat: string) => {
    const newItem = projects.filter((newVal) => {
      return newVal.cat === curcat;
    });
    setItem(newItem);
  };

  return (
    <div className="relative flex flex-col w-full h-auto max-auto sm:px-16 px-6 xl:my-0 sm:my-[20%] my-[30%]">
      <ul className="flex list-none gap-4 font-poppins text-secondary mb-5">
        <li>Filter by</li>
        <li className="cursor-pointer" onClick={() => setItem(projects)}>
          All /
        </li>

        <li
          className="cursor-pointer"
          onClick={() => filterItem('Website Development')}
        >
          Website Development /
        </li>

        <li
          className="cursor-pointer"
          onClick={() => filterItem('Mobile Development')}
        >
          Mobile Development
        </li>
      </ul>
      <div className="md:grid flex flex-col grid-cols-3 gap-4 w-full cursor-pointer">
        {item.map(
          (project, idx) => idx < 3 && <CardProjects key={idx} {...project} />
        )}
        {item[3] ? (
          <a
            href={item[3].link}
            target="_blank"
            className="col-span-2 bg-[#0B1232] rounded-md h-max mb-5 md:mb-0"
          >
            <div className="h-auto overflow-hidden rounded-t-md">
              <Image
                src={item[3].image}
                alt="eundang"
                className="w-full h-auto rounded-t-md ease-out duration-300 hover:scale-110"
              />
            </div>
            <div className="py-7 px-5">
              <h1 className="font-bold text-xl">{item[3].name}</h1>
              <p className="font-bold mt-2 text-base text-secondary">
                {item[3].desc}
              </p>
            </div>
          </a>
        ) : null}

        <div className="grid grid-rows-2 gap-4 w-full ">
          {item.map(
            (project, idx) => idx > 3 && <CardProjects key={idx} {...project} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
