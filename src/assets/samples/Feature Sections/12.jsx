'use client';
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll } from 'motion/react';

const FEATURES = [
  {
    image:
      'https://images.beta.cosmos.so/9b3a88a7-692c-43b1-838a-96e555927db3.?format=jpeg',
    text: 'Advanced Natural Language Processing: Our AI-powered system understands context and nuance in human language, enabling more natural and effective communication. It can analyze sentiment, extract key information, and even generate human-like responses, revolutionizing customer service and content creation.',
  },
  {
    image:
      'https://images.beta.cosmos.so/0a343dca-372a-4494-9b8a-65cdea0831b2?format=jpeg',
    text: 'Predictive Analytics and Machine Learning: Harness the power of AI to forecast trends and make data-driven decisions. Our algorithms learn from historical data to predict future outcomes, optimize processes, and identify patterns that humans might miss, giving your business a competitive edge in rapidly changing markets.',
  },
  {
    image:
      'https://images.beta.cosmos.so/6bc5d3ba-1850-4e58-abf5-67eac6ed614d?format=jpeg',
    text: 'Computer Vision and Image Recognition: Unlock new possibilities with our state-of-the-art computer vision technology. From facial recognition and object detection to medical image analysis and autonomous vehicles, our AI can process and understand visual information with human-like accuracy, opening up countless applications across industries.',
  },
];

export function Feature12() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down');
  const containerRef = useRef(null);
  const { scrollY } = useScroll({ target: containerRef });

  useEffect(() => {
    let lastScrollY = 0;
    const unsubscribe = scrollY.on('change', (latest) => {
      const sectionHeight = window.innerHeight;
      const newIndex = Math.floor(latest / sectionHeight) % FEATURES.length;

      setScrollDirection(latest > lastScrollY ? 'down' : 'up');
      lastScrollY = latest;

      setActiveIndex(newIndex);
    });

    return () => unsubscribe();
  }, [scrollY]);

  return (
    <div
      className='relative h-[var(--section-height)]'
      style={
        {
          '--section-height': `${FEATURES.length * 100}vh`,
        } as React.CSSProperties
      }
    >
      <div className='sticky top-0 flex h-screen items-center justify-center'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div
            className='grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-16 lg:gap-32'
            ref={containerRef}
          >
            <AnimatePresence mode='wait'>
              <motion.div
                key={activeIndex}
                initial={{
                  opacity: 0,
                  y: scrollDirection === 'down' ? 20 : -20,
                }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: scrollDirection === 'down' ? -20 : 20 }}
                transition={{ duration: 0.15 }}
                className='h-[300px] w-full md:h-[400px] lg:h-[500px]'
              >
                <img
                  src={FEATURES[activeIndex].image}
                  alt='Feature'
                  className='h-full w-full rounded-lg object-cover'
                />
              </motion.div>
            </AnimatePresence>
            <AnimatePresence mode='wait'>
              <motion.div
                key={activeIndex}
                initial={{
                  opacity: 0,
                  y: scrollDirection === 'down' ? 20 : -20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{ opacity: 0, y: scrollDirection === 'down' ? -20 : 20 }}
                transition={{ duration: 0.15, delay: 0.1 }}
                className='flex items-center justify-center'
              >
                <div className='text-sm font-medium text-zinc-900 dark:text-white md:text-base lg:text-lg'>
                  {FEATURES[activeIndex].text}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
