'use client';

import { projects } from '@/constans';
import Image, { StaticImageData } from 'next/image';
import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { cardVariants } from '@/utils/motion';

interface Props {
  id: number;
  name: string;
  cat: string;
  desc: string;
  image: StaticImageData;
  link: string;
}

const CardProjects = ({ name, cat, image, link, desc }: Props) => {
  const [selectedId, setSelectedId] = useState<any | null>(null);

  return (
    <div className="bg-tertiary w-full h-max rounded-md mb-4 md:mb-0">
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        layoutId={name}
        onClick={() => setSelectedId(name)}
      >
        <motion.div variants={cardVariants}>
          {/* <a href={link} target="_blank"> */}
          <div className="h-auto overflow-hidden rounded-t-md">
            <Image
              src={image}
              alt="eundang"
              className="w-full h-auto rounded-t-md ease-out duration-300 hover:scale-110"
            />
          </div>
          <div className="py-7 px-5 ">
            <h1 className="font-bold text-xl">{name}</h1>
            <p className="font-semibold mt-2 text-base text-secondary">{cat}</p>
          </div>
          {/* </a> */}
        </motion.div>
      </motion.div>
      <AnimatePresence>
        {selectedId && (
          <motion.div
            layoutId={selectedId}
            className="fixed z-30 flex justify-center items-center w-full h-full backdrop-blur-sm top-0 right-0 overflow-hidden mt-16"
          >
            <div className="relative bg-black-200 w-[500px] h-max">
              <a
                href={link}
                target="_blank"
                className="h-auto overflow-hidden rounded-t-md"
              >
                <Image src={image} alt="eundang" className="w-full h-auto" />
              </a>
              <div className="py-7 px-5 ">
                <h1 className="font-bold text-xl">{name}</h1>
                <p className="font-semibold mt-2 text-base text-secondary">
                  {desc}
                </p>
              </div>
              <motion.button
                className="absolute md:-top-5 top-0 right-0 md:-right-5 bg-red-600 rounded-full md:w-10 md:h-10 w-6 h-6"
                onClick={() => setSelectedId(null)}
              >
                X
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Projects = () => {
  const [item, setItem] = useState(projects);
  const [filternav, setFilternav] = useState('');

  const filterItem = (curcat: string) => {
    const newItem = projects.filter((newVal) => {
      return newVal.cat === curcat;
    });

    setItem(newItem);
    setFilternav(curcat);
  };

  return (
    <section className="relative flex flex-col w-full h-auto max-auto sm:px-16 px-6 xl:my-0 sm:my-[20%] my-[30%]">
      <ul className="flex flex-wrap md:flex-row list-none md:gap-4 gap-2 font-poppins text-secondary mb-5">
        <li className="md:text-base text-sm">Filter by</li>
        <li
          className={`cursor-pointer md:text-base text-sm ${
            item.length == 6 ? 'text-biru' : 'text-secondary'
          }`}
          onClick={() => setItem(projects)}
        >
          All /
        </li>

        <li
          className={`cursor-pointer md:text-base text-sm ${
            filternav == 'Website Development' && item.length != 6
              ? 'text-biru'
              : 'text-secondary'
          }`}
          onClick={() => filterItem('Website Development')}
        >
          Website Development /
        </li>

        <li
          className={`cursor-pointer md:text-base text-sm ${
            filternav == 'Mobile Development' && item.length != 6
              ? 'text-biru'
              : 'text-secondary'
          }`}
          onClick={() => filterItem('Mobile Development')}
        >
          Mobile Development
        </li>
      </ul>

      <div className="md:grid flex flex-col grid-cols-3 gap-4 w-full">
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
    </section>
  );
};

export default Projects;
