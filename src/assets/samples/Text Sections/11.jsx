'use client';
import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
} from 'motion/react';
import React, { useRef } from 'react';

export function Text11() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const createCharOpacity = (start: number, end: number) =>
    useTransform(scrollYProgress, [start, end], [0, 1]);

  const createCharY = (start: number, end: number) =>
    useTransform(scrollYProgress, [start, end], [0, 4]);

  const text = 'We want to create a world where AI is accessible to everyone.';

  return (
    <div className='relative h-[300vh] w-full'>
      <div className='py-24 sm:py-32'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='flex flex-col items-center justify-center'>
            <p className='text-sm text-zinc-500'>Scroll down</p>
          </div>
        </div>
      </div>
      <div className='py-24 sm:py-32'>
        <div className='mx-auto max-w-2xl px-6 lg:px-8'>
          <div className='flex flex-col items-center space-y-8' ref={ref}>
            <h1 className='text-center text-4xl text-zinc-900 dark:text-white'>
              {text.split('').map((char, charIndex, array) => {
                const start = Math.max(0, (charIndex / array.length) * 0.9);
                const end = Math.min(0.9, start + 0.2);

                return (
                  <motion.span
                    key={charIndex}
                    style={{
                      opacity: createCharOpacity(start, end),
                      y: createCharY(start, end),
                    }}
                    className='inline-block whitespace-pre'
                  >
                    {char}
                  </motion.span>
                );
              })}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
