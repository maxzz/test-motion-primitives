'use client';
import { useState } from 'react';
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuTrigger,
//   DropdownMenuItem,
// } from '@/components/website/dropdown-menu';
import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { TextMorph } from "@/components/motion-ui/text-morph";

export function TextMorphDropdown() {
  const TRANSITION = {
    type: 'spring',
    stiffness: 280,
    damping: 18,
    mass: 0.3,
  };

  const [selectedValue, setSelectedValue] = useState('GPT-4');
  const options = ['o3', '4o', '4.5', '4o-1.5', 'o1-mini'];
  const label = 'ChatGPT';

  const handleSelect = (value: string) => {
    setSelectedValue(value);
  };

  return (
    <div className='flex items-center justify-center px-6 py-24 sm:py-32 lg:px-8'>
        {/* tm: later */}
      {/* <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <motion.button
            layout='size'
            className='overflow-hidden rounded-lg px-2 py-1.5 transition-colors duration-200 hover:bg-[#f9f9f9]'
            transition={TRANSITION}
          >
            <motion.div
              layout='preserve-aspect'
              className='inline-flex items-center gap-1'
              transition={TRANSITION}
            >
              <span className='text-[#5d5d5d]'>{label}</span>
              <TextMorph className='lowercase'>{selectedValue}</TextMorph>
              <ChevronDown className='size-4 text-[#b4b4b4]' />
            </motion.div>
          </motion.button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align='start' className='shadow-sm'>
          {options.map((option) => (
            <DropdownMenuItem key={option} onClick={() => handleSelect(option)}>
              {option}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu> */}
    </div>
  );
}
