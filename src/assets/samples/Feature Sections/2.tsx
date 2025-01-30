'use client';
import { useState } from 'react'; // images from https://www.cosmos.so/e/1861677771
import { cn } from "@/utils";

export function Feature2() {
    const [activeAccordionId, setActiveAccordionId] = useState<string>(FEATURES[0].id);
    return (
        <div className='py-24 sm:py-32'>
            <div className='mx-auto max-w-7xl px-6 lg:px-8'>

                <div className='flex flex-col lg:grid lg:grid-cols-2'>
                    <div className='p-0 sm:p-8 lg:p-16'>

                        <div className='mb-12 text-left'>
                            <h2 className='mb-4 text-3xl text-zinc-900 dark:text-white sm:text-4xl'>
                                Let AI generate your next product
                            </h2>
                            <p className='text-lg text-zinc-500 dark:text-zinc-400'>
                                Easy generate videos, images, and more with our model.
                            </p>
                        </div>

                        <div className='flex flex-col space-y-2'>
                            {FEATURES.map(
                                (item) => (
                                    <button
                                        className={cn('w-full rounded-lg p-3', activeAccordionId === item.id && 'bg-zinc-100 dark:bg-zinc-800')}
                                        type='button'
                                        key={item.id}
                                        onClick={() => setActiveAccordionId(item.id)}
                                    >
                                        <h3 className='text-left text-lg text-zinc-950 dark:text-zinc-50'>
                                            {item.title}
                                        </h3>

                                        <p className='text-left text-zinc-500 dark:text-zinc-400'>
                                            {item.content}
                                        </p>
                                    </button>
                                )
                            )}
                        </div>
                    </div>

                    <div className='relative h-auto lg:block'>
                        <img
                            className='aspect-square h-full w-full object-cover'
                            src={FEATURES.find((item) => item.id === activeAccordionId)?.image}
                            alt='Accordion Image'
                            key={activeAccordionId}
                        />
                        <div className='absolute inset-0 bg-black opacity-20' />
                    </div>
                </div>
                
            </div>
        </div>
    );
}

const FEATURES = [
    {
        id: 'item1',
        title: 'Text-to-image generation',
        content: 'Transform your ideas into stunning visuals with our advanced text-to-image AI.',
        image: 'https://images.beta.cosmos.so/979ffbcb-0354-47d0-9301-a292f591528f?format=jpeg',
    }, {
        id: 'item2',
        title: 'Style transfer & customization',
        content: 'Apply and blend various artistic styles to your generated images.',
        image: 'https://images.beta.cosmos.so/613cf988-5f71-4e10-a208-9bf394874a61?format=jpeg',
    }, {
        id: 'item3',
        title: 'Infinite resolution scaling',
        content: 'Never worry about image quality again. Our AI can intelligently upscale your generated images to any resolution without loss of detail.',
        image: 'https://images.beta.cosmos.so/6e8b6343-6f44-4636-8ee4-cabc222abb53?format=jpeg',
    },
];
