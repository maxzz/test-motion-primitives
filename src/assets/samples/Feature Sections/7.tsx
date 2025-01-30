'use client';
import { useState } from 'react';
import { TransitionPanel } from "@/components/motion-ui/transition-panel";
import { cn } from "@/utils";

export function Feature7() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [direction, setDirection] = useState(1);
    return (
        <div className='overflow-auto py-24 sm:overflow-hidden sm:py-32'>

            <div className='mx-auto max-w-7xl px-6 lg:px-8'>
                <h2 className='mb-12 text-center text-3xl text-zinc-900 dark:text-white sm:text-4xl'>
                    Visualize your ideas instantly
                </h2>
                
                <div className='mb-8 overflow-x-auto [scrollbar-width:none]'>
                    <div className='flex min-w-max items-center justify-center space-x-4'>
                        {FEATURES.map(
                            (feature, index) => {
                                return (
                                    <button
                                        className={cn(
                                            'relative inline-flex rounded-sm bg-zinc-100 px-1.5 py-0.5 text-sm text-zinc-900 transition-colors duration-200 dark:bg-zinc-800 dark:text-zinc-50 sm:px-4 sm:text-base',
                                            index === activeIndex
                                                ? 'bg-zinc-900 text-white dark:bg-zinc-50 dark:text-zinc-900'
                                                : ''
                                        )}
                                        key={index}
                                        type='button'
                                        onClick={() => { setActiveIndex(index); setDirection(index > activeIndex ? 1 : -1); }}
                                    >
                                        {feature.title}
                                    </button>
                                );
                            }
                        )}
                    </div>
                </div>
            </div>

            <div className='flex justify-center'>
                <TransitionPanel
                    className='aspect-video w-[800px] overflow-hidden rounded-md border border-zinc-200 dark:border-zinc-800'
                    activeIndex={activeIndex}
                    custom={direction}
                    variants={{
                        enter: (direction) => ({ opacity: 0.8, x: direction > 0 ? 32 : -32, }),
                        center: { opacity: 1, x: 0, },
                        exit: (direction) => ({ opacity: 0.8, x: direction < 0 ? 32 : -32, }),
                    }}
                    transition={{ ease: 'easeOut', duration: 0.3, }}
                >
                    {FEATURES.map(
                        (feature) => (
                            <div className='relative flex aspect-video w-[800px] items-center justify-center overflow-hidden rounded-md' key={feature.title}>
                                <img className='pointer-events-none h-full w-full object-cover' src={feature.image} alt={feature.title} />
                            </div>
                        )
                    )}
                </TransitionPanel>
            </div>
        </div>
    );
}

const FEATURES = [
    {
        title: 'Feature 1',
        description: 'Description 1',
        image: 'https://images.beta.cosmos.so/a6d69ba1-ad19-4a77-864b-0f888ce93830?format=jpeg',
    }, {
        title: 'Feature 2',
        description: 'Description 2',
        image: 'https://images.beta.cosmos.so/9b3a88a7-692c-43b1-838a-96e555927db3.?format=jpeg',
    }, {
        title: 'Feature 3',
        description: 'Description 3',
        image: 'https://images.beta.cosmos.so/6bc5d3ba-1850-4e58-abf5-67eac6ed614d?format=jpeg',
    }, {
        title: 'Feature 4',
        description: 'Description 4',
        image: 'https://images.beta.cosmos.so/0a343dca-372a-4494-9b8a-65cdea0831b2?format=jpeg',
    }, {
        title: 'Feature 5',
        description: 'Description 5',
        image: 'https://images.beta.cosmos.so/a6d69ba1-ad19-4a77-864b-0f888ce93830?format=jpeg',
    }, {
        title: 'Feature 6',
        description: 'Description 6',
        image: 'https://images.beta.cosmos.so/9b3a88a7-692c-43b1-838a-96e555927db3.?format=jpeg',
    },
];
