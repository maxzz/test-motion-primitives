'use client';
// import { useState } from 'react';
// import { motion, AnimatePresence } from 'motion/react';

export function Team4() {
    return (
        <div className='py-24 sm:py-32'>
            <div className='mx-auto max-w-7xl px-6 lg:px-8'>
                <div className='flex justify-center -space-x-4'>
                    {SOCIAL_PROFILES.map(
                        (social, index) => {
                            return (
                                <div
                                    className='relative rounded-full border-2 border-zinc-50 bg-white transition-transform duration-200 ease-out hover:z-10 hover:scale-[1.2] dark:border-zinc-900 dark:bg-zinc-900'
                                    key={index}
                                >
                                    <img className='size-12 rounded-full' src={social.src} alt={social.name} key={index} />
                                </div>
                            );
                        }
                    )}
                </div>
            </div>
        </div>
    );
}

const SOCIAL_PROFILES = [
    {
        name: 'Jon Doe',
        src: '/avatars/1.png',
        job: 'Software Engineer',
    }, {
        name: 'Jane Doe',
        src: '/avatars/2.png',
        job: 'Product Manager',
    }, {
        name: 'Fly Doe',
        src: '/avatars/3.png',
        job: 'Designer',
    }, {
        name: 'Rich Doe',
        src: '/avatars/4.png',
        job: 'Data Scientist',
    }, {
        name: 'John Doe',
        src: '/avatars/5.png',
        job: 'Software Engineer',
    },
];
