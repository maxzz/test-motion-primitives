import { InfiniteSlider } from '@/components/motion-ui/infinite-slider';

import { AppleMusic, A24, Pixar, Prada, Salomon, OpenAI, Sony, Strava } from '@/components/motion-ui-demo-icons/2';
// import { AppleMusic } from './icons/apple-music';
// import { A24 } from './icons/a24';
// import { Pixar } from './icons/pixar';
// import { Prada } from './icons/prada';
// import { Salomon } from './icons/salomon';
// import { OpenAI } from './icons/openai';
// import { Sony } from './icons/sony';
// import { Strava } from './icons/strava';

const LOGOS = [
  { Component: AppleMusic, name: 'AppleMusic' },
  { Component: A24, name: 'A24' },
  { Component: Pixar, name: 'Pixar' },
  { Component: Prada, name: 'Prada' },
  { Component: Salomon, name: 'Salomon' },
  { Component: OpenAI, name: 'OpenAI' },
  { Component: Sony, name: 'Sony' },
  { Component: Strava, name: 'Strava' },
];

export function LogoCloud6() {
  return (
    <div className='py-24 sm:py-32'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div
          className='flex w-full overflow-x-hidden [mask-image:linear-gradient(to_right,#000,#000,transparent_0,#000_var(--shadow-size),#000_calc(100%_-_var(--shadow-size)),transparent)]'
          style={
            {
              '--shadow-size': '200px',
            } as React.CSSProperties
          }
        >
          <InfiniteSlider gap={120}>
            {LOGOS.map((logo) => (
              <logo.Component
                className='h-full w-full max-w-[80px] text-black dark:text-white'
                key={logo.name}
              />
            ))}
          </InfiniteSlider>
        </div>
      </div>
    </div>
  );
}
