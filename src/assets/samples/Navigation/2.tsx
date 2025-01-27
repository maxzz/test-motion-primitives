import AnimatedBackground from '@/components/motion-ui/animated-background';

export function Navigation2() {
  const TABS = ['Home', 'About', 'Services', 'Contact', 'Pricing', 'FAQ'];

  return (
    <div className='py-24 sm:py-32'>
      <div className='mx-auto flex max-w-7xl justify-center px-6 lg:px-8'>
        <div className='flex max-w-full flex-nowrap overflow-x-auto'>
          <AnimatedBackground
            defaultValue={TABS[0]}
            className='rounded-lg bg-zinc-100 dark:bg-zinc-800'
            transition={{
              type: 'spring',
              bounce: 0.2,
              duration: 0.3,
            }}
            enableHover
          >
            {TABS.map((tab, index) => (
              <button
                key={index}
                data-id={tab}
                type='button'
                className='px-3 py-2 text-sm text-zinc-600 transition-colors duration-300 hover:text-zinc-950 data-[checked=true]:text-black dark:text-zinc-400 dark:hover:text-zinc-50 dark:data-[checked=true]:text-white'
              >
                {tab}
              </button>
            ))}
          </AnimatedBackground>
        </div>
      </div>
    </div>
  );
}
