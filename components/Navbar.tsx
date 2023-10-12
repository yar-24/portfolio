'use client';

import { useEffect, useState } from 'react';
import { styles } from '../styles';
import { logo } from '@/public/assets';
import Image from 'next/image';
import Link from 'next/link';
import { navLinks } from '@/constans';
import NavbarMobile from './NavbarMobile';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 100) {
      setVisible(true);
    } else if (scrolled <= 100) {
      setVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisible);
  }, []);

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
        <ul
          className={`${
            visible
              ? 'fixed flex -translate-y-0 ease-in duration-300 justify-center items-center right-0 left-0 top-0 w-full h-14 backdrop-blur-sm '
              : 'block -translate-y-0'
          } list-none hidden lg:flex flex-row gap-10 font-mono`}
        >
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
