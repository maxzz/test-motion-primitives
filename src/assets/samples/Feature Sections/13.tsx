'use client';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll } from 'motion/react';

export function Feature13() {
    const containerRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end'],
    });

    useEffect(
        () => {
            const unsubscribe = scrollYProgress.on('change',
                (latest) => {
                    const newIndex = Math.floor(latest * FEATURES.length);
                    setActiveIndex(Math.min(Math.max(newIndex, 0), FEATURES.length - 1));
                }
            );
            return () => unsubscribe();
        }, [scrollYProgress]
    );

    return (
        <div className='relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>

            {/* Mobile layout */}
            <div className='md:hidden'>
                <div className='h-screen snap-y snap-mandatory overflow-y-auto py-24 sm:py-32'>
                    {FEATURES.map(
                        (feature, index) => (
                            <div className='mb-12 flex min-h-screen snap-center items-center' key={index}>
                                <div className='w-full'>
                                    <div className='mb-4 h-[200px] w-full'>
                                        <img
                                            className='h-full w-full rounded-lg object-cover'
                                            src={feature.image}
                                            alt={`Feature ${index + 1}`}
                                        />
                                    </div>
                                    <div className='text-sm font-medium text-zinc-900 dark:text-white'>
                                        {feature.text}
                                    </div>
                                </div>
                            </div>
                        )
                    )}
                </div>
            </div>

            {/* Desktop layout */}
            <div ref={containerRef} className='relative hidden grid-cols-1 gap-8 md:grid md:h-[300vh] md:grid-cols-2 md:gap-16 lg:gap-32'>
                <div className='w-full py-16'>
                    {FEATURES.map(
                        (feature, index) => (
                            <div className='flex h-screen items-center justify-center' key={index}>
                                <div className='text-base text-zinc-900 dark:text-white lg:text-lg'>
                                    {feature.text}
                                </div>
                            </div>
                        )
                    )}
                </div>
                <div className='sticky top-0 flex h-screen w-full items-center justify-center'>
                    <AnimatePresence mode='wait'>
                        <motion.div
                            className='h-[300px] w-full lg:h-[400px]'
                            initial={{ opacity: 0.6 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0.6 }}
                            transition={{ duration: 0.15 }}
                            key={activeIndex}
                        >
                            <img
                                className='h-full w-full rounded-lg object-cover'
                                src={FEATURES[activeIndex]?.image}
                                alt='Feature'
                            />
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

        </div>
    );
}

const FEATURES = [
    {
        image:
            'https://images.beta.cosmos.so/73046381-1709-4de0-9920-d75fbb8d2676?format=jpeg',
        text: 'Advanced Natural Language Processing: Our AI-powered system understands context and nuance in human language, enabling more natural and effective communication. It can analyze sentiment, extract key information, and even generate human-like responses, revolutionizing customer service and content creation.',
    }, {
        image:
            'https://images.beta.cosmos.so/9585854b-8c03-426e-b00b-76973349e53f?format=jpeg',
        text: 'Predictive Analytics and Machine Learning: Harness the power of AI to forecast trends and make data-driven decisions. Our algorithms learn from historical data to predict future outcomes, optimize processes, and identify patterns that humans might miss, giving your business a competitive edge in rapidly changing markets.',
    }, {
        image:
            'https://images.beta.cosmos.so/43992056-5e80-477e-9618-a3f5d58f3a64?format=jpeg',
        text: 'Computer Vision and Image Recognition: Unlock new possibilities with our state-of-the-art computer vision technology. From facial recognition and object detection to medical image analysis and autonomous vehicles, our AI can process and understand visual information with human-like accuracy, opening up countless applications across industries.',
    },
];
