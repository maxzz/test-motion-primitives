'use client';
import React, { useState } from 'react';
import {AnimatedBackground} from "@/components/motion-ui/animated-background";

// images are from https://www.cosmos.so/ibelick/nocturne
function FeatureImg({ src, alt }: { src: string; alt: string }) {
  return (
    <img
      src={src}
      alt={alt}
      className='aspect-square h-[400px] w-full rounded-2xl bg-blue-200/50 object-cover'
    />
  );
}

const FEATURES = [
  {
    tab: 'Design',
    content: (
      <FeatureImg
        key='design'
        src='https://cdn.cosmos.so/8bb8b6e6-1658-4c42-bc5d-e8d17394bb01?format=jpeg'
        alt='Design'
      />
    ),
  },
  {
    tab: 'Engineering',
    content: (
      <FeatureImg
        key='engineering'
        src='https://cdn.cosmos.so/c50a75a4-b145-4044-9406-c89d5c326382?format=jpeg'
        alt='Engineering'
      />
    ),
  },
  {
    tab: 'AI',
    content: (
      <FeatureImg
        key='ai'
        src='https://cdn.cosmos.so/1437d5d6-52e0-465e-9dfd-c92352d7507e?format=jpeg'
        alt='AI'
      />
    ),
  },
  {
    tab: 'Marketing',
    content: (
      <FeatureImg
        key='marketing'
        src='https://cdn.cosmos.so/ed170ddf-b6f3-4865-a38e-1304c5197eeb?format=jpeg'
        alt='Marketing'
      />
    ),
  },
  {
    tab: 'Analytics',
    content: (
      <FeatureImg
        key='analytics'
        src='https://cdn.cosmos.so/6b1ae75e-af71-4349-8a24-a2f7945b371f?format=jpeg'
        alt='Analytics'
      />
    ),
  },
];

export function Feature8() {
  const [activeFeature, setActiveFeature] = useState<string>(FEATURES[0].tab);

  return (
    <div className='overflow-auto py-24 sm:overflow-hidden sm:py-32'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto mb-12 max-w-lg text-center'>
          <h2 className='text-3xl sm:text-4xl'>
            A new way to build AI apps, for developers and designers.
          </h2>
        </div>
        <div className='mb-8 overflow-x-auto [scrollbar-width:none]'>
          <div className='flex min-w-max items-center justify-center space-x-2'>
            <AnimatedBackground
              className='whitespace-nowrap rounded-full bg-zinc-200 dark:bg-zinc-800'
              transition={{
                ease: 'easeInOut',
                duration: 0.2,
              }}
              defaultValue={activeFeature}
              onValueChange={(newActiveId) => {
                setActiveFeature(newActiveId as string);
              }}
            >
              {FEATURES.map((feature, index) => (
                <button
                  key={index}
                  data-id={feature.tab}
                  type='button'
                  className='px-3 py-1.5 text-sm text-zinc-900 transition-colors duration-200 hover:text-zinc-950 dark:text-zinc-50 sm:px-4 sm:text-base'
                >
                  {feature.tab}
                </button>
              ))}
            </AnimatedBackground>
          </div>
        </div>
        {FEATURES.find((feature) => feature.tab === activeFeature)?.content}
      </div>
    </div>
  );
}
