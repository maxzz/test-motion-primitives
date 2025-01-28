import { ScrollArea } from "@/ui/shadcn";
import { allSamples } from "@/assets/generated/dev/all-samples-2";
import { i } from "motion/react-client";
import { getFilenameAndExt, lastFname } from "@/utils/utils-os";

export function Main() {
    return (
        <main className="p-4 grid grid-cols-2 debug">
            <ComponentsList />

            <div className="flex flex-col gap-4">
                <DemoScrollArea />
                <SourceCodeArea />
            </div>

        </main>
    );
}

function ComponentsList() {
    return (
        <div className="bg-green-200">
            {Object.entries(allSamples).map(
                ([key, value]) => {
                    return (
                        <div key={key}>
                            <h2 className="text-xs font-bold">{key}</h2>
                            <ul className="px-4 text-xs flex flex-col gap-1">
                                {value.map(
                                    (item, idx) => {
                                        const text = lastFname(item.fullname);
                                        return (
                                            <li className="" key={idx}>
                                                {text}
                                            </li>
                                        );
                                    }
                                )}
                            </ul>
                        </div>
                    );
                }
            )}
        </div>
    );
}

function DemoScrollArea() {
    return (
        <div className="flex flex-col gap-4 bg-green-300">
            <ScrollArea className="w-full h-96">
                <div className="h-full w-full flex flex-col gap-4">
                    2
                </div>
            </ScrollArea>
        </div>
    );
}

function SourceCodeArea() {
    return (
        <div className="flex flex-col gap-4 bg-green-400">
            <ScrollArea className="h-96 w-full">
                <div className="h-full w-full flex flex-col gap-4">
                    3
                </div>
            </ScrollArea>
        </div>
    );
}
