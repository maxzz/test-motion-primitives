'use client';

export function Feature10() {
    return (
        <div className='bg-white py-24 dark:bg-black sm:py-32'>
            <div className='relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>

                <div className='relative flex flex-col space-y-32'>
                    {FEATURES.map(
                        (feature, index) => (
                            <div className='
                                relative 
                                top-24 sm:top-32 
                                h-auto lg:sticky lg:h-[calc(400px+9rem)]
                                bg-white dark:bg-black 
                                grid  grid-cols-1 gap-8 md:grid-cols-2 md:gap-16 lg:gap-32
                                ' key={index}
                            >
                                <div className='py-16 text-base text-zinc-900 dark:text-white lg:text-lg'>
                                    {feature.text}
                                </div>

                                <div className='h-[300px] w-full lg:h-[400px]'>
                                    <img className='h-full w-full rounded-lg object-cover' src={feature.image} alt={`Feature ${index + 1}`} />
                                </div>
                            </div>
                        )
                    )}
                </div>

            </div>
        </div>
    );
}

const FEATURES = [
    {
        image: 'https://images.beta.cosmos.so/73046381-1709-4de0-9920-d75fbb8d2676?format=jpeg',
        text: 'Advanced Natural Language Processing: Our AI-powered system understands context and nuance in human language, enabling more natural and effective communication. It can analyze sentiment, extract key information, and even generate human-like responses, revolutionizing customer service and content creation.',
    }, {
        image: 'https://images.beta.cosmos.so/9585854b-8c03-426e-b00b-76973349e53f?format=jpeg',
        text: 'Predictive Analytics and Machine Learning: Harness the power of AI to forecast trends and make data-driven decisions. Our algorithms learn from historical data to predict future outcomes, optimize processes, and identify patterns that humans might miss, giving your business a competitive edge in rapidly changing markets.',
    }, {
        image: 'https://images.beta.cosmos.so/43992056-5e80-477e-9618-a3f5d58f3a64?format=jpeg',
        text: 'Computer Vision and Image Recognition: Unlock new possibilities with our state-of-the-art computer vision technology. From facial recognition and object detection to medical image analysis and autonomous vehicles, our AI can process and understand visual information with human-like accuracy, opening up countless applications across industries.',
    }, {
        image: 'https://images.beta.cosmos.so/73046381-1709-4de0-9920-d75fbb8d2676?format=jpeg',
        text: 'Advanced Natural Language Processing: Our AI-powered system understands context and nuance in human language, enabling more natural and effective communication. It can analyze sentiment, extract key information, and even generate human-like responses, revolutionizing customer service and content creation.',
    },
];
