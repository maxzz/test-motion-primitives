import { AppleMusic } from './icons/apple-music';
import { A24 } from './icons/a24';
import { Pixar } from './icons/pixar';
import { Prada } from './icons/prada';
import { Salomon } from './icons/salomon';
import { Sony } from './icons/sony';
import { ArrowRight } from 'lucide-react';

const ICONS = [
  {
    name: 'AppleMusic',
    icon: AppleMusic,
    href: '#',
  },
  {
    name: 'A24',
    icon: A24,
    href: '#',
  },
  {
    name: 'Pixar',
    icon: Pixar,
    href: '#',
  },
  {
    name: 'Prada',
    icon: Prada,
    href: '#',
  },
  {
    name: 'Salomon',
    icon: Salomon,
    href: '#',
  },
  {
    name: 'Sony',
    icon: Sony,
    href: '#',
  },
];

export function LogoCloud10() {
  return (
    <div className='py-24 sm:py-32'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <a
          className='group relative grid grid-cols-2 gap-4 sm:grid-cols-3'
          href='#'
        >
          {ICONS.map((icon, index) => (
            <div key={index} className='group relative h-32'>
              <div className='absolute inset-0 flex items-center justify-center rounded-sm bg-zinc-50 p-2 text-center transition-all duration-200 dark:bg-zinc-900'>
                <icon.icon className='h-auto w-20 text-zinc-900 dark:text-white' />
              </div>
            </div>
          ))}
          <div className='absolute inset-0 flex items-center justify-center bg-transparent p-2 text-center'>
            <div className='absolute inset-0 bg-white bg-opacity-0 backdrop-blur-[0px] transition-all duration-200 group-hover:bg-opacity-50 group-hover:backdrop-blur-[4px] dark:bg-black dark:bg-opacity-0' />
            <div className='inline-flex translate-y-2 scale-[0.95] items-center font-medium text-black opacity-0 transition-[transform,opacity] duration-200 group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100 dark:text-white'>
              Show case study <ArrowRight className='ml-1' size={16} />
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
