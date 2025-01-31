'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { DiscordIcon, GitHubLightIcon, LinkedInIcon, RedditIcon } from '@/components/motion-ui-demo-icons/3';
import { cn } from "@/utils";

export function LogoCloud8() {
    const [socialHovered, setSocialHovered] = useState<string | null>(null);
    return (
        <div className='py-24 sm:py-32'>
            <div className='mx-auto max-w-7xl px-6 lg:px-8'>
                <div className='flex flex-wrap justify-center'>

                    {ICONS.map(
                        (social, index) => (
                            <div
                                className={cn(
                                    `relative cursor-pointer px-6 py-2 transition-opacity duration-200`,
                                    socialHovered && socialHovered !== social.name ? 'opacity-40' : 'opacity-100'
                                )}
                                key={index}
                                onMouseEnter={() => setSocialHovered(social.name)}
                                onMouseLeave={() => setSocialHovered(null)}
                            >
                                <span className='text-sm text-zinc-900 dark:text-white sm:text-lg'>
                                    {social.name}
                                </span>

                                <AnimatePresence initial={false}>
                                    {socialHovered === social.name && (
                                        <motion.div
                                            key={social.name}
                                            className='absolute bottom-0 left-0 right-0 flex items-center justify-center'
                                            initial={{ y: -35, rotate: 0, opacity: 0, }}
                                            animate={{ y: -45, opacity: 1, rotate: Math.random() * 20 - 10, }}
                                            exit={{ y: -35, opacity: 0, rotate: 0, }}
                                            transition={{ duration: 0.2, ease: [0.785, 0.135, 0.15, 0.86], }}
                                        >
                                            <social.icon />
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        )
                    )}

                </div>
            </div>
        </div>
    );
}

const ICONS = [ // import { DiscordRound, GithubRound, LinkedinRound, RedditRound } from './icons';
    { name: 'Discord', icon: DiscordIcon, },
    { name: 'LinkedIn', icon: LinkedInIcon, },
    { name: 'GitHub', icon: GitHubLightIcon, },
    { name: 'Reddit', icon: RedditIcon, },
];
