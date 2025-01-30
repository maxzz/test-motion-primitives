import { Accordion, AccordionItem, AccordionTrigger, AccordionContent, } from '@/components/motion-ui/accordion';
import { PlusIcon } from 'lucide-react';

export function Faq4() {
    return (
        <div className='py-24 sm:py-32'>
            <div className='mx-auto max-w-7xl px-6 lg:px-8'>
                <div className='grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-12'>

                    <div className='py-0 text-left md:py-4'>
                        <h2 className='mb-4 text-2xl font-medium text-zinc-900 dark:text-white'>
                            FAQs
                        </h2>
                        <p className='text-base text-zinc-500 dark:text-zinc-400'>
                            Here are some of the most common questions we receive from our users.
                        </p>
                    </div>

                    <div className='col-span-2 border-t border-zinc-200 px-3 dark:border-zinc-700 sm:px-0 md:border-none'>

                        <Accordion
                            className='flex w-full flex-col divide-y divide-zinc-200 dark:divide-zinc-700'
                            transition={{ duration: 0.2, ease: 'easeInOut' }}
                        >
                            {CONTENT.map(
                                (item, idx) => (
                                    <AccordionItem value={item.value} className='py-4' key={idx}>

                                        <AccordionTrigger className='w-full text-left text-zinc-950 dark:text-zinc-50'>
                                            <div className='flex items-center space-x-3'>
                                                <PlusIcon className='size-4 text-black transition-transform duration-200 group-data-[expanded]:rotate-45 dark:text-white' />
                                                <div>{item.title}</div>
                                            </div>
                                        </AccordionTrigger>

                                        <AccordionContent>
                                            <p className='pt-2 text-zinc-500 dark:text-zinc-400'>
                                                {item.content}
                                            </p>
                                        </AccordionContent>

                                    </AccordionItem>
                                )
                            )}
                        </Accordion>
                    </div>
                </div>
            </div>
        </div>
    );
}

const CONTENT = [
    {
        title: 'Getting Started',
        value: 'getting-started',
        content:
            'Discover the fundamental concepts of Motion-Primitives. This section guides you through the installation process and provides an overview of how to integrate these components into your projects. Learn about the core functionalities and how to set up your first animation effectively.',
    }, {
        title: 'Animation Properties',
        value: 'animation-properties',
        content:
            'Explore the comprehensive range of animation properties available in Motion-Primitives. Understand how to manipulate timing, easing, and delays to create smooth, dynamic animations. This segment also covers the customization of animations to fit the flow and style of your web applications.',
    }, {
        title: 'Advanced Usage',
        value: 'advanced-usage',
        content:
            'Dive deeper into advanced techniques and features of Motion-Primitives. Learn about chaining animations, creating complex sequences, and utilizing motion sensors for interactive animations. Gain insights on how to leverage these advanced features to enhance user experience and engagement.',
    }, {
        title: 'Community and Support',
        value: 'community-and-support',
        content:
            'Engage with the Motion-Primitives community to gain additional support and insight. Find out how to participate in discussions, contribute to the project, and access a wealth of shared knowledge and resources. Learn about upcoming features, best practices, and how to get help with your specific use cases.',
    },
];
