'use client';
import { ArrowRight } from 'lucide-react';
import { TextEffect } from '@/components/motion-ui/text-effect';
import { motion } from 'motion/react';

const ENTRY_VARIANTS = {
  hidden: {
    opacity: 0,
    y: 10,
    filter: 'blur(10px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
  },
};

export function Hero1() {
  return (
    <div className='relative bg-white dark:bg-zinc-900'>
      <header className='absolute inset-x-0 top-0 z-50'>
        <nav className='flex items-center justify-between p-6 lg:px-8'>
          <div className='flex lg:flex-1'>
            <a href='/docs' className='relative flex items-center'>
              <span className='sr-only'>Motion Primitives Pro</span>
              <svg
                role='img'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 70 70'
                aria-label='MP Logo'
                width='70'
                height='70'
                className='h-8 w-auto'
                fill='none'
              >
                <path
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeWidth='3'
                  d='M51.883 26.495c-7.277-4.124-18.08-7.004-26.519-7.425-2.357-.118-4.407-.244-6.364 1.06M59.642 51c-10.47-7.25-26.594-13.426-39.514-15.664-3.61-.625-6.744-1.202-9.991.263'
                ></path>
              </svg>
            </a>
          </div>
          <div className='hidden lg:flex lg:gap-x-12'>
            <a
              href='#'
              className='text-sm/6 font-medium text-zinc-900 dark:text-zinc-200'
            >
              Product
            </a>
            <a
              href='#'
              className='text-sm/6 font-medium text-zinc-900 dark:text-zinc-200'
            >
              Features
            </a>
            <a
              href='#'
              className='text-sm/6 font-medium text-zinc-900 dark:text-zinc-200'
            >
              Marketplace
            </a>
            <a
              href='#'
              className='text-sm/6 font-medium text-zinc-900 dark:text-zinc-200'
            >
              Company
            </a>
          </div>
          <div className='hidden lg:flex lg:flex-1 lg:justify-end'>
            <a
              href='#'
              className='inline-flex items-center gap-1 text-sm/6 font-medium text-zinc-900 dark:text-zinc-200 [&_svg]:pointer-events-none'
            >
              Log in <ArrowRight className='h-4 w-4' />
            </a>
          </div>
        </nav>
      </header>

      <div className='relative isolate px-6 pt-14 lg:px-8'>
        <div className='mx-auto max-w-2xl py-32 sm:py-48 lg:py-56'>
          <div className='hidden sm:mb-8 sm:flex sm:justify-center'>
            <motion.div
              className='relative rounded-full px-3 py-1 text-sm/6 text-zinc-600 ring-1 ring-zinc-900/10 hover:ring-zinc-900/20 dark:text-zinc-400 dark:ring-1 dark:ring-zinc-100/20 dark:hover:ring-zinc-100/20'
              variants={ENTRY_VARIANTS}
              initial='hidden'
              animate='visible'
              transition={{
                duration: 0.5,
                delay: 0.5,
                ease: 'easeOut',
              }}
            >
              Introducing a revolutionary way to build websites.{' '}
              <a
                href='#'
                className='inline-flex items-center gap-1 font-semibold text-zinc-600 dark:text-zinc-400'
              >
                <span className='absolute inset-0' aria-hidden='true'></span>
                Learn more <ArrowRight className='h-4 w-4' />
              </a>
            </motion.div>
          </div>
          <div className='text-center'>
            <TextEffect
              className='text-balance text-5xl tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-6xl'
              preset='fade-in-blur'
              as='h1'
              per='char'
              speedReveal={4}
              segmentTransition={{ duration: 0.5, ease: 'easeOut' }}
            >
              Build your dream website fast and easily
            </TextEffect>

            <TextEffect
              className='mt-8 text-pretty text-lg text-zinc-500 dark:text-zinc-300 sm:text-lg/8'
              preset='blur'
              as='p'
              per='line'
              delay={0.5}
              speedReveal={0.8}
              segmentTransition={{ duration: 0.5, ease: 'easeOut' }}
            >
              {`Create stunning, professional websites with unparalleled ease.
Leverage our intuitive tools and thoughtfully crafted components.`}
            </TextEffect>
            <div className='mt-10 flex items-center justify-center gap-x-6'>
              <motion.a
                href='#'
                className='rounded-md bg-zinc-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-zinc-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-600 dark:bg-zinc-700'
                variants={ENTRY_VARIANTS}
                initial='hidden'
                animate='visible'
                transition={{
                  duration: 0.5,
                  delay: 0.5,
                  ease: 'easeOut',
                }}
              >
                Start building
              </motion.a>
              <motion.a
                href='#'
                className='inline-flex items-center gap-1 text-sm/6 font-semibold text-zinc-900 dark:text-zinc-200'
                variants={ENTRY_VARIANTS}
                initial='hidden'
                animate='visible'
                transition={{
                  duration: 0.5,
                  delay: 0.6,
                  ease: 'easeOut',
                }}
              >
                Watch the film <ArrowRight className='h-4 w-4' />
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
