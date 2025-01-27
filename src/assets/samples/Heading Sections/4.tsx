'use client';
import { TextRoll } from "@/components/motion-ui/text-roll";

export function Heading4() {
  return (
    <div className='py-24 sm:py-32'>
      <div className='mx-auto max-w-7xl px-6 text-center lg:px-8'>
        <h2 className='mb-4 text-3xl text-zinc-900 dark:text-white sm:text-4xl'>
          <span>AI-powered web templates</span>
          <br />
          <span>for</span>{' '}
          <TextRoll
            className='inline-flex overflow-clip leading-[0.75]'
            variants={{
              enter: {
                initial: { y: 0 },
                animate: { y: 40 },
              },
              exit: {
                initial: { y: -40 },
                animate: { y: 0 },
              },
            }}
            duration={0.3}
            getEnterDelay={(i) => i * 0.05}
            getExitDelay={(i) => i * 0.05 + 0.05}
            transition={{
              ease: [0.175, 0.885, 0.32, 1.1],
            }}
          >
            founders
          </TextRoll>
        </h2>
        <p className='text-lg text-zinc-500 dark:text-zinc-400'>
          Improve your development process with beautiful crafted UI.
        </p>
      </div>
    </div>
  );
}
