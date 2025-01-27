'use client';
import { useScroll, useTransform, motion, MotionValue } from 'motion/react';
import { useRef } from 'react';

const getLeftPosition = (direction: string) => {
  switch (direction) {
    case 'left':
      return '-50%';
    case 'right':
      return '-20%';
    default:
      return '0%';
  }
};

export function Text15() {
  const container = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start'],
  });

  return (
    <main className='overflow-hidden'>
      <div className='h-[90vh]' />
      <div ref={container} className='flex flex-col space-y-10'>
        {['left', 'right', 'left'].map((direction, index) => (
          <ScrollSlide
            key={index}
            direction={direction}
            progress={scrollYProgress}
            left={getLeftPosition(direction)}
          />
        ))}
      </div>
      <div className='h-[90vh]' />
    </main>
  );
}

const ScrollSlide = ({
  direction,
  progress,
  left,
}: {
  direction: string;
  progress: MotionValue<number>;
  left: string;
}) => {
  const directionMultiplier = direction === 'left' ? -1 : 1;
  const translateX = useTransform(
    progress,
    [0, 1],
    [150 * directionMultiplier, -150 * directionMultiplier]
  );

  return (
    <motion.div
      style={{ x: translateX, left }}
      className='relative flex whitespace-nowrap'
    >
      {[...Array(3)].map((_, index) => (
        <div className='flex items-center gap-5 px-5' key={index}>
          <p className='text-4xl md:text-7xl'>Design + Engineering</p>
        </div>
      ))}
    </motion.div>
  );
};
