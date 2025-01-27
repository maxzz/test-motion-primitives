'use client';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/motion-ui/carousel";
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import { useState } from 'react';
import { Link } from "@/ui";

const FEATURES = [
  {
    title: 'Feature 1',
    description: 'Description 1',
    image:
      'https://images.beta.cosmos.so/d7f8f87a-6b42-4b4c-b27a-196d57bf5d2d.?format=jpeg',
  },
  {
    title: 'Feature 2',
    description: 'Description 2',
    image:
      'https://images.beta.cosmos.so/3c2682dc-8174-45b1-abe8-a045f020e54b.?format=jpeg',
  },
  {
    title: 'Feature 3',
    description: 'Description 3',
    image:
      'https://images.beta.cosmos.so/53d4f8cd-abb4-4296-a411-14789cc00733?format=jpeg',
  },
  {
    title: 'Feature 4',
    description: 'Description 4',
    image:
      'https://images.beta.cosmos.so/2d3f5268-da08-4e48-abd9-6b003e419d2b.?format=jpeg',
  },
  {
    title: 'Feature 5',
    description: 'Description 5',
    image:
      'https://images.beta.cosmos.so/d7f8f87a-6b42-4b4c-b27a-196d57bf5d2d.?format=jpeg',
  },
  {
    title: 'Feature 6',
    description: 'Description 6',
    image:
      'https://images.beta.cosmos.so/3c2682dc-8174-45b1-abe8-a045f020e54b.?format=jpeg',
  },
];

export function Feature3() {
  const [index, setIndex] = useState(0);

  return (
    <div className='py-24 sm:py-32'>
      <div className='container mx-auto mb-8 max-w-screen-lg px-4 md:mb-12'>
        <h2 className='text-2xl font-medium text-zinc-900 dark:text-white md:text-4xl'>
          Visualize your ideas instantly
        </h2>
      </div>
      <Carousel
        index={index}
        onIndexChange={setIndex}
        className='pl-[max(16px,calc((100%-1024px)/2+16px))]'
        disableDrag
      >
        <CarouselContent
          className='-ml-2 md:-ml-8'
          transition={{
            type: 'spring',
            stiffness: 26.7,
            damping: 4.1,
            mass: 0.2,
          }}
        >
          {FEATURES.map((feature, index) => (
            <CarouselItem key={index} className='basis-1/4 pl-2 md:pl-8'>
              <Link
                href='#'
                className='relative flex aspect-[3/4] items-center justify-center overflow-hidden rounded-md'
              >
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
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className='container mx-auto mt-6 flex max-w-screen-lg items-end justify-end px-4'>
        <div className='flex gap-4'>
          <button
            type='button'
            className='flex h-9 w-9 items-center justify-center rounded-full bg-zinc-200 text-zinc-950 opacity-100 disabled:opacity-40'
            aria-label='Previous slide'
            disabled={index === 0}
            onClick={() => setIndex(index - 1)}
          >
            <ChevronLeftIcon className='h-5 w-5' />
          </button>
          <button
            type='button'
            className='flex h-9 w-9 items-center justify-center rounded-full bg-zinc-200 text-zinc-950 opacity-100 disabled:opacity-40'
            aria-label='Next slide'
            disabled={index === 5}
            onClick={() => setIndex(index + 1)}
          >
            <ChevronRightIcon className='h-5 w-5' />
          </button>
        </div>
      </div>
    </div>
  );
}
