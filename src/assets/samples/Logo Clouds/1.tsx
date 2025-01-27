'use client';

import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { AppleMusic, A24, Pixar, Prada, Salomon, OpenAI, Sony, Strava } from '@/components/motion-ui-demo-icons/2';
// import { AppleMusic } from './icons/apple-music';
// import { A24 } from './icons/a24';
// import { Pixar } from './icons/pixar';
// import { Prada } from './icons/prada';
// import { Salomon } from './icons/salomon';
// import { OpenAI } from './icons/openai';
// import { Sony } from './icons/sony';
// import { Strava } from './icons/strava';

const LOGOS = [
  { Component: AppleMusic, name: 'AppleMusic' },
  { Component: A24, name: 'A24' },
  { Component: Pixar, name: 'Pixar' },
  { Component: Prada, name: 'Prada' },
  { Component: Salomon, name: 'Salomon' },
  { Component: OpenAI, name: 'OpenAI' },
  { Component: Sony, name: 'Sony' },
  { Component: Strava, name: 'Strava' },
];

const LOGO_COUNT = 4;

export function LogoCloud1() {
  const [currentLogos, setCurrentLogos] = useState(LOGOS.slice(0, LOGO_COUNT));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLogos((prevLogos) => {
        const currentIndex = LOGOS.indexOf(prevLogos[0]);
        const nextStartIndex = (currentIndex + LOGO_COUNT) % LOGOS.length;
        return LOGOS.slice(nextStartIndex, nextStartIndex + LOGO_COUNT);
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='py-24 sm:py-32'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='grid w-full grid-cols-4 gap-4'>
          {currentLogos.map((logo, index) => (
            <AnimatePresence initial={false} mode='wait' key={index}>
              <motion.div
                key={logo.name}
                initial={{ scale: 0.6, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.6, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className='flex items-center justify-center'
              >
                <logo.Component className='h-8 w-full text-black dark:text-white' />
              </motion.div>
            </AnimatePresence>
          ))}
        </div>
      </div>
    </div>
  );
}
