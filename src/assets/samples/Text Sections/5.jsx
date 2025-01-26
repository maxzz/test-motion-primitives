'use client';
import {
  useScroll,
  useTransform,
  motion,
  useMotionTemplate,
} from 'motion/react';
import { useRef } from 'react';

export function Text5() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const createCharOpacity = (start: number, end: number) =>
    useTransform(scrollYProgress, [start, end], [0.2, 1]);

  const createBlurValue = (start: number, end: number) =>
    useTransform(scrollYProgress, [start, end], [4, 0]);

  const text =
    'Effortless Creation: Transform ideas into stunning visuals with just a few words. Our AI understands context and nuance, bringing your imagination to life. Generate professional-quality visuals without complex software or design experience.';

  return (
    <div className='relative h-[300vh]'>
      <div className='py-24 sm:py-32'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='flex flex-col items-center justify-center'>
            <p className='text-sm text-zinc-500'>Scroll down</p>
          </div>
        </div>
      </div>
      <div className='py-24 sm:py-32'>
        <div className='mx-auto max-w-xl px-6 lg:px-8'>
          <div className='flex flex-col items-center space-y-8' ref={ref}>
            <div className='text-xl font-medium text-black dark:text-white'>
              {text.split(' ').map((word, wordIndex, array) => {
                const start = Math.max(
                  0,
                  (wordIndex / array.length) * 0.6 - 0.1
                );
                const end = Math.min(0.9, start + 0.2);

                return (
                  <motion.span
                    key={wordIndex}
                    style={{
                      opacity: createCharOpacity(start, end),
                      filter: useMotionTemplate`blur(${createBlurValue(start, end)}px)`,
                    }}
                    className='inline-block whitespace-pre'
                  >
                    {word + ' '}
                  </motion.span>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
