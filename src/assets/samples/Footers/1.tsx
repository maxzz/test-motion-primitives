import { TextEffect } from '@/components/motion-ui/text-effect';
import GitHubIcon from '../website/icons/github';
import XIcon from '../website/icons/x';

export function Footer1() {
  return (
    <footer>
      <div className='mx-auto flex max-w-7xl flex-col justify-center px-6 py-12 md:flex-row md:justify-between md:px-8'>
        <TextEffect className='text-sm text-zinc-500'>
          {`© ${new Date().getFullYear()} Motion Primitives, Inc. All rights reserved.`}
        </TextEffect>
        <div className='order-first mb-4 flex items-center gap-x-6 md:order-none md:mb-0'>
          <a
            href='#'
            className='fill-zinc-500 hover:fill-zinc-900 dark:fill-zinc-400 dark:hover:fill-zinc-100'
          >
            <GitHubIcon className='h-4 w-4' />
          </a>
          <a
            href='#'
            className='fill-zinc-500 hover:fill-zinc-900 dark:fill-zinc-400 dark:hover:fill-zinc-100'
          >
            <XIcon className='h-4 w-4' />
          </a>
        </div>
      </div>
    </footer>
  );
}
