'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

const ScrollBtn = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisible);
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`fixed z-20 md:bottom-10 bottom-5 md:right-10 right-5 ${
        visible ? 'inline ' : 'hidden'
      }`}
    >
      <Image
        id="progress"
        src="/scroll.gif"
        alt="arrow"
        width={60}
        height={60}
        className="rotate-180"
      />
    </button>
  );
};

export default ScrollBtn;
