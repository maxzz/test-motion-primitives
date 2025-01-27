import { TextLoop } from '@/components/motion-ui/text-loop';

export function Heading1() {
  const words = ['components', 'templates', 'layouts', 'designs'];

  return (
    <div className='py-24 sm:py-32'>
      <div className='mx-auto max-w-7xl px-6 text-center lg:px-8'>
        <h2 className='mb-4 text-3xl text-zinc-900 dark:text-white sm:text-4xl'>
          <span>Build faster with beautiful</span>
          <br />
          <TextLoop
            variants={{
              initial: { filter: 'blur(5px)', opacity: 0 },
              animate: { filter: 'blur(0)', opacity: 1 },
              exit: { filter: 'blur(5px)', opacity: 0 },
            }}
            transition={{ duration: 0.4 }}
            mode='wait'
          >
            {words.map((word) => (
              <span key={word}>{word}</span>
            ))}
          </TextLoop>
        </h2>
        <p className='text-lg text-zinc-500 dark:text-zinc-400'>
          Improve your development process with beautiful crafted UI.
        </p>
      </div>
    </div>
  );
}
