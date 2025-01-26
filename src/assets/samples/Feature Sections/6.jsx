'use client';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/motion-ui/carousel';
import { cn } from '@/lib/utils';
import { useState } from 'react';

const FEATURES = [
  {
    title: 'Feature 1',
    description: 'Description 1',
    image:
      'https://images.beta.cosmos.so/a6d69ba1-ad19-4a77-864b-0f888ce93830?format=jpeg',
  },
  {
    title: 'Feature 2',
    description: 'Description 2',
    image:
      'https://images.beta.cosmos.so/9b3a88a7-692c-43b1-838a-96e555927db3.?format=jpeg',
  },
  {
    title: 'Feature 3',
    description: 'Description 3',
    image:
      'https://images.beta.cosmos.so/6bc5d3ba-1850-4e58-abf5-67eac6ed614d?format=jpeg',
  },
  {
    title: 'Feature 4',
    description: 'Description 4',
    image:
      'https://images.beta.cosmos.so/0a343dca-372a-4494-9b8a-65cdea0831b2?format=jpeg',
  },
  {
    title: 'Feature 5',
    description: 'Description 5',
    image:
      'https://images.beta.cosmos.so/a6d69ba1-ad19-4a77-864b-0f888ce93830?format=jpeg',
  },
  {
    title: 'Feature 6',
    description: 'Description 6',
    image:
      'https://images.beta.cosmos.so/9b3a88a7-692c-43b1-838a-96e555927db3.?format=jpeg',
  },
];

export function Feature6() {
  const [carouselIndex, setCarouselIndex] = useState(0);

  return (
    <div className='overflow-auto py-24 sm:overflow-hidden sm:py-32'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <h2 className='mb-12 text-center text-3xl text-zinc-900 dark:text-white sm:text-4xl'>
          Visualize your ideas instantly
        </h2>
        <div className='mb-8 overflow-x-auto [scrollbar-width:none]'>
          <div className='flex min-w-max items-center justify-center space-x-4'>
            {FEATURES.map((feature, index) => {
              return (
                <button
                  key={index}
                  type='button'
                  onClick={() => setCarouselIndex(index)}
                  className={cn(
                    'relative inline-flex rounded-sm bg-zinc-100 px-1.5 py-0.5 text-sm text-zinc-900 transition-colors duration-200 dark:bg-zinc-800 dark:text-zinc-50 sm:px-4 sm:text-base',
                    index === carouselIndex
                      ? 'bg-zinc-900 text-white dark:bg-zinc-50 dark:text-zinc-900'
                      : ''
                  )}
                >
                  {feature.title}
                </button>
              );
            })}
          </div>
        </div>
      </div>
      <Carousel
        index={carouselIndex}
        onIndexChange={setCarouselIndex}
        disableDrag
      >
        <CarouselContent
          className='w-full md:-ml-5'
          transition={{
            ease: [0.77, 0, 0.175, 1],
            duration: 1,
          }}
        >
          {FEATURES.map((feature, index) => (
            <CarouselItem
              key={index}
              className='flex items-center justify-center px-2'
            >
              <div className='relative flex aspect-video w-[800px] items-center justify-center overflow-hidden rounded-md'>
                <img
                  src={feature.image}
                  alt={feature.title}
                  className='pointer-events-none h-full w-full object-cover'
                />
                <div className='absolute inset-0 bg-black opacity-50'></div>
                <div className='absolute left-0 right-0 top-0 p-4 text-white'>
                  <p className='mb-0.5 text-xs'>{feature.description}</p>
                  <h3 className='text-base'>{feature.title}</h3>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
