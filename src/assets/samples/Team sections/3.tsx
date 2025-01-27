'use client';
import { useRef, useState } from 'react';
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from 'motion/react';
import { cn } from "@/utils";

const SOCIAL_PROFILES = [
  {
    name: 'John Doe',
    src: '/avatars/1.png',
    job: 'Software Engineer',
  },
  {
    name: 'Jane Smith',
    src: '/avatars/2.png',
    job: 'Design Engineer',
  },
  {
    name: 'Fiona Doe',
    src: '/avatars/3.png',
    job: 'Designer',
  },
  {
    name: 'Richard Roe',
    src: '/avatars/4.png',
    job: 'Data Scientist',
  },
];

const ICON_SIZE = 80;
const SPRING_CONFIG = {
  stiffness: 150,
  damping: 19,
  mass: 1.2,
};

export function Team3() {
  const [socialHovered, setSocialHovered] = useState<string | null>(null);

  return (
    <div className='py-24 sm:py-32'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='flex flex-col items-center justify-center sm:flex-row'>
          {SOCIAL_PROFILES.map((social, index) => {
            const containerRef = useRef<HTMLDivElement>(null);
            const cursorX = useMotionValue(0);
            const springCursorX = useSpring(cursorX, SPRING_CONFIG);
            const rect = containerRef.current?.getBoundingClientRect();

            const trackXPosition = (e: React.MouseEvent<HTMLDivElement>) => {
              if (!rect) {
                return;
              }

              const x = e.clientX - rect.left - ICON_SIZE / 2;
              cursorX.set(x);
            };

            return (
              <div
                className={cn(
                  `relative flex cursor-pointer flex-col items-center justify-center px-6 py-6 text-center transition-opacity duration-200 sm:py-2`,
                  socialHovered && socialHovered !== social.name
                    ? 'opacity-40'
                    : 'opacity-100'
                )}
                key={index}
                onMouseEnter={() => {
                  setSocialHovered(social.name);
                }}
                onMouseLeave={() => {
                  setSocialHovered(null);
                }}
                onMouseMove={trackXPosition}
                ref={containerRef}
              >
                <span className='text-lg text-zinc-900 dark:text-white'>
                  {social.name}
                </span>
                <span className='text-sm text-zinc-500 dark:text-zinc-400'>
                  {social.job}
                </span>
                <AnimatePresence initial={false}>
                  {socialHovered === social.name && (
                    <motion.div
                      key={social.name}
                      className='pointer-events-none absolute bottom-0 left-0 z-10 sm:pointer-events-auto'
                      initial={{
                        y: -55,
                        opacity: 0,
                        filter: 'blur(10px)',
                      }}
                      animate={{
                        y: -65,
                        opacity: 1,
                        filter: 'blur(0px)',
                      }}
                      exit={{
                        y: -55,
                        opacity: 0,
                        filter: 'blur(10px)',
                      }}
                      style={{
                        x: springCursorX,
                      }}
                      transition={SPRING_CONFIG}
                    >
                      <img
                        src={social.src}
                        alt={social.name}
                        className='rounded-[4px]'
                        style={{ width: ICON_SIZE, height: ICON_SIZE }}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
