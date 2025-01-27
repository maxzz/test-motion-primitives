'use client';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export function Heading3() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.5], [50, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);

  return (
    <div className='relative min-h-[200vh]' ref={ref}>
      <div className='h-screen py-24 sm:py-32'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='flex flex-col items-center justify-center'>
            <p className='text-sm text-zinc-500'>Scroll down</p>
          </div>
        </div>
      </div>

      <div className='mx-auto flex max-w-md items-center justify-center px-6 text-center lg:px-8'>
        <motion.div
          style={{
            opacity,
            y,
            scale,
          }}
        >
          <h2 className='mb-3 text-xl text-zinc-500 sm:text-2xl'>
            For builders
          </h2>
          <p className='text-2xl text-zinc-900 dark:text-zinc-50 sm:text-3xl'>
            A new way to get your products to the next level
          </p>
        </motion.div>
      </div>
    </div>
  );
}
