import AnimatedBackground from '@/components/motion-ui/animated-background';

export function Navigation5() {
  const TABS = ['Home', 'About', 'Services', 'Contact'];

  return (
    <div className='py-24 sm:py-32'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto w-full max-w-fit rounded-xl border border-zinc-200 p-1 dark:border-zinc-800'>
          <div className='flex overflow-x-auto'>
            <AnimatedBackground
              defaultValue={TABS[0]}
              className='whitespace-nowrap rounded-lg bg-zinc-100 dark:bg-zinc-800'
              transition={{
                type: 'spring',
                bounce: 0,
                duration: 0.2,
              }}
            >
              {TABS.map((tab, index) => (
                <button
                  key={index}
                  data-id={tab}
                  type='button'
                  className='px-3 py-2 text-sm text-zinc-600 transition-colors duration-300 hover:text-black data-[checked=true]:text-black dark:text-zinc-400 dark:hover:text-white data-[checked=true]:dark:text-white'
                >
                  {tab}
                </button>
              ))}
            </AnimatedBackground>
          </div>
        </div>
      </div>
    </div>
  );
}
