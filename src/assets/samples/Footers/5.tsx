export function Footer5() {
    // add overscroll-behavior:none to the body please
    return (
        <div>
            <div className='flex h-screen items-center justify-center'>
                <div className='text-sm'>
                    Scroll down
                </div>
            </div>

            <div
                className='relative h-[--footer-height] [--footer-height:500px]'
                style={{ clipPath: 'polygon(0% 0, 100% 0%, 100% 100%, 0 100%)' }}
            >
                <div className='fixed bottom-0 h-[--footer-height] w-full'>
                    <div className='flex h-full w-full flex-col justify-between bg-zinc-800 px-12 py-8'>
                        <div className='flex shrink-0 gap-20'>

                            <div className='flex flex-col gap-2'>
                                <h3 className='mb-2 text-zinc-400'>Product</h3>
                                <a href='#' className='text-white'>Features</a>
                                <a href='#' className='text-white'>Pricing</a>
                                <a href='#' className='text-white'>Integration</a>
                                <a href='#' className='text-white'>API Documentation</a>
                            </div>

                            <div className='flex flex-col gap-2'>
                                <h3 className='mb-2 text-zinc-400'>Company</h3>
                                <a href='#' className='text-white'>About Us</a>
                                <a href='#' className='text-white'>Blog</a>
                                <a href='#' className='text-white'>Careers</a>
                                <a href='#' className='text-white'>Customer Stories</a>
                            </div>

                            <div className='flex flex-col gap-2'>
                                <h3 className='mb-2 text-zinc-400'>Support</h3>
                                <a href='#' className='text-white'>Help Center</a>
                                <a href='#' className='text-white'>Status</a>
                                <a href='#' className='text-white'>Security</a>
                                <a href='#' className='text-white'>Terms of Service</a>
                            </div>

                        </div>

                        <p className='text-sm text-white'>
                            � {new Date().getFullYear()} Motion Primitives, Inc. All rights reserved.
                        </p>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}
