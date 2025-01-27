import { InfiniteSlider } from '@/components/motion-ui/infinite-slider';

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
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.Lorem ipsum dolor sit amet consectetur adipisicing elit.',
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

function InfiniteSliderRow({ reverse }: { reverse?: boolean }) {
  const randomCards = CARDS.sort(() => Math.random() - 0.5);

  return (
    <div
      className='flex w-full overflow-x-hidden [mask-image:linear-gradient(to_right,#000,#000,transparent_0,#000_var(--shadow-size),#000_calc(100%_-_var(--shadow-size)),transparent)]'
      style={
        {
          '--shadow-size': '100px',
        } as React.CSSProperties
      }
    >
      <InfiniteSlider
        gap={24}
        duration={40}
        reverse={reverse}
        durationOnHover={300}
      >
        {randomCards.map((card) => (
          <div className='max-w-64 rounded bg-zinc-100 p-4 dark:bg-zinc-900'>
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

export function Testimonial2() {
  return (
    <div className='py-24 sm:py-32'>
      <div
        className='mx-auto flex max-w-7xl flex-col space-y-6 px-6 lg:px-8'
        style={
          {
            '--shadow-size': '200px',
          } as React.CSSProperties
        }
      >
        <InfiniteSliderRow />
        <InfiniteSliderRow reverse />
      </div>
    </div>
  );
}
