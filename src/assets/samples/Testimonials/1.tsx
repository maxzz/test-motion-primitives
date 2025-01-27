import { InfiniteSlider } from '@/components/motion-ui/infinite-slider';
import { cn } from "@/utils";

const CARDS = [
  {
    name: 'Jane Doe',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
  },
  {
    name: 'John Smith',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
  },
  {
    name: 'Alice Johnson',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quosLorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos',
  },
  {
    name: 'Bob Brown',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    name: 'Charlie White',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
  },
  {
    name: 'Diana Green',
    content:
      'Lorem ipsum dolor sit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
  },
];

function InfiniteSliderColumn({ className = '' }: { className?: string }) {
  const randomCards = CARDS.sort(() => Math.random() - 0.5);

  return (
    <div
      className={cn(
        'flex h-[1000px] w-full overflow-y-hidden [mask-image:linear-gradient(#000,#000,transparent_0,#000_var(--shadow-size),#000_calc(100%_-_var(--shadow-size)),transparent)]',
        className
      )}
      style={
        {
          '--shadow-size': '100px',
        } as React.CSSProperties
      }
    >
      <InfiniteSlider
        gap={24}
        direction='vertical'
        duration={20}
        className='flex'
      >
        {randomCards.map((card, index) => (
          <div className='rounded bg-zinc-100 p-4 dark:bg-zinc-900' key={index}>
            <div className='flex items-center gap-2'>
              <div className='h-4 w-4 rounded-full bg-gradient-to-br from-blue-200 to-purple-400' />
              <span className='text-sm text-zinc-950 dark:text-zinc-50'>
                {card.name}
              </span>
            </div>
            <p className='mt-2 flex text-sm text-zinc-600 dark:text-zinc-400'>
              {card.content}
            </p>
          </div>
        ))}
      </InfiniteSlider>
    </div>
  );
}

export function Testimonial1() {
  return (
    <div className='py-24 sm:py-32'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          <InfiniteSliderColumn />
          <InfiniteSliderColumn className='hidden md:block' />
          <InfiniteSliderColumn className='hidden lg:block' />
          <InfiniteSliderColumn className='hidden xl:block' />
        </div>
      </div>
    </div>
  );
}
