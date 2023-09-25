'use client';

import { useState, useEffect } from 'react';
import { styles } from '../styles';
import { logo, menu, close } from '@/public/assets';
import Image from 'next/image';
import Link from 'next/link';
import { navLinks } from '@/constans';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  const [show, setShow] = useState(false);

  const controlNavbar = () => {
    if (window.scrollY > 250) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, []);

  const fileUrl =
    'https://drive.google.com/uc?export=download&id=1ioIBr1VoDrj1WjZaBYffSxFyv7WqHxdx';

  return (
    <>
      {show && (
        <ul
          className={` ${
            show ? 'translate-y-0' : 'translate-y-full'
          } w-full mx-auto text-center py-5 fixed bg-red-700 z-50 translate-all ease-in-out duration-300 translate-y-15 list-none hidden lg:flex flex-row justify-center gap-10 font-mono`}
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
      )}
      <nav
        className={`${styles.paddingX} px-6 w-full flex items-center relative py-5 top-0 z-20 bg-transparent`}
      >
        <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
          <Link
            href="/"
            className="flex items-center gap-2"
            onClick={() => {
              setActive('');
              window.scrollTo(0, 0);
            }}
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
          <div className="lg:hidden flex flex-1 justify-end items-center">
            <Image
              src={toggle ? close : menu}
              alt="menu"
              className="w-[28px] h-[28px] object-contain cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />
            <div
              className={`${
                !toggle ? 'hidden' : 'flex'
              } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
            >
              <ul className="list-none flex justify-end items-start flex-col gap-4">
                {navLinks.map((link) => (
                  <li
                    key={link.id}
                    className={`${
                      active === link.title ? 'text-white' : 'text-secondary'
                    } font-poppins font-medium cursor-pointer text-[16px]`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(link.title);
                    }}
                  >
                    <a href={`#${link.id}`}>{link.title}</a>
                  </li>
                ))}
                <a
                  href={fileUrl}
                  className="hover:text-white text-[18px] font-medium cursor-pointer"
                >
                  <button>Download CV</button>
                </a>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
