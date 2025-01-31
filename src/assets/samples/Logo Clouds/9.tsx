import { AppleMusic, A24, Pixar, Prada, Salomon, OpenAI, Sony, Strava } from '@/components/motion-ui-demo-icons/2';
import { ArrowRightIcon } from 'lucide-react';

export function LogoCloud9() {
    return (
        <div className='py-24 sm:py-32'>
            <div className='mx-auto max-w-7xl px-6 lg:px-8'>
                <div className='grid grid-cols-2 gap-4 sm:grid-cols-3'>

                    {LINKS.map(
                        (link, index) => (
                            <a href={link.href} key={index} className='group relative h-32'>
                                <div className='absolute inset-0 flex items-center justify-center rounded-sm bg-zinc-50 p-2 text-center transition-all duration-200 group-hover:opacity-50 group-hover:blur-[10px] dark:bg-zinc-900'>
                                    <link.icon className='h-auto w-20 text-zinc-900 dark:text-white' />
                                </div>

                                <div className='absolute inset-0 flex items-center justify-center bg-transparent p-2 text-center'>
                                    <div className='inline-flex translate-y-4 items-center text-black opacity-0 transition-[transform,opacity] duration-200 group-hover:translate-y-0 group-hover:opacity-100 dark:text-white'>
                                        Visit Site
                                        <ArrowRightIcon className='ml-1' size={16} />
                                    </div>
                                </div>
                            </a>
                        )
                    )}

                </div>
            </div>
        </div>
    );
}

const LINKS = [
    { name: 'AppleMusic', /**/ icon: AppleMusic, /**/ href: '#', },
    { name: 'A24',        /**/ icon: A24,        /**/ href: '#', },
    { name: 'Pixar',      /**/ icon: Pixar,      /**/ href: '#', },
    { name: 'Prada',      /**/ icon: Prada,      /**/ href: '#', },
    { name: 'Salomon',    /**/ icon: Salomon,    /**/ href: '#', },
    { name: 'Sony',       /**/ icon: Sony,       /**/ href: '#', },
];

// import { AppleMusic } from './icons/apple-music';
// import { A24 } from './icons/a24';
// import { Pixar } from './icons/pixar';
// import { Prada } from './icons/prada';
// import { Salomon } from './icons/salomon';
// import { Sony } from './icons/sony';
