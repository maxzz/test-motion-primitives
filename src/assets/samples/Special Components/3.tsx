"use client";
import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { GlowEffect } from "@/components/motion-ui/glow-effect";
import { TextLoop } from "@/components/motion-ui/text-loop";
import { SearchIcon } from "lucide-react";
import { cn } from "@/utils";

export function BackgroundGlowInput() {
    const [search, setSearch] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(
        () => {
            isLoading && setTimeout(() => setIsLoading(false), 8000);
        }, [isLoading]
    );

    return (
        <div className="flex items-center justify-center px-6 py-24 sm:py-32 lg:px-8">
            <div className="relative w-full max-w-96 h-14">

                <motion.div
                    className="absolute inset-0"
                    animate={{ opacity: isLoading ? 1 : 0, scale: isLoading ? 1 : 0.9, }}
                    transition={{ duration: 0.5, ease: "easeInOut", }}
                >
                    <GlowEffect colors={["#0894FF", "#C959DD", "#FF2E54", "#FF9004"]} mode="flowHorizontal" blur="medium" />
                </motion.div>

                <div className="relative w-full max-w-96 h-14 rounded-xl [perspective:1000px]">

                    <input
                        className={cn("h-full w-full rounded-xl bg-zinc-100 py-2 pl-[52px] pr-6 text-zinc-800 outline-none placeholder:text-black/30 dark:bg-zinc-800 dark:text-white/60 dark:placeholder:text-white/30")}
                        placeholder={isLoading ? "" : "Search..."}
                        value={isLoading ? "" : search}
                        onChange={(e) => setSearch(e.target.value)}
                        onKeyDown={(e) => { if (e.key === "Enter") { setIsLoading(true); } }}
                        disabled={isLoading}
                        type="text"
                    />

                    {isLoading && (
                        <TextLoop
                            className="absolute left-[52px] top-1/2 h-6 w-full -translate-y-1/2 leading-6 text-zinc-800 dark:text-white/60 pointer-events-none"
                            trigger={isLoading}
                            variants={{
                                initial: { opacity: 0, y: 20, rotateX: -90, },
                                animate: { opacity: 1, y: 0, rotateX: 0, },
                                exit: { opacity: 0, y: -20, rotateX: 90, },
                            }}
                            transition={{ type: "spring", stiffness: 320, damping: 20, mass: 1, }}
                        >
                            <span>{search}</span>
                            <span>Searching...</span>
                        </TextLoop>
                    )}

                    <SearchIcon className="absolute left-4 top-1/2 h-6 w-6 -translate-y-1/2 text-zinc-700 dark:text-white/30" />
                </div>

            </div>
        </div>
    );
}
