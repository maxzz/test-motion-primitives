import { TextLoop } from "@/components/motion-ui/text-loop";

export function Heading2() {
  const words = ['components', 'templates', 'layouts', 'designs'];

  return (
    <div className='py-24 sm:py-32'>
      <div className='mx-auto max-w-7xl px-6 text-center lg:px-8'>
        <h2
          className='mb-4 text-3xl text-zinc-900 dark:text-white sm:text-4xl'
          style={{
            perspective: '1000px',
          }}
        >
          <span>Build faster with beautiful</span>
          <br />
          <TextLoop
            variants={{
              initial: { opacity: 0, rotateX: 90, filter: 'blur(4px)' },
              animate: { opacity: 1, rotateX: 0, filter: 'blur(0px)' },
              exit: { opacity: 0, rotateX: -90, filter: 'blur(4px)' },
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
