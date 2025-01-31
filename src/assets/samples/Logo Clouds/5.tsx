'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AppleMusic, A24, Pixar, Prada, Salomon, OpenAI, Sony, Strava } from '@/components/motion-ui-demo-icons/2';

export function LogoCloud5() {
    const [currentLogos, setCurrentLogos] = useState(LOGOS);

    useEffect(
        () => {
            const interval = setInterval(
                () => {
                    setCurrentLogos(
                        (prevLogos) => {
                            const newLogos = [...prevLogos];
                            const lastLogo = newLogos.pop()!;
                            return [lastLogo, ...newLogos];
                        }
                    );
                }, 4000
            );
            return () => clearInterval(interval);
        }, []
    );

    return (
        <div className='w-full py-24 sm:py-32'>
            <div className='mx-auto max-w-7xl px-6 lg:px-8'>
                <div className='grid w-full grid-cols-4 gap-x-4 gap-y-8'>
                    <AnimatePresence initial={false} mode='popLayout'>

                        {currentLogos.map((logo, index) => (
                            <motion.div
                                className='flex h-[100px] items-center justify-center'
                                initial={{ scale: 0.6, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.6, opacity: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                key={`${logo.name}-${index}`}
                            >
                                <logo.Component className='h-full w-[80px] text-black dark:text-white' />
                            </motion.div>
                        ))}

                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}

// import { AppleMusic } from './icons/apple-music';
// import { A24 } from './icons/a24';
// import { Pixar } from './icons/pixar';
// import { Prada } from './icons/prada';
// import { Salomon } from './icons/salomon';
// import { OpenAI } from './icons/openai';
// import { Sony } from './icons/sony';
// import { Strava } from './icons/strava';

const LOGOS = [
    { Component: AppleMusic, name: 'AppleMusic' },
    { Component: A24, name: 'A24' },
    { Component: Pixar, name: 'Pixar' },
    { Component: Prada, name: 'Prada' },
    { Component: Salomon, name: 'Salomon' },
    { Component: OpenAI, name: 'OpenAI' },
    { Component: Sony, name: 'Sony' },
    { Component: Strava, name: 'Strava' },
];
