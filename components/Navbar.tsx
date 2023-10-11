'use client';

import { useState, useEffect } from 'react';
import { styles } from '../styles';
import { logo, menu, close } from '@/public/assets';
import Image from 'next/image';
import Link from 'next/link';
import { navLinks } from '@/constans';
import { stagger, useAnimate } from 'framer-motion';
import { motion } from 'framer-motion';
import { MenuToggle } from './MenuToggle';
import NavbarMobile from './NavbarMobile';

const staggerMenuItems = stagger(0.1, { startDelay: 0.15 });

// const useMenuAnimation = (toggle: boolean) => {
//   const [scope, animate] = useAnimate();

//   useEffect(() => {
//     animate('.menu', { rotate: toggle ? 180 : 0 }, { duration: 0.2 });

//     if (toggle == true) {
//       animate(
//         'ul',
//         {
//           clipPath: toggle
//             ? 'inset(0% 0% 0% 0% round 10px)'
//             : 'inset(10% 50% 90% 50% round 10px)',
//         },
//         {
//           type: 'spring',
//           bounce: 0,
//           duration: 0.5,
//         }
//       );

//       animate(
//         'li',
//         toggle
//           ? { opacity: 1, scale: 1, filter: 'blur(0px)' }
//           : { opacity: 0, scale: 0.3, filter: 'blur(20px)' },
//         {
//           duration: 0.2,
//           delay: toggle ? staggerMenuItems : 0,
//         }
//       );
//     }
//   }, [toggle]);

//   return scope;
// };

const Navbar = () => {
  const [active, setActive] = useState('');

  const refreshPage = () => {
    window.location.reload();
    window.scrollTo(0, 0);
    setActive('');
  };

  const fileUrl =
    'https://drive.google.com/uc?export=download&id=11FUku-6AL10DUFiFv66eOcCnpKJfJkEg';

  return (
    <div
      className={`${styles.paddingX} px-6 w-full flex items-center relative py-5 top-0 z-20 bg-transparent`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          href="/"
          className="flex items-center gap-2"
          onClick={refreshPage}
        >
          <Image src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-biru text-[28px] font-bold font-mono cursor-pointer flex">
            Akhyar
            <span className="text-white">.</span>
            <span className="text-ungu">_</span>
          </p>
        </Link>
        <ul className="list-none hidden lg:flex flex-row gap-10 font-mono">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? 'text-biru' : 'text-white'
              } hover:text-secondary text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        <a
          href={fileUrl}
          className="hidden lg:flex hover:text-white text-[18px] font-medium cursor-pointer py-2 px-3 rounded-sm bg-ungu"
        >
          <button>Download CV</button>
        </a>

        {/* Mobile */}
      </div>
      <div className="lg:hidden fixed right-0 top-0 justify-end items-center">
        <NavbarMobile />
      </div>
    </div>
  );
};

export default Navbar;
