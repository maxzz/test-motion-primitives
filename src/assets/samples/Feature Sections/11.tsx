'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react'; // images from https://www.cosmos.so/e/469400162

export function Feature11() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });
  const scale = useTransform(scrollYProgress, [0, 0.25, 0.5], [3, 2.5, 1]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.2, 0.25], [1, 1, 0]);
  const maskOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.25],
    [0.5, 0.5, 0]
  );

  return (
    <div ref={containerRef} className='w-full'>
      <div className='py-24 sm:py-32'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='flex flex-col items-center justify-center'>
            <p className='text-sm text-zinc-500'>Scroll down</p>
          </div>
        </div>
      </div>
      <div className='flex h-[200vh] w-full flex-col items-center justify-start overflow-clip'>
        <motion.div
          style={{ opacity: textOpacity }}
          className='absolute z-10 flex h-screen flex-col items-center justify-center text-center text-5xl font-medium text-white'
        >
          <h1>AI-generated visuals at your fingertips.</h1>
          <p>Experience the future of imagery.</p>
        </motion.div>
        <div className='sticky top-0 flex h-screen w-full items-center justify-center'>
          <div className='relative'>
            <motion.img
              src='https://images.beta.cosmos.so/a7a791ac-d24a-43b9-a653-67a8557bec3f?format=jpeg'
              className='aspect-video w-full max-w-[400px] object-cover'
              style={{
                scale,
              }}
            />
            <motion.div
              style={{ opacity: maskOpacity, scale }}
              className='absolute inset-0 h-full w-full bg-black'
            />
          </div>
        </div>
      </div>
      <div className='h-screen bg-transparent' />
    </div>
  );
}
