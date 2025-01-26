import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useTimeoutImperative } from "@/utils/util-hooks";

const timeout = 1000;

export function Demo1Simple() {
    const [show, setShow] = useState(false);
    const [isDone, setIsDone] = useState(false);
    const [showMsg, setShowMsg] = useState(false);

    const { set } = useTimeoutImperative(() => {
        setShowMsg(false);
    });

    return (
        <div className="my-4 text-sm">

            <div className="py-1 border-sky-600 border-b flex items-center justify-between gap-2">
                <button
                    className="px-2 py-1 min-w-16 border-sky-600 border rounded shadow active:scale-95"
                    type="button"
                    onClick={() => {
                        !show && setIsDone(false);
                        setShowMsg(true);
                        setShow(v => !v);
                    }}
                >
                    {show ? "Hide" : "Show"}
                </button>

                <AnimatePresence>
                    {showMsg && (
                        <motion.div
                            className="text-xs"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: .8 }}
                        >
                            {isDone ? 'exit animation done' : 'element visible'}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <div className="grid place-items-center">
                <AnimatePresence
                    onExitComplete={() => {
                        setIsDone(true);
                        set(timeout);
                    }}
                >
                    {show && (
                        <motion.div
                            initial={{
                                opacity: 0,
                            }}
                            animate={{
                                opacity: 1,
                            }}
                            exit={{
                                opacity: 0,
                                transition: {
                                    duration: 3,
                                    ease: "easeOut",
                                },
                            }}
                            transition={{
                                duration: 2,
                            }}
                        >
                            <div className="my-4 size-24 bg-sky-500 rounded-md border-input border-4">
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

        </div>
    );
}
