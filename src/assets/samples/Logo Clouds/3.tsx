'use client';

import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { A24 } from './icons/a24';
import { AppleMusic } from './icons/apple-music';
import { OpenAI } from './icons/openai';
import { Pixar } from './icons/pixar';
import { Prada } from './icons/prada';
import { Salomon } from './icons/salomon';
import { Sony } from './icons/sony';
import { Strava } from './icons/strava';

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

export function LogoCloud3() {
  const [currentLogos, setCurrentLogos] = useState(LOGOS.slice(0, 4));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLogos((prevLogos) => {
        const currentIndex = LOGOS.indexOf(prevLogos[0]);
        const nextStartIndex = (currentIndex + 4) % LOGOS.length;
        return LOGOS.slice(nextStartIndex, nextStartIndex + 4);
      });
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='w-full py-24 sm:py-32'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='flex w-full flex-col items-center gap-4 space-x-2 px-4 py-4 md:flex-row'>
          <div className='grid w-full grid-cols-4 gap-4'>
            <AnimatePresence initial={false} mode='popLayout'>
              {currentLogos.map((logo, index) => (
                <div
                  key={logo.name}
                  className='relative flex h-10 w-full items-center justify-center overflow-hidden'
                >
                  <motion.div
                    initial={{ y: -40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 40, opacity: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className='absolute inset-0 flex items-center justify-center'
                  >
                    <logo.Component className='h-full w-full max-w-[80px] text-black dark:text-white' />
                  </motion.div>
                </div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
