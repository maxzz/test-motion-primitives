'use client';
import { useState } from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/motion-ui/accordion';
import { ChevronUp } from 'lucide-react';
import { cn } from "@/utils";

// images from https://www.cosmos.so/e/1861677771
const FEATURES = [
  {
    id: 'item1',
    title: 'Text-to-image generation',
    content:
      'Transform your ideas into stunning visuals with our advanced text-to-image AI. Simply describe what you want, and watch as our algorithm brings your imagination to life in high-resolution images.',
    image:
      'https://images.beta.cosmos.so/979ffbcb-0354-47d0-9301-a292f591528f?format=jpeg',
  },
  {
    id: 'item2',
    title: 'Style transfer & customization',
    content:
      'Apply and blend various artistic styles to your generated images. From renaissance to modern art, our AI can adapt your creations.',
    image:
      'https://images.beta.cosmos.so/613cf988-5f71-4e10-a208-9bf394874a61?format=jpeg',
  },
  {
    id: 'item3',
    title: 'Infinite resolution scaling',
    content:
      'Never worry about image quality again. Our AI can intelligently upscale your generated images to any resolution without loss of detail, ensuring your creations always look crisp and professional.',
    image:
      'https://images.beta.cosmos.so/6e8b6343-6f44-4636-8ee4-cabc222abb53?format=jpeg',
  },
];

export function Feature1() {
  const [activeAccordionId, setActiveAccordionId] = useState<string>(
    FEATURES[0].id
  );

  return (
    <div className='py-24 sm:py-32'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='flex flex-col lg:grid lg:grid-cols-2'>
          <div className='relative hidden h-auto lg:block'>
            <img
              src={
                FEATURES.find((item) => item.id === activeAccordionId)?.image
              }
              alt='Accordion Image'
              className='aspect-square h-full w-full object-cover'
            />
            <div className='absolute inset-0 bg-black opacity-20'></div>
          </div>
          <div className='p-0 sm:p-8 lg:p-16'>
            <Accordion
              onValueChange={(value) => {
                if (!value) return;
                setActiveAccordionId(value as string);
              }}
              expandedValue={activeAccordionId}
              className='flex flex-col divide-y divide-zinc-200 dark:divide-zinc-800'
            >
              {FEATURES.map((item) => (
                <AccordionItem key={item.id} value={item.id}>
                  <AccordionTrigger
                    className={cn(
                      'flex w-full items-center justify-between py-3.5',
                      item.id === activeAccordionId && 'cursor-default'
                    )}
                  >
                    <h3 className='text-left text-lg text-zinc-950 dark:text-zinc-50'>
                      {item.title}
                    </h3>
                    <ChevronUp className='size-4 text-zinc-950 transition-transform duration-200 group-data-[expanded]:-rotate-180 dark:text-zinc-50' />
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className='pb-6 text-left text-zinc-500 dark:text-zinc-400 lg:pb-8'>
                      {item.content}
                    </p>
                    <div className='pb-8 lg:hidden'>
                      <img
                        src={item.image}
                        alt={item.title}
                        className='h-64 w-full object-cover'
                      />
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}
