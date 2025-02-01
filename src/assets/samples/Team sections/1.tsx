"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export function Team1() {
    const [socialHovered, setSocialHovered] = useState<string | null>(null);
    return (
        <div className="py-24 sm:py-32 w-full">
            <div className="mx-auto px-6 lg:px-8 max-w-7xl">
                <div className="flex flex-wrap justify-center gap-5">

                    {SOCIAL_PROFILES.map(
                        (social, index) => {
                            return (
                                <div className="relative" key={index}>
                                    <img
                                        className="size-16 rounded-full"
                                        onMouseEnter={() => setSocialHovered(social.name)}
                                        onMouseLeave={() => setSocialHovered(null)}
                                        src={social.src} alt={social.name} key={index}
                                    />

                                    <AnimatePresence initial={false}>
                                        {socialHovered === social.name && (
                                            <motion.div
                                                key={social.name}
                                                className="absolute bottom-0 left-0 right-0 flex flex-col items-center justify-center whitespace-nowrap"
                                                initial={{ y: -60, rotate: 0, opacity: 0, }}
                                                animate={{ y: -80, opacity: 1, rotate: Math.random() * 20 - 10, }}
                                                exit={{ y: -60, opacity: 0, rotate: 0, }}
                                                transition={{ duration: 0.2, ease: [0.785, 0.135, 0.15, 0.86], }}
                                            >
                                                <div className="text-sm font-medium text-zinc-900 dark:text-white">
                                                    {social.name}
                                                </div>

                                                <div className="text-xs text-zinc-500 dark:text-zinc-400">
                                                    {social.job}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            );
                        }
                    )}
                </div>
            </div>
        </div>
    );
}

const SOCIAL_PROFILES = [
    {
        name: "Jon Doe",
        src: "/avatars/1.png",
        job: "Software Engineer",
    }, {
        name: "Jane Doe",
        src: "/avatars/2.png",
        job: "Product Manager",
    }, {
        name: "Fly Doe",
        src: "/avatars/3.png",
        job: "Designer",
    }, {
        name: "Rich Doe",
        src: "/avatars/4.png",
        job: "Data Scientist",
    },
];
