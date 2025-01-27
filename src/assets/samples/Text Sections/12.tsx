'use client';
import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
} from 'motion/react';
import React, { useRef } from 'react';

export function Text12() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const createCharOpacity = (start: number, end: number) =>
    useTransform(scrollYProgress, [start, end], [0, 1]);

  const createCharY = (start: number, end: number) =>
    useTransform(scrollYProgress, [start, end], [0, 4]);

  const createBlurValue = (start: number, end: number) =>
    useTransform(scrollYProgress, [start, end], [6, 0]);

  const text = 'Introducing a new way to craft beautiful websites, faster';

  return (
    <div className='relative h-[300vh] w-full'>
      <div className='py-24 sm:py-32'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='flex flex-col items-center justify-center'>
            <p className='text-sm text-zinc-500'>Scroll down</p>
          </div>
        </div>
      </div>
      <div className='py-24 sm:py-32'>
        <div className='mx-auto max-w-2xl px-6 lg:px-8'>
          <div className='flex flex-col items-center space-y-8' ref={ref}>
            <h1 className='text-center text-4xl font-normal text-zinc-900 dark:text-white'>
              {text.split(' ').map((word, wordIndex, wordArray) => (
                <span
                  key={wordIndex}
                  className='inline-block whitespace-nowrap'
                >
                  {word.split('').map((char, charIndex, charArray) => {
                    const overallIndex = text.indexOf(word) + charIndex;
                    const start = Math.max(
                      0,
                      (overallIndex / text.length) * 0.9
                    );
                    const end = Math.min(0.9, start + 0.2);

                    const isLastChar = charIndex === charArray.length - 1;
                    const isLastWord = wordIndex === wordArray.length - 1;

                    return (
                      <motion.span
                        key={charIndex}
                        style={{
                          opacity: createCharOpacity(start, end),
                          y: createCharY(start, end),
                          filter: useMotionTemplate`blur(${createBlurValue(start, end)}px)`,
                        }}
                        className='inline-block'
                      >
                        {char}
                        {isLastChar && !isLastWord && '\u00A0'}
                      </motion.span>
                    );
                  })}
                </span>
              ))}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
