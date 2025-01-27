'use client';

import AnimatedBackground from '@/components/motion-ui/animated-background';
import { cn } from '@/lib/utils';
import { motion } from 'motion/react';
import { useRef, useState, useEffect } from 'react';

const TABS = ['Home', 'About', 'Services', 'Contact'];

export function Navigation7() {
  const [activeTab, setActiveTab] = useState<(typeof TABS)[number]>(TABS[0]);
  const [offsetWidth, setOffsetWidth] = useState(0);
  const [offsetLeft, setOffsetLeft] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const index = TABS.indexOf(activeTab!);
    const button = containerRef.current?.children[index + 1] as HTMLElement;
    if (button) {
      const { offsetLeft, offsetWidth } = button;
      setOffsetLeft(offsetLeft);
      setOffsetWidth(offsetWidth);
    }
  }, [activeTab]);

  const handleSetActiveTab = (tab: (typeof TABS)[number]) => {
    setActiveTab(tab);
  };

  return (
    <div className='py-24 sm:py-32'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='flex justify-center'>
          <div
            className='relative flex max-w-full overflow-x-auto border-b border-zinc-200 dark:border-zinc-800'
            ref={containerRef}
          >
            <motion.div
              className='absolute bottom-0 h-0.5 bg-black dark:bg-white'
              layoutId='underline'
              animate={{
                x: offsetLeft,
                width: offsetWidth,
              }}
              transition={{
                type: 'spring',
                bounce: 0,
                duration: 0.2,
              }}
            />
            <AnimatedBackground
              className='top-1.5 h-8 rounded-lg bg-zinc-100 dark:bg-zinc-800'
              transition={{
                type: 'spring',
                bounce: 0,
                duration: 0.2,
              }}
              enableHover
            >
              {TABS.map((tab, index) => (
                <button
                  key={index}
                  data-id={tab}
                  type='button'
                  className={cn(
                    'px-3 py-4 text-sm/3 text-zinc-500 transition-colors duration-300 hover:text-black dark:text-zinc-400 dark:hover:text-zinc-50',
                    activeTab === tab && 'text-black dark:text-white'
                  )}
                  onClick={() => handleSetActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </AnimatedBackground>
          </div>
        </div>
      </div>
    </div>
  );
}
