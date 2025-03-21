'use client';
import { TextScramble } from "@/components/motion-ui/text-scramble";
import GitHubIcon from '@/components/motion-ui-demo-icons/github';
import XIcon from '@/components/motion-ui-demo-icons/x';
import { useState } from 'react';

export function Footer2() {
    const [trigger, setTrigger] = useState(true);

    const handleScrambleComplete = () => {
        setTimeout(() => { setTrigger(true); }, 4000);
        setTrigger(false);
    };

    return (
        <footer>
            <div className='mx-auto flex max-w-7xl flex-col justify-center px-6 py-12 md:flex-row md:justify-between md:px-8'>

                <TextScramble
                    className='text-sm text-zinc-500'
                    as='p'
                    trigger={trigger}
                    onScrambleComplete={handleScrambleComplete}
                >
                    {`� ${new Date().getFullYear()} Motion Primitives, Inc. All rights reserved.`}
                </TextScramble>

                <div className='order-first mb-4 flex items-center gap-x-6 md:order-none md:mb-0'>
                    <a href='#' className='fill-zinc-500 hover:fill-zinc-900 dark:fill-zinc-400 dark:hover:fill-zinc-100'>
                        <GitHubIcon className='size-4' />
                    </a>
                    <a href='#' className='fill-zinc-500 hover:fill-zinc-900 dark:fill-zinc-400 dark:hover:fill-zinc-100'>
                        <XIcon className='size-4' />
                    </a>
                </div>
                
            </div>
        </footer>
    );
}
