'use client';
import { AnimatedNumber } from '@/components/motion-ui/animated-number';
import { useEffect, useState } from 'react';

export function Stats1() {
  const [values, setValues] = useState([0, 0, 0, 0]);

  useEffect(() => {
    setValues([25, 15, 80, 20]);
  }, []);

  return (
    <div className='relative mx-auto max-w-7xl px-8 py-24 md:px-12 lg:px-24'>
      <dl className='grid grid-cols-1 gap-x-6 gap-y-12 text-center sm:grid-cols-2 md:grid-cols-4'>
        <div className='flex flex-col'>
          <dt className='mt-1 text-base text-zinc-500 dark:text-zinc-400'>
            New users
          </dt>
          <dd className='order-first text-4xl font-normal text-zinc-900 dark:text-white'>
            <AnimatedNumber
              value={values[0]}
              springOptions={{ bounce: 0, duration: 2000 }}
            />
            %
          </dd>
        </div>
        <div className='flex flex-col'>
          <dt className='mt-1 text-base text-zinc-500 dark:text-zinc-400'>
            Low churn rate
          </dt>
          <dd className='order-first text-4xl font-normal text-zinc-900 dark:text-white'>
            <AnimatedNumber
              value={values[1]}
              springOptions={{ bounce: 0, duration: 2000 }}
            />
            %
          </dd>
        </div>
        <div className='flex flex-col'>
          <dt className='mt-1 text-base text-zinc-500 dark:text-zinc-400'>
            High satisfaction
          </dt>
          <dd className='order-first text-4xl font-normal text-zinc-900 dark:text-white'>
            <AnimatedNumber
              value={values[2]}
              springOptions={{ bounce: 0, duration: 2000 }}
            />
            %
          </dd>
        </div>
        <div className='flex flex-col'>
          <dt className='mt-1 text-base text-zinc-500 dark:text-zinc-400'>
            MRR
          </dt>
          <dd className='order-first text-4xl font-normal text-zinc-900 dark:text-white'>
            <AnimatedNumber
              value={values[3]}
              springOptions={{ bounce: 0, duration: 2000 }}
            />
            k$
          </dd>
        </div>
      </dl>
    </div>
  );
}
