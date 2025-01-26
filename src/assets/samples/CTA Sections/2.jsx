'use client';
import { ArrowRight } from 'lucide-react';
import { TextEffect } from '../motion-ui/text-effect';
import { useRef } from 'react';
import { useInView } from 'motion/react';

export function Cta2() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div className='py-24 sm:py-32' ref={ref}>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='relative flex flex-col items-start justify-between space-y-4 text-center md:flex-row md:items-center md:space-y-0'>
          <div className='flex flex-col space-y-2 text-left md:space-y-4'>
            <TextEffect
              className='text-3xl text-zinc-900 dark:text-white'
              as='h2'
              preset='blur'
              trigger={isInView}
              per='char'
            >
              Join the community
            </TextEffect>
            <p className='text-zinc-500 dark:text-zinc-400'>
              More than +1000 designers sharing their work.
            </p>
          </div>
          <div className='flex flex-row items-center space-x-4'>
            <a
              href='#'
              className='inline-flex items-center rounded-md bg-zinc-900 px-2.5 py-1.5 text-sm text-white transition-colors duration-300 hover:bg-zinc-700'
            >
              Join now
            </a>
            <a
              href='#'
              className='inline-flex items-center gap-1 rounded-md bg-transparent px-2.5 py-1.5 text-sm text-zinc-900 transition-colors duration-300 hover:bg-zinc-100 dark:text-white dark:hover:bg-zinc-800'
            >
              Learn More
              <ArrowRight className='h-4 w-4' />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
