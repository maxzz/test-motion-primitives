'use client';
import { TextEffect } from "@/components/motion-ui/text-effect";

export function Heading5() {
    return (
        <div className='py-24 sm:py-32'>
            <div className='mx-auto max-w-7xl px-6 text-center lg:px-8'>

                <TextEffect
                    className='mb-4 text-3xl text-zinc-900 dark:text-white sm:text-4xl'
                    per='char'
                    variants={{
                        item: {
                            hidden: { opacity: 0, scale: 1.6, filter: 'blur(4px)', },
                            visible: { opacity: 1, scale: 1, filter: 'blur(0px)', },
                        },
                    }}
                    speedReveal={1}
                    speedSegment={0.5}
                >
                    The best AI for your design
                </TextEffect>

                <p className='text-lg text-zinc-500 dark:text-zinc-400'>
                    Improve your development process with beautiful crafted UI.
                </p>

            </div>
        </div>
    );
}
