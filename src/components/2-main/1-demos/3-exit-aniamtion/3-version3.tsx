import { useSnapshot } from "valtio";
// import { appSettings } from "@/store";
import { AnimatePresence, AnimationProps, motion } from "motion/react";
import { Demo1Simple } from "../1-simple";
import { Demo2Accordion } from "../2-accordion";
import { TestDescendant } from "../../0-all/7-test-descendant";

const transitionA: AnimationProps = {
    initial: { opacity: 0, scale: 0, transformOrigin: "top right" },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0, transformOrigin: "top left", transition: { duration: 0.5 } },
    transition: { duration: 2 },
};

function MotionWrapper({ children, ...rest }: { children: React.ReactNode; key: string; }) {
    return (
        <motion.div
            {...transitionA}
            {...rest}
        // className="origin-top-right"
        >
            {children}
        </motion.div>
    );
}

function AllDemos() {
    // const demo = useSnapshot(appSettings).demo;

    // if (demo === "simple") {
    //     return (
    //         <MotionWrapper key={"simple"}>
    //             <Demo1Simple />
    //         </MotionWrapper>
    //     );
    // }

    // if (demo === "accordion") {
    //     return (
    //         <MotionWrapper key={"accordion"}>
    //             <Demo2Accordion />
    //         </MotionWrapper>
    //     );
    // }
}

export function Layout3() {
    // const demo = useSnapshot(appSettings).demo;
    return (
        <main className="p-4">
            <TestDescendant />

            <AnimatePresence initial={false} mode="popLayout">
                {/* <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 5 }}
                > */}
                <div>
                    {/* <AllDemos /> */}
                </div>
                {/* </motion.div> */}
            </AnimatePresence>
        </main>
    );
}
