'use client';
import { useState } from 'react';
import { Carousel, CarouselContent, CarouselItem, } from "@/components/motion-ui/carousel";
import { Link } from "@/ui";
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';

export function Feature4() {
    const [index, setIndex] = useState(0);
    return (
        <div className='py-24 sm:py-32'>

            <div className='container mx-auto mb-8 max-w-screen-lg px-4 md:mb-12'>
                <h2 className='mb-4 text-2xl font-medium text-zinc-900 dark:text-white md:text-4xl'>
                    Visualize your ideas instantly
                </h2>

                <div className='flex space-x-2'>
                    <button
                        type='button'
                        className='flex h-9 w-9 items-center justify-center rounded-full disabled:opacity-30'
                        aria-label='Previous slide'
                        disabled={index === 0}
                        onClick={() => setIndex(index - 1)}
                    >
                        <ChevronLeftIcon className='h-5 w-5' />
                    </button>
                    <button
                        type='button'
                        className='flex h-9 w-9 items-center justify-center rounded-full disabled:opacity-30'
                        aria-label='Next slide'
                        disabled={index === 5}
                        onClick={() => setIndex(index + 1)}
                    >
                        <ChevronRightIcon className='h-5 w-5' />
                    </button>
                </div>
            </div>

            <Carousel index={index} onIndexChange={setIndex} disableDrag>
                <CarouselContent className='-ml-2 pl-[max(16px,calc((100%-1024px)/2+16px))] md:-ml-5'>
                    {FEATURES.map(
                        (feature, index) => (
                        <CarouselItem className='basis-1/2 pl-2 md:basis-[22%] md:pl-5' key={index}>
                            <Link href='#' className='relative flex aspect-[3/4] items-center justify-center overflow-hidden rounded-md'>
                                <img className='pointer-events-none h-full w-full object-cover' src={feature.image} alt={feature.title} />
                                
                                <div className='absolute inset-0 bg-black opacity-50'></div>
                                <div className='absolute inset-0 flex flex-col justify-between p-4 text-white'>
                                    <p className='text-xs'>New top text</p>
                                    <p className='text-base'>New bottom text</p>
                                </div>
                            </Link>
                        </CarouselItem>
                    )
                    )}
                </CarouselContent>
            </Carousel>

        </div>
    );
}

const FEATURES = [
    {
        title: 'Feature 1',
        description: 'Description 1',
        image: 'https://images.beta.cosmos.so/a6d69ba1-ad19-4a77-864b-0f888ce93830?format=jpeg',
    }, {
        title: 'Feature 2',
        description: 'Description 2',
        image: 'https://images.beta.cosmos.so/9b3a88a7-692c-43b1-838a-96e555927db3.?format=jpeg',
    }, {
        title: 'Feature 3',
        description: 'Description 3',
        image: 'https://images.beta.cosmos.so/6bc5d3ba-1850-4e58-abf5-67eac6ed614d?format=jpeg',
    }, {
        title: 'Feature 4',
        description: 'Description 4',
        image: 'https://images.beta.cosmos.so/0a343dca-372a-4494-9b8a-65cdea0831b2?format=jpeg',
    }, {
        title: 'Feature 5',
        description: 'Description 5',
        image: 'https://images.beta.cosmos.so/a6d69ba1-ad19-4a77-864b-0f888ce93830?format=jpeg',
    }, {
        title: 'Feature 6',
        description: 'Description 6',
        image: 'https://images.beta.cosmos.so/9b3a88a7-692c-43b1-838a-96e555927db3.?format=jpeg',
    },
];
