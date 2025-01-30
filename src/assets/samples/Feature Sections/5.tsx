'use client';
import { useState } from 'react';
import { Carousel, CarouselContent, CarouselItem, } from "@/components/motion-ui/carousel";
import { AnimatedBackground } from "@/components/motion-ui/animated-background";

export function Feature5() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [activeFeature, setActiveFeature] = useState(FEATURES[0].tab);

    const handleFeatureChange = (newActiveId: string) => {
        setActiveFeature(newActiveId);
        const newIndex = FEATURES.findIndex((feature) => feature.tab === newActiveId);
        if (newIndex !== -1) {
            setActiveIndex(newIndex);
        }
    };

    return (
        <div className='py-24 sm:py-32'>

            <div className='mx-auto mb-12 max-w-7xl px-6 text-center lg:px-8'>
                <h2 className='text-3xl text-zinc-900 dark:text-white sm:text-4xl'>
                    Visualize your ideas instantly
                </h2>
            </div>

            <div className='relative w-full overflow-hidden'>
                <div>
                    <Carousel index={activeIndex} onIndexChange={setActiveIndex} disableDrag>

                        <CarouselContent className='ml-0 md:ml-[calc((100%-64rem)/2)]'>
                            {FEATURES.map((feature, idx) => (
                                <CarouselItem
                                    key={idx}
                                    className='basis-[52%] px-4 pl-0 md:px-0 md:pl-4'
                                >
                                    <div className='relative flex h-[200px] items-center justify-center overflow-hidden rounded-md md:h-[400px]'>
                                        <img className='pointer-events-none h-full w-full object-cover' src={feature.image} alt={feature.title} />

                                        <div className='absolute inset-0 bg-black opacity-50'></div>
                                        <div className='absolute inset-0 flex flex-col justify-between p-4 text-white'>
                                            <p className='text-xs sm:text-sm'>{feature.title}</p>
                                            <p className='text-sm sm:text-base'>{feature.description}</p>
                                        </div>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>

                        <div className='mx-auto mb-12 max-w-7xl overflow-x-auto px-6 text-center [scrollbar-width:none] lg:px-8'>
                            <div className='mt-6 flex min-w-max items-center justify-center sm:mt-10'>
                                <div className='z-0 flex flex-wrap justify-center space-x-2 rounded-full bg-zinc-200 px-2 py-2 dark:bg-zinc-800'>

                                    <AnimatedBackground
                                        className='whitespace-nowrap rounded-full bg-zinc-900'
                                        transition={{ ease: 'easeInOut', duration: 0.2, }}
                                        defaultValue={activeFeature}
                                        onValueChange={(newActiveId) => { handleFeatureChange(newActiveId as string); }}
                                    >
                                        {FEATURES.map(
                                            (feature, index) => (
                                                <button
                                                    className='px-2 py-1 text-xs text-zinc-600 transition-colors duration-300 hover:text-zinc-950 data-[checked=true]:text-zinc-100 dark:text-zinc-200 sm:px-3 sm:py-1.5 sm:text-sm md:px-4 md:text-base'
                                                    data-id={feature.tab}
                                                    type='button'
                                                    key={index}
                                                >
                                                    {feature.tab}
                                                </button>
                                            )
                                        )}
                                    </AnimatedBackground>

                                </div>
                            </div>
                        </div>

                    </Carousel>
                </div>
            </div>

        </div>
    );
}

const FEATURES = [
    {
        tab: 'Feature 1',
        title: 'Feature 1',
        description: 'Description 1',
        image: 'https://images.beta.cosmos.so/a6d69ba1-ad19-4a77-864b-0f888ce93830?format=jpeg',
    }, {
        tab: 'Feature 2',
        title: 'Feature 2',
        description: 'Description 2',
        image: 'https://images.beta.cosmos.so/9b3a88a7-692c-43b1-838a-96e555927db3.?format=jpeg',
    }, {
        tab: 'Feature 3',
        title: 'Feature 3',
        description: 'Description 3',
        image: 'https://images.beta.cosmos.so/6bc5d3ba-1850-4e58-abf5-67eac6ed614d?format=jpeg',
    }, {
        tab: 'Feature 4',
        title: 'Feature 4',
        description: 'Description 4',
        image: 'https://images.beta.cosmos.so/0a343dca-372a-4494-9b8a-65cdea0831b2?format=jpeg',
    }, {
        tab: 'Feature 5',
        title: 'Feature 5',
        description: 'Description 5',
        image: 'https://images.beta.cosmos.so/a6d69ba1-ad19-4a77-864b-0f888ce93830?format=jpeg',
    }, {
        tab: 'Feature 6',
        title: 'Feature 6',
        description: 'Description 6',
        image: 'https://images.beta.cosmos.so/9b3a88a7-692c-43b1-838a-96e555927db3.?format=jpeg',
    },
];
