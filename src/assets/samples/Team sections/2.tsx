import { AnimatedBackground } from "@/components/motion-ui/animated-background";
import { Link } from "@/ui";
import { ArrowRightIcon } from "lucide-react";

export function Team2() {
    return (
        <div className="relative z-0 flex w-full flex-col items-start p-4">

            <AnimatedBackground
                className="w-full bg-zinc-100 dark:bg-zinc-900"
                enableHover
                transition={{ type: "spring", bounce: 0.2, duration: 0.6, }}
            >
                {LINKS.map(
                    (link, index) => (
                        <Link
                            className="flex w-full items-center justify-between rounded-sm px-4 py-3"
                            href={link.href}
                            data-id={link.customer}
                            key={index}
                        >
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
                        </Link>
                    )
                )}
            </AnimatedBackground>
            
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
