import AnimatedBackground from '@/components/motion-ui/animated-background';

export function Navigation6() {
  const TABS = ['Home', 'About', 'Services', 'Contact'];

  return (
    <div className='py-24 sm:py-32'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto w-full max-w-fit rounded-full bg-zinc-100 p-1 dark:bg-zinc-800'>
          <div className='flex overflow-x-clip'>
            <AnimatedBackground
              defaultValue={TABS[0]}
              className='z-10 rounded-full bg-white shadow-md dark:bg-black'
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
                  className='px-3 py-2 text-sm text-zinc-500 transition-colors duration-200 hover:text-black data-[checked=true]:text-black dark:text-zinc-400 dark:hover:text-zinc-50 data-[checked=true]:dark:text-white'
                >
                  <span className='relative z-20'>{tab}</span>
                </button>
              ))}
            </AnimatedBackground>
          </div>
        </div>
      </div>
    </div>
  );
}
