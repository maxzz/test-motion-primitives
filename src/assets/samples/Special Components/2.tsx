'use client';

import { PlusIcon } from 'lucide-react';
import { TextEffect } from '@/components/motion-ui/text-effect';
import { BorderTrail } from '@/components/motion-ui/border-trail';
import { useState } from 'react';

const loadingPhases = [
  { label: '', isLoading: false },
  { label: 'Analyzing scope...', isLoading: false },
  { label: 'Synthesizing solutions...', isLoading: false },
  { label: 'Finalizing output...', isLoading: false },
];

export function TextEffectTrail() {
  const [text, setText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [currentPhaseIndex, setCurrentPhaseIndex] = useState(0);
  const [loading, setLoading] = useState(loadingPhases[0]);

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setText('');
      setIsLoading(true);
      setCurrentPhaseIndex(1);
      setLoading({
        label: loadingPhases[1].label,
        isLoading: true,
      });
    }
  };

  const handleAnimationComplete = () => {
    setLoading((prev) => ({
      ...prev,
      isLoading: false,
    }));

    const mockRandomDelay = Math.floor(Math.random() * 501) + 1500;

    if (currentPhaseIndex < loadingPhases.length - 1) {
      const nextIndex = currentPhaseIndex + 1;

      setTimeout(() => {
        setCurrentPhaseIndex(nextIndex);
        setLoading({
          label: loadingPhases[nextIndex].label,
          isLoading: true,
        });
      }, mockRandomDelay);
    } else {
      setTimeout(() => {
        setIsLoading(false);
        setCurrentPhaseIndex(0);
        setLoading(loadingPhases[0]);
      }, mockRandomDelay);
    }
  };

  return (
    <div className='flex items-center justify-center bg-zinc-950 px-6 py-24 sm:py-32 lg:px-8'>
      <div className='relative flex h-[66px] w-[400px] rounded-full bg-[#232323] px-[28px]'>
        <div className='flex flex-1 flex-row items-center gap-5'>
          <PlusIcon className='h-4 w-4 text-white' />
          <div className='h-[16px] w-[1px] bg-[#373739]' />
          <input
            type='text'
            className='w-full bg-transparent text-white outline-none'
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={handleKeyPress}
            disabled={isLoading}
          />
          <TextEffect
            key={loading.label}
            className='absolute left-[82px] top-[19px] whitespace-nowrap text-[#e1e1e1]'
            variants={{
              item: {
                hidden: { opacity: 0, filter: 'blur(2px)' },
                visible: { opacity: 1, filter: 'blur(0px)' },
                exit: { opacity: 0, filter: 'blur(2px)' },
              },
            }}
            per='word'
            delay={0.5}
            speedReveal={0.9}
            speedSegment={0.3}
            trigger={loading.isLoading}
            segmentWrapperClassName='[&>*]:bg-gradient-to-b [&>*]:from-[#e4d3e8] [&>*]:via-[#afe1f0] [&>*]:to-[#e4d3e8] [&>*]:bg-clip-text [&>*]:text-transparent'
            onAnimationComplete={handleAnimationComplete}
          >
            {loading.label}
          </TextEffect>
        </div>
        {isLoading && (
          <BorderTrail
            className='h-[500px] rounded-full bg-gradient-to-l from-[#232323] via-[#3d5256] to-[#232323]'
            size={500}
            style={{
              transformOrigin: '50% 90%',
            }}
          />
        )}
      </div>
    </div>
  );
}
