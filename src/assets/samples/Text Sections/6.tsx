'use client';

import { ReactNode, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

// iamges from www.cosmos.so/primomoka/atletica-chakras-general and https://www.cosmos.so/e/1675602603

const IMAGES = [
  {
    image:
      'https://images.beta.cosmos.so/783ec54f-c1eb-4606-a436-05c5876b47b7?format=jpeg',
    alt: 'Image 1',
    description: 'A stunning view of the mountains at sunrise.',
  },
  {
    image:
      'https://images.beta.cosmos.so/f4c98298-4e01-4cee-853f-bff060323b00?format=jpeg',
    alt: 'Image 2',
    description: 'A serene beach with crystal clear waters.',
  },
  {
    image:
      'https://images.beta.cosmos.so/5bad355c-2311-4926-abbb-9e1e26ee9372?format=jpeg',
    alt: 'Image 3',
    description: 'A bustling cityscape at night.',
  },
  {
    image:
      'https://images.beta.cosmos.so/684428eb-b1cc-4f14-9519-f8034535e4e3?format=jpeg',
    alt: 'Image 4',
    description: 'A tranquil forest path in autumn.',
  },
  {
    image:
      'https://images.beta.cosmos.so/d323e261-0242-47db-ac3e-3d97f2608d15?format=jpeg',
    alt: 'Image 5',
    description: 'A vibrant field of wildflowers in spring.',
  },
];

function LinkWithImagesOnHover({
  children,
  images,
}: {
  children: ReactNode;
  images: { image: string; alt: string; description: string }[];
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      className='relative inline-flex whitespace-pre text-zinc-900 dark:text-white'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      href='#'
    >
      {children}
      <AnimatePresence initial={false}>
        {isHovered && (
          <motion.div
            className='absolute bottom-full left-1/2 z-10 mb-2 flex -translate-x-1/2'
            initial={{ opacity: 0, scale: 0.5, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 10 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          >
            {images.map((img, index) => (
              <motion.div
                key={`${img.image}-${index}`}
                className='relative aspect-video h-full w-[120px] overflow-hidden rounded-[4px] shadow-md'
                style={{
                  marginLeft: index > 0 ? '-0.5rem' : '0',
                  zIndex: index,
                }}
                initial={{
                  opacity: 0,
                  scale: 0.6,
                  x: index === 0 ? 0 : -50 * index,
                  y:
                    index === 0
                      ? 0
                      : index % 2 === 0
                        ? -Math.random() * 20
                        : Math.random() * 20,
                  rotate:
                    index === 0
                      ? 0
                      : index % 2 === 0
                        ? -Math.random() * 8
                        : Math.random() * 8,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  delay: index * 0.08,
                  type: 'spring',
                  stiffness: 300,
                  damping: 25,
                }}
              >
                <img
                  src={img.image}
                  alt={img.alt}
                  className='absolute inset-0 h-full w-full object-cover'
                />
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </a>
  );
}

export function Text6() {
  return (
    <div className='py-24 sm:py-32'>
      <div className='mx-auto max-w-xl px-6 lg:px-8'>
        <p className='text-xl font-medium text-zinc-500 dark:text-zinc-400'>
          Unparalleled Quality: Experience AI-generated images with breathtaking{' '}
          <LinkWithImagesOnHover images={IMAGES.slice(0, 2)}>
            detail
          </LinkWithImagesOnHover>{' '}
          and{' '}
          <LinkWithImagesOnHover images={IMAGES.slice(2, 5)}>
            clarity
          </LinkWithImagesOnHover>
          . Every pixel is crafted to perfection, rivaling the work of master
          artists. Create images indistinguishable from those made by human
          experts.
        </p>
      </div>
    </div>
  );
}
