import GitHubIcon from "@/components/motion-ui-demo-icons/github";
import XIcon from "@/components/motion-ui-demo-icons/x";
import { InfiniteSlider } from '@/components/motion-ui/infinite-slider';

export function Footer3() {
    return (
        <footer>
            <div className='mx-auto flex max-w-7xl flex-col justify-center px-6 pb-4 pt-12 md:flex-row md:justify-between md:px-8'>

                <p className='text-sm text-zinc-500'>
                    © {new Date().getFullYear()} Motion Primitives, Inc. All rights reserved.
                </p>

                <div className='order-first mb-4 flex items-center gap-x-6 md:order-none md:mb-0'>
                    <a href='#' className='fill-zinc-500 hover:fill-zinc-900 dark:fill-zinc-400 dark:hover:fill-zinc-100'>
                        <GitHubIcon className='size-4' />
                    </a>
                    <a href='#' className='fill-zinc-500 hover:fill-zinc-900 dark:fill-zinc-400 dark:hover:fill-zinc-100'>
                        <XIcon className='size-4' />
                    </a>
                </div>
            </div>

            <div className='overflow-hidden'>
                <InfiniteSlider className='-mb-14 text-9xl leading-[100%] text-black dark:text-white sm:text-[12rem]' gap={80}>
                    <div>
                        Motion Primitives
                    </div>
                </InfiniteSlider>
            </div>
        </footer>
    );
}
