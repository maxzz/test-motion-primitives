'use client';
import { ArrowRight } from 'lucide-react';
import { Tilt } from "@/components/motion-ui/tilt";
import { useTheme } from 'next-themes';

export function Hero3() {
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
              Log in <ArrowRight className='size-4' />
            </a>
          </div>
        </nav>
      </header>

      <div className='relative isolate px-6 pt-14 lg:px-8'>
        <div className='mx-auto max-w-2xl py-24 sm:py-32'>
          <div className='text-center'>
            <h1 className='text-balance text-5xl tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-6xl'>
              Build your dream website fast and easily
            </h1>
            <p className='mt-8 text-pretty text-lg text-zinc-500 dark:text-zinc-400 sm:text-lg/8'>
              Build beautiful websites effortlessly. Use our templates and
              components to convert ideas into reality.
            </p>
            <div className='mt-10 flex items-center justify-center gap-x-6'>
              <a
                href='#'
                className='rounded-md bg-zinc-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-zinc-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-600 dark:bg-zinc-700 dark:hover:bg-zinc-600'
              >
                Start building
              </a>
              <a
                href='#'
                className='inline-flex items-center gap-1 text-sm/6 font-semibold text-zinc-900 dark:text-zinc-200'
              >
                Watch the film <ArrowRight className='size-4' />
              </a>
            </div>
          </div>
          <div className='mt-16'>
            <Tilt
              className='relative'
              rotationFactor={6}
              springOptions={{
                stiffness: 150,
                damping: 19,
                mass: 1.2,
              }}
              isRevese={true}
            >
              <div className='mx-auto mt-4 max-w-screen-lg px-3 [mask-image:linear-gradient(to_bottom,black_60%,transparent)]'>
                <div className='relative aspect-[2/1] w-full overflow-hidden rounded-lg border border-zinc-200 dark:border-zinc-900'>
                  <img
                    src={
                      theme.theme === 'dark' ? '/mp_dark.png' : '/mp_light.png'
                    }
                    alt='motion primitives'
                  />
                </div>
              </div>
            </Tilt>
          </div>
        </div>
      </div>
    </div>
  );
}
