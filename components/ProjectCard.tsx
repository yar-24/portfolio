import { projects } from '@/constans';
import Image, { StaticImageData } from 'next/image';

export type ProjectProps = {
  name: string;
  desc: string;
  image: StaticImageData;
  link: string;
};

const ProjectCard = ({ name, desc, image, link }: ProjectProps) => {
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
      <p className="font-semibold text-base text-secondary">{desc}</p>
    </div>
  </a>;
};

export default ProjectCard;
