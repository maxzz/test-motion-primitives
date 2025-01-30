'use client';
import { motion, MotionValue, useMotionValue, useSpring } from 'motion/react';

type FloatingImageProps = {
    position: { left: string; top: string; };
    multiplier: { x: number; y: number; };
    mouseX: MotionValue<number>;
    mouseY: MotionValue<number>;
    img: string;
    alt: string;
};

const SPRING_CONFIG = { type: 'spring', stiffness: 122, damping: 30, mass: 5, };

function FloatingImage({ img, alt, position, multiplier, mouseX, mouseY, }: FloatingImageProps) {
    const springX = useSpring(0, SPRING_CONFIG);
    const springY = useSpring(0, SPRING_CONFIG);

    mouseX.on('change', (latest) => { springX.set(latest * multiplier.x); });
    mouseY.on('change', (latest) => { springY.set(latest * multiplier.y); });

    return (
        <motion.div
            className='absolute aspect-square w-[80px] bg-zinc-100 dark:bg-zinc-800'
            style={{
                left: position.left,
                top: position.top,
                x: springX,
                y: springY,
            }}
        >
            <img src={img} alt={alt} />
            <div className='absolute inset-0 bg-white opacity-70 dark:bg-black dark:opacity-80' />
        </motion.div>
    );
}

export function Cta1() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = (event: React.MouseEvent) => {
        const { clientX, clientY } = event;
        mouseX.set(clientX);
        mouseY.set(clientY);
    };

    return (
        <div className='' onMouseMove={handleMouseMove}>
            <div className='mx-auto max-w-screen-xl overflow-hidden px-4 py-8 sm:py-16 lg:px-6'>
                <div className='relative mx-auto max-w-screen-sm py-12 text-center'>
                    <div className='pointer-events-none absolute inset-0'>
                        {ITEMS.map(
                            (item, index) => <FloatingImage mouseX={mouseX} mouseY={mouseY} key={index} {...item} />
                        )}
                    </div>
                    <div className='relative'>
                        <h2 className='mb-4 text-3xl text-zinc-900 dark:text-white'>
                            Join the community
                        </h2>
                        <p className='mb-6 text-zinc-500 dark:text-zinc-400'>
                            More than +1000 designers sharing their work.
                        </p>
                        <a
                            href='#'
                            className='
                            px-2.5 py-1.5 text-sm 
                            text-white bg-zinc-900 
                            dark:bg-white dark:text-zinc-900 
                            hover:bg-zinc-700 dark:hover:bg-zinc-200
                            transition-colors duration-300 
                            inline-flex items-center rounded-md'
                        >
                            Join now
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

const ITEMS = [ // images from https://www.cosmos.so/satorifiles/graphic-design
    {
        position: { left: '30%', top: '0%', }, multiplier: { x: -0.08, y: -0.02 },
        img: 'https://images.beta.cosmos.so/ef796418-a1ca-4b0b-8536-60a9e3a01449?format=jpeg', alt: 'cosmos',
    },
    {
        position: { left: '10%', top: '50%', }, multiplier: { x: -0.05, y: -0.09 },
        img: 'https://images.beta.cosmos.so/d5c3850c-7a85-4e46-b61f-059aa1300f77?format=jpeg', alt: 'cosmos',
    },
    {
        position: { left: '30%', top: '90%', }, multiplier: { x: -0.03, y: -0.06 },
        img: 'https://images.beta.cosmos.so/46a3308c-db18-484d-9421-2c68b71814b7?format=jpeg', alt: 'cosmos',
    },
    {
        position: { left: '70%', top: '10%', }, multiplier: { x: -0.08, y: -0.02 },
        img: 'https://images.beta.cosmos.so/d5acdfdf-8785-43f6-bc55-0c686812b3bd?format=jpeg', alt: 'cosmos',
    },
    {
        position: { left: '90%', top: '50%', }, multiplier: { x: -0.05, y: -0.09 },
        img: 'https://images.beta.cosmos.so/b7ecaea1-230a-4779-a45c-517c1594982d?format=jpeg', alt: 'cosmos',
    },
    {
        position: { left: '70%', top: '85%', }, multiplier: { x: -0.03, y: -0.06 },
        img: 'https://images.beta.cosmos.so/bab29ee2-aa17-41b5-b66e-a985e9307b1b?format=jpeg', alt: 'cosmos',
    },
];
