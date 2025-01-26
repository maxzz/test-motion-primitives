'use client';
import {
  useScroll,
  useTransform,
  motion,
  useMotionTemplate,
} from 'motion/react';
import { useRef } from 'react';

export function Text3() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const percentage = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const text = 'A new way to build AI apps';

  return (
    <div className='relative h-[300vh]'>
      <div className='py-24 sm:py-32'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='flex flex-col items-center justify-center'>
            <p className='text-sm text-zinc-500'>Scroll down</p>
          </div>
        </div>
      </div>
      <div className='py-24 sm:py-32' ref={ref}>
        <div className='mx-auto max-w-xl px-6 lg:px-8'>
          <div className='flex flex-col items-center justify-center space-y-8'>
            <motion.h1
              className='bg-[linear-gradient(-60deg,rgba(0,0,0,0)33.3%,rgba(0,0,0,1)66.7%)] bg-[length:300%_100%] bg-clip-text text-4xl text-black [-webkit-text-fill-color:transparent] dark:bg-[linear-gradient(-60deg,rgba(255,255,255,0)33.3%,rgba(255,255,255,1)66.7%)] dark:text-white'
              style={{
                backgroundPositionX: useMotionTemplate`calc(100% - ${percentage}%)`,
              }}
            >
              {text}
            </motion.h1>
          </div>
        </div>
      </div>
    </div>
  );
}
