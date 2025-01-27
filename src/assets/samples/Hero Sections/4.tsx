'use client';
import { ArrowRight } from 'lucide-react';
import { useTheme } from 'next-themes';
import { TextEffect } from '@/components/motion-ui/text-effect';
import { motion } from 'motion/react';

const BLUR_Y_VARIANT = {
  hidden: { opacity: 0, filter: 'blur(12px)', y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
  },
};

const TEXT_EFFECT_VARIANTS = (staggerTime: number) => ({
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerTime,
      },
    },
  },
  item: {
    hidden: BLUR_Y_VARIANT.hidden,
    visible: {
      ...BLUR_Y_VARIANT.visible,
      transition: { duration: 0.5 },
    },
  },
});

export function Hero4() {
  const theme = useTheme();

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
                  stroke-linecap='round'
                  stroke-width='3'
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

      <section className='py-28'>
        <div className='mx-auto max-w-screen-xl items-center justify-between gap-x-12 overflow-hidden text-gray-600 md:flex md:px-8'>
          <div className='flex-none space-y-5 px-4 sm:max-w-lg md:px-0 lg:max-w-xl'>
            <TextEffect
              className='text-balance text-5xl tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-6xl'
              as='h1'
              per='char'
              variants={TEXT_EFFECT_VARIANTS(0.03)}
            >
              {`Easiest way to build websites`}
            </TextEffect>
            <TextEffect
              className='mt-8 text-pretty text-lg text-zinc-500 dark:text-zinc-400 sm:text-lg/8'
              as='p'
              per='line'
              variants={TEXT_EFFECT_VARIANTS(0.2)}
              delay={0.9}
            >
              {`Sed ut perspiciatis unde omnis iste natus voluptatem accusantium
doloremque laudantium, totam rem aperiam, eaque ipsa quae.`}
            </TextEffect>
            <div className='flex items-center gap-x-6'>
              <motion.a
                variants={BLUR_Y_VARIANT}
                transition={{ duration: 0.5, delay: 1 }}
                initial='hidden'
                animate='visible'
                href='#'
                className='rounded-md bg-zinc-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-zinc-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-600 dark:bg-zinc-700 dark:hover:bg-zinc-600'
              >
                Start building
              </motion.a>
              <motion.a
                variants={BLUR_Y_VARIANT}
                transition={{ duration: 0.5, delay: 1.1 }}
                initial='hidden'
                animate='visible'
                href='#'
                className='inline-flex items-center gap-1 text-sm/6 font-semibold text-zinc-900 dark:text-zinc-200'
              >
                Watch the film <ArrowRight className='h-4 w-4' />
              </motion.a>
            </div>
          </div>
          <motion.div
            className='mt-10 flex-none p-8 md:mt-0 md:max-w-xl'
            variants={BLUR_Y_VARIANT}
            transition={{ duration: 0.5 }}
            initial='hidden'
            animate='visible'
          >
            <img
              src={theme.theme === 'dark' ? '/mp_dark.png' : '/mp_light.png'}
              alt='motion primitives'
              className='rounded-md shadow'
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
