'use client';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

const FEATURES = [
  {
    content: (
      <div className='text-xl font-medium text-zinc-500 dark:text-zinc-400'>
        Effortless Creation: Transform ideas into stunning visuals with just a
        few words.{' '}
        <span className='text-zinc-900 dark:text-white'>
          Our AI understands context and nuance, bringing your imagination to
          life
        </span>
        . Generate professional-quality visuals without complex software or
        design experience.
      </div>
    ),
  },
  {
    content: (
      <div className='text-xl font-medium text-zinc-500 dark:text-zinc-400'>
        Unparalleled Quality: Experience AI-generated images with breathtaking
        detail and clarity.{' '}
        <span className='text-zinc-900 dark:text-white'>
          Every pixel is crafted to perfection, rivaling the work of master
          artists
        </span>
        . Create images indistinguishable from those made by human experts.
      </div>
    ),
  },
  {
    content: (
      <div className='text-xl font-medium text-zinc-500 dark:text-zinc-400'>
        Limitless Imagination: Explore infinite creative possibilities with
        cutting-edge AI.{' '}
        <span className='text-zinc-900 dark:text-white'>
          Our platform adapts to your needs, offering an ever-expanding universe
          of visual concepts
        </span>
        . Push boundaries with genre-blending compositions and futuristic
        concepts.
      </div>
    ),
  },
];

export function Text9() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const opacities = [
    useTransform(scrollYProgress, [0.2, 0.25, 1], [0, 1, 1]),
    useTransform(scrollYProgress, [0.25, 0.3, 1], [0, 1, 1]),
    useTransform(scrollYProgress, [0.3, 0.35, 1], [0, 1, 1]),
  ];

  const yTransforms = [
    useTransform(scrollYProgress, [0.2, 0.25, 1], [10, 0, 0]),
    useTransform(scrollYProgress, [0.25, 0.3, 1], [10, 0, 0]),
    useTransform(scrollYProgress, [0.3, 0.35, 1], [10, 0, 0]),
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
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='grid grid-cols-1 gap-12 lg:grid-cols-3' ref={ref}>
            {FEATURES.map((feature, index) => (
              <motion.div
                key={index}
                style={{
                  opacity: opacities[index],
                  y: yTransforms[index],
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
