'use client';
import React, { ReactNode } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';
import { useState } from 'react';

type NavItem = {
  name: string;
  href: string;
  content: ReactNode;
};

const navItems: NavItem[] = [
  {
    name: 'Products',
    href: '/products',
    content: (
      <div className='w-[200px]'>
        <ul className='flex flex-col space-y-1 py-1'>
          <li className='px-1'>
            <Link
              href='/products/featured'
              className='block rounded-[4px] px-3 py-1 text-sm text-zinc-700 hover:bg-zinc-100 dark:text-zinc-200 dark:hover:bg-zinc-900'
            >
              Featured
            </Link>
          </li>
          <li className='px-1'>
            <Link
              href='/products/new'
              className='block rounded-[4px] px-3 py-1 text-sm text-zinc-700 hover:bg-zinc-100 dark:text-zinc-200 dark:hover:bg-zinc-900'
            >
              New Arrivals
            </Link>
          </li>
          <li className='px-1'>
            <Link
              href='/products/sale'
              className='block rounded-[4px] px-3 py-1 text-sm text-zinc-700 hover:bg-zinc-100 dark:text-zinc-200 dark:hover:bg-zinc-900'
            >
              Sale
            </Link>
          </li>
        </ul>
      </div>
    ),
  },
  {
    name: 'Membership',
    href: '/membership',
    content: (
      <div className='p-2'>
        <div className='grid grid-cols-2 space-x-2'>
          <div className='bg-zinc-50 p-4 text-sm text-zinc-700 dark:bg-zinc-900 dark:text-zinc-200'>
            Feature
          </div>
          <div className='bg-zinc-50 p-4 text-sm text-zinc-700 dark:bg-zinc-900 dark:text-zinc-200'>
            Content
          </div>
        </div>
      </div>
    ),
  },
  {
    name: 'About',
    href: '/about',
    content: (
      <div className='w-[200px]'>
        <ul className='flex flex-col space-y-1 py-1'>
          <li className='px-1'>
            <Link
              href='/about/story'
              className='block rounded-[4px] px-3 py-1 text-sm text-zinc-700 hover:bg-zinc-100 dark:text-zinc-200 dark:hover:bg-zinc-900'
            >
              Our Story
            </Link>
          </li>
          <li className='px-1'>
            <Link
              href='/about/team'
              className='block rounded-[4px] px-3 py-1 text-sm text-zinc-700 hover:bg-zinc-100 dark:text-zinc-200 dark:hover:bg-zinc-900'
            >
              Team
            </Link>
          </li>
        </ul>
      </div>
    ),
  },
];

export function Navigation1() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [dropdownPosition, setDropdownPosition] = useState(0);

  const handleHover = (
    item: NavItem,
    e: React.MouseEvent<HTMLDivElement> | React.FocusEvent<HTMLDivElement>
  ) => {
    setHoveredItem(item.name);
    setDropdownPosition(e.currentTarget.offsetLeft);
  };

  return (
    <div className='py-24 sm:py-32'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <nav onMouseLeave={() => setHoveredItem(null)}>
          <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
            <div className='flex justify-center'>
              <div className='relative flex'>
                <ul className='relative flex list-none p-0' role='menubar'>
                  {navItems.map((item) => (
                    <div
                      key={item.name}
                      role='menuitem'
                      aria-haspopup='true'
                      aria-expanded={hoveredItem === item.name}
                      onMouseEnter={(e) => {
                        handleHover(item, e);
                      }}
                      onFocus={(e) => {
                        handleHover(item, e);
                      }}
                      className='relative'
                    >
                      <Link
                        href='#'
                        className='px-3 py-2 text-sm text-zinc-950 dark:text-zinc-50'
                      >
                        {item.name}
                      </Link>
                    </div>
                  ))}
                </ul>
                <AnimatePresence>
                  {hoveredItem && (
                    <motion.div
                      layout
                      initial={{ opacity: 0, scale: 0.95, x: dropdownPosition }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                        x: dropdownPosition,
                      }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className='absolute top-full mt-2 overflow-hidden rounded-md bg-white shadow-sm ring-1 ring-black ring-opacity-5 dark:bg-black dark:ring-white dark:ring-opacity-5'
                      onMouseEnter={() => setHoveredItem(hoveredItem)}
                      onMouseLeave={() => setHoveredItem(null)}
                    >
                      <motion.div layout='position'>
                        {
                          navItems.find((item) => item.name === hoveredItem)
                            ?.content
                        }
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
