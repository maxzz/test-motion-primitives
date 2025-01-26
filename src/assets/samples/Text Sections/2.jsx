'use client';
import { useScroll, useTransform, motion } from 'motion/react';
import { useRef } from 'react';

export function Text2() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const createWordOpacity = (start: number, end: number) =>
    useTransform(scrollYProgress, [start, end], [0.3, 1]);

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
            {[
              'Effortless Creation: Transform ideas into stunning visuals with just a few words. Our AI understands context and nuance, bringing your imagination to life. Generate professional-quality visuals without complex software or design experience.',
              'Unparalleled Quality: Experience AI-generated images with breathtaking detail and clarity. Every pixel is crafted to perfection, rivaling the work of master artists. Create images indistinguishable from those made by human experts.',
              'Limitless Imagination: Explore infinite creative possibilities with cutting-edge AI. Our platform adapts to your needs, offering an ever-expanding universe of visual concepts. Push boundaries with genre-blending compositions and futuristic concepts.',
            ].map((text, index) => (
              <motion.div
                key={index}
                className='text-xl font-medium text-black dark:text-white'
              >
                {text.split(' ').map((word, wordIndex, array) => {
                  const start = index * 0.3 + (wordIndex / array.length) * 0.3;
                  const end = start + (1 / array.length) * 0.3;
                  return (
                    <motion.span
                      key={wordIndex}
                      style={{ opacity: createWordOpacity(start, end) }}
                      className='mr-1 inline-block'
                    >
                      {word}
                    </motion.span>
                  );
                })}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
