'use client';

import { useState, useEffect } from 'react';
import { useAnimate, stagger } from 'framer-motion';
import { MenuToggle } from './MenuToggle';
import { navLinks } from '@/constans';

function useMenuAnimation(isOpen: boolean) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const menuAnimations: any = isOpen
      ? [
          [
            'nav',
            { transform: 'translateX(20%)' },
            { ease: [0.08, 0.65, 0.53, 0.96], duration: 0.6 },
          ],
          [
            'li',
            { transform: 'scale(1)', opacity: 1, filter: 'blur(0px)' },
            { delay: stagger(0.05), at: '-0.1' },
          ],
          [
            'a',
            { transform: 'scale(1)', opacity: 1, filter: 'blur(0px)' },
            { delay: stagger(0.05), at: '-0.1' },
          ],
        ]
      : [
          [
            'li',
            { transform: 'scale(0.5)', opacity: 0, filter: 'blur(10px)' },
            { delay: stagger(0.05, { from: 'last' }), at: '<' },
          ],
          [
            'a',
            { transform: 'scale(0.5)', opacity: 0, filter: 'blur(10px)' },
            { delay: stagger(0.05, { from: 'last' }), at: '<' },
          ],
          ['nav', { transform: 'translateX(100%)' }, { at: '-0.1' }],
        ];

    animate([
      [
        'path.top',
        { d: isOpen ? 'M 3 16.5 L 17 2.5' : 'M 2 2.5 L 20 2.5' },
        { at: '<' },
      ],
      ['path.middle', { opacity: isOpen ? 0 : 1 }, { at: '<' }],
      [
        'path.bottom',
        { d: isOpen ? 'M 3 2.5 L 17 16.346' : 'M 2 16.346 L 20 16.346' },
        { at: '<' },
      ],
      ...menuAnimations,
    ]);
  }, [isOpen]);

  return scope;
}

const Menu = () => {
  const [active, setActive] = useState('');

  const fileUrl =
    'https://drive.google.com/uc?export=download&id=11FUku-6AL10DUFiFv66eOcCnpKJfJkEg';
  return (
    <nav className="menu w-[400px] md:w-[600px]">
      <ul className="flex flex-col gap-[10px] p-[15px]">
        {navLinks.map((link) => (
          <li
            key={link.id}
            onClick={() => setActive(link.title)}
            className={`${
              active === link.title ? 'text-biru' : 'text-white'
            } block origin-[-20px_50%] font-bold text-[34px] p-[10px] will-change-[transform, opacity, filter]`}
          >
            <a href={`#${link.id}`}>{link.title}</a>
          </li>
        ))}
        <a
          href={fileUrl}
          className="menu-a flex justify-center mt-10 hover:text-white text-[18px] w-[50%] font-medium cursor-pointer py-2 px-3 rounded-sm bg-ungu"
        >
          <button>Download CV</button>
        </a>
      </ul>
    </nav>
  );
};

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  const scope = useMenuAnimation(isOpen);

  return (
    <div ref={scope}>
      <Menu />
      <MenuToggle toggle={() => setIsOpen(!isOpen)} />
    </div>
  );
}
