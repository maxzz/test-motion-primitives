"use client";
import { useState } from "react";
import { motion } from "motion/react";
import { Link } from "@/ui";
import { ArrowRightIcon } from "lucide-react";

export function Team5() {
    return (
        <div className="relative z-0 flex w-full flex-col items-start p-4">
            <div className="flex w-full flex-col divide-y divide-zinc-200 dark:divide-zinc-800">
                {LINKS.map(
                    (link, index) => (
                        <LinkLoop key={index} link={link} index={index} />
                    )
                )}
            </div>
        </div>
    );
}

function LinkLoop({ link, index, }: { link: (typeof LINKS)[number]; index: number; }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Link key={index} href={link.href} data-id={link.customer}>
            <div
                className="relative w-full overflow-hidden"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <motion.div
                    initial={{ y: 0 }}
                    animate={{ y: isHovered ? -16 : 0, rotateX: isHovered ? 90 : 0 }}
                    transition={{ type: "spring", duration: 0.5, bounce: 0 }}
                >
                    <RenderItem link={link} />
                </motion.div>

                <motion.div
                    className="absolute left-0 top-0 w-full"
                    initial={{ y: 16 }}
                    animate={{ y: isHovered ? 0 : 16, rotateX: isHovered ? 0 : 90 }}
                    transition={{ type: "spring", duration: 0.5, bounce: 0 }}
                >
                    <RenderItem link={link} />
                </motion.div>
            </div>
        </Link>
    );
}

function RenderItem({ link }: { link: (typeof LINKS)[number]; }) {
    return (
        <div className="flex w-full items-center justify-between rounded-sm px-4 py-3">

            <div className="grid w-full grid-cols-1 md:grid-cols-12 md:gap-4">
                <div className="col-span-3 text-sm font-medium text-zinc-900 dark:text-white">
                    {link.customer}
                </div>
                <div className="col-span-9 text-xs text-zinc-500 md:text-sm">
                    {link.work}
                </div>
            </div>

            <div>
                <ArrowRightIcon className="size-4 text-zinc-900 dark:text-white" />
            </div>
        </div>
    );
}

const LINKS = [
    {
        customer: "Jony Ive - LoveFrom",
        work: "Design Engineering",
        href: "#",
    }, {
        customer: "Jessica Walsh - &Walsh",
        work: "Brand Design",
        href: "#",
    }, {
        customer: "Paula Scher - Pentagram",
        work: "Visual Design",
        href: "#",
    }, {
        customer: "Dieter Rams - Braun",
        work: "Product Engineering",
        href: "#",
    }, {
        customer: "Kenya Hara - MUJI",
        work: "Design Systems",
        href: "#",
    },
];
