import { Accordion, AccordionItem, AccordionTrigger, AccordionContent, } from '@/components/motion-ui/accordion';
import { PlusIcon } from 'lucide-react';

export function Faq3() {
    return (
        <div className='relative mx-auto max-w-xl px-6 py-12'>
            <h2 className='mb-6 text-2xl font-medium text-zinc-900 dark:text-white'>
                FAQs
            </h2>

            <Accordion
                transition={{ duration: 0.2, ease: 'easeInOut' }}
                className='flex flex-col space-y-4'
            >
                {CONTENT.map(
                    (item) => (
                        <AccordionItem
                            key={item.value}
                            value={item.value}
                            className='w-full rounded-xl bg-zinc-100 px-5 text-black dark:bg-zinc-900 dark:text-white'
                        >

                            <AccordionTrigger className='w-full py-2'>
                                <div className='flex items-center justify-between'>
                                    <div>{item.title}</div>
                                    <PlusIcon className='size-4 text-black transition-transform duration-200 group-data-[expanded]:rotate-45 dark:text-white' />
                                </div>
                            </AccordionTrigger>

                            <AccordionContent>
                                <p className='border-t border-zinc-200 py-2 text-zinc-800 dark:border-zinc-700 dark:text-zinc-400'>
                                    {item.content}
                                </p>
                            </AccordionContent>

                        </AccordionItem>
                    )
                )}
            </Accordion>
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
