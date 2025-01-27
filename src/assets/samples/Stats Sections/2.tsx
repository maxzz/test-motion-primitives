'use client';
import { AnimatedNumber } from '@/components/motion-ui/animated-number';
import { useEffect, useState } from 'react';

export function Stats2() {
  const [values, setValues] = useState([0, 0, 0]);

  useEffect(() => {
    setValues([120000, 11000, 300000]);
  }, []);

  return (
    <div className='relative mx-auto max-w-7xl px-8 py-24 md:px-12 lg:px-24'>
      <dl className='grid grid-cols-1 gap-x-6 gap-y-12 text-center sm:grid-cols-2 md:grid-cols-3'>
        <div className='flex flex-col'>
          <dt className='mt-1 text-zinc-500 dark:text-zinc-400'>
            Transactions processed
          </dt>
          <dd className='order-first text-5xl text-zinc-900 dark:text-white'>
            $
            <AnimatedNumber
              value={values[0]}
              springOptions={{ bounce: 0, duration: 2000 }}
            />
          </dd>
        </div>
        <div className='flex flex-col'>
          <dt className='mt-1 text-zinc-500 dark:text-zinc-400'>
            Users connected last month
          </dt>
          <dd className='order-first text-5xl text-zinc-900 dark:text-white'>
            <AnimatedNumber
              value={values[1]}
              springOptions={{ bounce: 0, duration: 2000 }}
            />
          </dd>
        </div>
        <div className='flex flex-col'>
          <dt className='mt-1 text-zinc-500 dark:text-zinc-400'>Total Views</dt>
          <dd className='order-first text-5xl text-zinc-900 dark:text-white'>
            <AnimatedNumber
              value={values[2]}
              springOptions={{ bounce: 0, duration: 2000 }}
            />
            +
          </dd>
        </div>
      </dl>
    </div>
  );
}
