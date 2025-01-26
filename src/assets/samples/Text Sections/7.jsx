'use client';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export function Text7() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.div
      ref={ref}
      className='relative h-[300vh]'
      style={
        {
          '--opacity': opacity,
        } as React.CSSProperties
      }
    >
      <div className='sticky top-0 flex h-screen items-center justify-center'>
        <div className='mx-auto max-w-xl px-6 lg:px-8'>
          <div className='bg-[radial-gradient(50%_50%_at_50%_50%,theme(colors.purple.100),theme(colors.purple.500)_25%,transparent_50%)] bg-[length:300%_900%] bg-clip-text bg-[50%_calc(100%*var(--opacity))] text-xl font-medium text-transparent'>
            Effortless Creation: Transform ideas into stunning visuals with just
            a few words. Our AI understands context and nuance, bringing your
            imagination to life. Generate professional-quality visuals without
            complex software or design experience.
          </div>
        </div>
      </div>
    </motion.div>
  );
}
