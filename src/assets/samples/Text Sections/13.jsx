'use client';
import { InView } from '@/components/motion-ui/in-view';

const HighlightedText = ({ children }: { children: React.ReactNode }) => {
  return (
    <InView
      viewOptions={{
        once: true,
        margin: '0px 0px -100px 0px',
      }}
      variants={{
        visible: {
          backgroundPosition: '0% 0',
        },
        hidden: {
          backgroundPosition: '100% 0',
        },
      }}
      transition={{ duration: 0.5 }}
      className='inline-block bg-[linear-gradient(90deg,theme(colors.black)_50%,transparent_50%)] bg-[length:200%_100%] bg-clip-text text-transparent dark:bg-[linear-gradient(90deg,theme(colors.white)_50%,transparent_50%)]'
    >
      {children}
    </InView>
  );
};

export function Text13() {
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
        <div className='mx-auto max-w-xl px-6 lg:px-8'>
          <div className='flex flex-col items-center space-y-8'>
            <p className='text-xl text-zinc-500 dark:text-zinc-400'>
              Effortless Creation: Transform ideas into stunning visuals with
              just a few words.{' '}
              <HighlightedText>
                Our AI understands context and nuance
              </HighlightedText>
              , bringing your imagination to life. Generate professional-quality
              visuals without complex software or{' '}
              <HighlightedText>design experience</HighlightedText>.
            </p>
            <p className='text-xl text-zinc-500 dark:text-zinc-400'>
              Unparalleled Quality: Experience AI-generated images with
              breathtaking detail and clarity.{' '}
              <HighlightedText>
                Every pixel is crafted to perfection
              </HighlightedText>
              , rivaling the work of master artists. Create images
              indistinguishable from those made by human experts.
            </p>
            <p className='text-xl text-zinc-500 dark:text-zinc-400'>
              Limitless Imagination: Explore infinite creative possibilities
              with cutting-edge AI. Our platform adapts to your needs, offering
              an ever-expanding universe of visual concepts.{' '}
              <HighlightedText>
                Push boundaries with genre-blending compositions
              </HighlightedText>{' '}
              and futuristic concepts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
