import React, { SVGProps } from 'react' //https://github.com/ibelick/motion-primitives/blob/main/public/prada_logo.svg

export function Prada(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 36 36" {...props}><path fill="currentColor" d="M32 18c0 7.7-6.2 14-14 14S4 25.8 4 18C4 10.6 9.7 4.5 17.1 4v3.7c-5.7.5-9.8 5.5-9.3 11.2s5.5 9.8 11.2 9.3c5.3-.5 9.3-4.9 9.3-10.2h-2c0 4.6-3.7 8.3-8.3 8.3S9.7 22.6 9.7 18c0-4.2 3.2-7.8 7.3-8.2v4.4c-2.1.6-3.4 2.7-2.9 4.9c.6 2.1 2.7 3.4 4.9 2.9c2.1-.6 3.4-2.7 2.9-4.9c-.4-1.4-1.5-2.5-2.9-2.9V2h-1.1c-8.8 0-16 7.2-16 16s7.2 16 16 16s16-7.2 16-16z" className="clr-i-solid clr-i-solid-path-1"></path><path fill="none" d="M0 0h36v36H0z"></path></svg>
  )
}
