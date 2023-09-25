import { projects } from '@/constans';
import { eundang } from '@/public/assets';
import Image from 'next/image';
import React from 'react';

const Projects = () => {
  return (
    <div className="relative flex flex-col w-full h-auto max-auto sm:px-16 px-6">
      <h1>Filter</h1>
      <div className="md:grid grid-cols-3 gap-4 w-full cursor-pointer">
        {projects.map(
          (project, idx) =>
            idx < 3 && (
              <div key={idx} className="bg-[#0B1232] rounded-md mb-4 md:mb-0">
                <div className="h-auto overflow-hidden">
                  <Image
                    src={project.image}
                    alt="eundang"
                    className="static w-full h-auto rounded-t-md ease-out duration-300 hover:scale-110"
                  />
                </div>
                <div className="py-7 px-5 ">
                  <h1 className="font-bold text-xl">{project.name}</h1>
                  <p className="font-semibold text-base text-secondary">
                    {project.description}
                  </p>
                </div>
              </div>
            )
        )}
        <div className="col-span-2 bg-[#0B1232] rounded-md h-max">
          <Image
            src={projects[3].image}
            alt="eundang"
            className="w-full h-auto rounded-t-md"
          />
          <div className="py-7 px-5">
            <h1 className="font-bold text-xl">Eundang (Invitaion Web)</h1>
            <p className="font-bold text-base text-secondary">Full Stack</p>
          </div>
        </div>
        <div className="grid grid-rows-2 gap-4 w-full ">
          {projects.map(
            (project, idx) =>
              idx > 3 && (
                <div key={idx} className="col-span-2 bg-[#0B1232] rounded-md">
                  <Image
                    src={project.image}
                    alt="eundang"
                    className="w-full h-auto rounded-t-md"
                  />
                  <div className="py-7 px-5">
                    <h1 className="font-bold text-xl">
                      Eundang (Invitaion Web)
                    </h1>
                    <p className="font-bold text-base text-secondary">
                      Full Stack
                    </p>
                  </div>
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
