'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react'; // image from https://www.cosmos.so/e/1909697047
import { PlayIcon } from 'lucide-react';

export function Feature9() {
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start'],
    });
    const scale = useTransform(scrollYProgress, [0, 1], [0.85, 1]);

    return (
        <div className='relative min-h-[200vh]' ref={containerRef}>

            <div className='h-screen py-24 sm:py-32'>
                <div className='mx-auto max-w-7xl px-6 lg:px-8'>
                    <div className='flex flex-col items-center justify-center'>
                        <p className='text-sm text-zinc-500'>
                            Scroll down
                        </p>
                    </div>
                </div>
            </div>

            <div className='mx-auto max-w-7xl px-6 lg:px-8'>
                
                <div className='mb-12 text-center'>
                    <h2 className='mb-4 text-3xl text-zinc-900 dark:text-white sm:text-4xl'>
                        Let AI generate your next product
                    </h2>
                    <p className='text-lg text-zinc-500 dark:text-zinc-400'>
                        Easy generate videos, images, and more with our model.
                    </p>
                </div>

                <motion.div className='aspect-video w-full origin-top overflow-hidden rounded-3xl' style={{ scale }}>
                    <div className='relative aspect-video w-full'>
                        <div className='absolute inset-0 bg-zinc-950/80' />

                        <button className='absolute inset-0 m-auto flex h-16 w-16 items-center justify-center rounded-full transition-colors hover:bg-zinc-950/80'>
                            <PlayIcon className='h-8 w-8 text-white' />
                        </button>

                        <img
                            className='aspect-video w-full object-cover'
                            src='https://images.beta.cosmos.so/75a0de47-2136-4c2b-b1e8-3e31a0ac2b5a?format=jpeg'
                            alt='Mountains'
                        />
                    </div>
                </motion.div>
            </div>

        </div>
    );
}
