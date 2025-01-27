'use client';
import {
  Disclosure,
  DisclosureTrigger,
  DisclosureContent,
} from '@/components/motion-ui/disclosure';
import { motion } from 'framer-motion';
import { useState } from 'react';

const TRANSITION = {
  ease: [0.075, 0.82, 0.165, 1],
  duration: 0.25,
};

export function Text14() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className='py-24 sm:py-32'>
      <div className='mx-auto max-w-xl px-6 lg:px-8'>
        <div className='relative'>
          <motion.p
            className='text-xl text-zinc-500 dark:text-zinc-400'
            initial={{
              maskImage:
                'linear-gradient(to top,#000,#000,transparent 0,#000 200px)',
            }}
            animate={{
              maskImage: !toggle
                ? 'linear-gradient(to top,#000,#000,transparent 0,#000 200px)'
                : 'linear-gradient(to top,#000,#000,transparent 0,#000 0px)',
            }}
            transition={{
              ...TRANSITION,
              duration: toggle
                ? TRANSITION.duration / 2
                : TRANSITION.duration * 2,
            }}
          >
            Unparalleled Quality: Experience AI-generated images with
            breathtaking detail and clarity. Every pixel is crafted to
            perfection , rivaling the work of master artists. Create images
            indistinguishable from those made by human experts.
          </motion.p>
          <Disclosure transition={TRANSITION} onOpenChange={setToggle}>
            <DisclosureContent>
              <div className='flex flex-col items-start space-y-8'>
                <p className='pt-8 text-xl text-zinc-500 dark:text-zinc-400'>
                  Limitless Imagination: Explore infinite creative possibilities
                  with cutting-edge AI. Our platform adapts to your needs,
                  offering an ever-expanding universe of visual concepts. Push
                  boundaries with genre-blending compositions and futuristic
                  concepts.
                </p>
                <p className='text-xl text-zinc-500 dark:text-zinc-400'>
                  Effortless Creation: Transform ideas into stunning visuals
                  with just a few words. Our AI understands context and nuance ,
                  bringing your imagination to life. Generate
                  professional-quality visuals without complex software or
                  design experience
                </p>
              </div>
            </DisclosureContent>
            <DisclosureTrigger>
              <button
                className='mt-4 w-full py-2 text-left text-xl text-black dark:text-white'
                type='button'
              >
                {toggle ? 'Show less' : 'Show more'}
              </button>
            </DisclosureTrigger>
          </Disclosure>
        </div>
      </div>
    </div>
  );
}
