'use client';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

const FEATURES = [
  {
    content: (
      <div className='text-xl font-medium text-black dark:text-white'>
        Effortless Creation: Transform ideas into stunning visuals with just a
        few words. Our AI understands context and nuance, bringing your
        imagination to life. Generate professional-quality visuals without
        complex software or design experience.
      </div>
    ),
  },
  {
    content: (
      <div className='text-xl font-medium text-black dark:text-white'>
        Unparalleled Quality: Experience AI-generated images with breathtaking
        detail and clarity. Every pixel is crafted to perfection, rivaling the
        work of master artists. Create images indistinguishable from those made
        by human experts.
      </div>
    ),
  },
  {
    content: (
      <div className='text-xl font-medium text-black dark:text-white'>
        Limitless Imagination: Explore infinite creative possibilities with
        cutting-edge AI. Our platform adapts to your needs, offering an
        ever-expanding universe of visual concepts. Push boundaries with
        genre-blending compositions and futuristic concepts.
      </div>
    ),
  },
];

export function Text1() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const opacities = [
    useTransform(scrollYProgress, [0, 0.3, 0.4, 0.5, 1], [0.3, 1, 1, 0.3, 0.3]),
    useTransform(
      scrollYProgress,
      [0.4, 0.5, 0.6, 0.7, 1],
      [0.3, 1, 1, 0.3, 0.3]
    ),
    useTransform(
      scrollYProgress,
      [0.6, 0.7, 0.8, 0.9, 1],
      [0.3, 1, 1, 0.3, 0.3]
    ),
  ];

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
            {FEATURES.map((feature, index) => (
              <motion.div
                key={index}
                style={{
                  opacity: opacities[index],
                }}
              >
                {feature.content}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
