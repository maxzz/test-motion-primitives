'use client';
import { useRef, useState } from 'react';
import { useInView } from 'motion/react';
import { ArrowRightIcon } from 'lucide-react';
import { AnimatedNumber } from "@/components/motion-ui/animated-number";

export function Cta3() {
    const [value, setValue] = useState(0);
    const isInViewRef = useRef(null);
    const isInView = useInView(isInViewRef);

    if (isInView && value === 0) {
        setValue(10000);
    }

    return (
        <div ref={isInViewRef} className='mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6'>
            <div className='relative mx-auto max-w-screen-sm py-12 text-center'>

                <h2 className='mb-4 text-3xl text-zinc-900 dark:text-white'>
                    Join the community
                </h2>

                <p className='mb-6 text-zinc-500 dark:text-zinc-400'>
                    More than +{' '}

                    <AnimatedNumber value={value} springOptions={{ bounce: 0, duration: 2000 }} />

                    {' '}designers sharing their work.
                </p>

                <div className='flex items-center justify-center gap-4'>
                    <a href='#' className='inline-flex items-center rounded-md bg-zinc-900 px-2.5 py-1.5 text-sm text-white transition-colors duration-300 hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200'>
                        Join now
                    </a>
                    <a href='#' className='inline-flex items-center gap-1 rounded-md bg-transparent px-2.5 py-1.5 text-sm text-zinc-900 transition-colors duration-300 hover:bg-zinc-200 dark:text-zinc-50 dark:hover:bg-zinc-900'>
                        Learn more <ArrowRightIcon className='size-4' />
                    </a>
                </div>

            </div>
        </div>
    );
}
