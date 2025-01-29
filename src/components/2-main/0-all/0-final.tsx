import { ScrollArea } from "@/ui/shadcn";
import { allSamples, type ExportItem } from "@/assets/generated/dev/all-samples-2";
import { lastFname } from "@/utils/utils-os";
import { proxy, useSnapshot } from "valtio";
import { classNames } from "@/utils";
import { CodeHighlighter } from "./code-highlighter";

function findExportItem(uuid: number): ExportItem | undefined {
    if (!uuid) {
        return;
    }
    for (const [key, value] of Object.entries(allSamples)) {
        for (const item of value) {
            if (item.uuid === uuid) {
                return item;
            }
        }
    }
}

const editor = proxy({ uuid: 0 });

export function Main() {
    return (
        <main className="p-4 grid grid-cols-[auto_1fr] 1debug">
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
        <div className="px-4 py-2 bg-green-200">
            {Object.entries(allSamples).map(
                ([key, value]) => {
                    return (
                        <div key={key}>
                            <h2 className="text-xs font-bold">{key}</h2>
                            <ul className="px-4 text-xs flex flex-col">
                                {value.map(
                                    (item: ExportItem, idx: number) => {
                                        const isSelected = useSnapshot(editor).uuid === item.uuid;
                                        const text = lastFname(item.fullname);
                                        return (
                                            <li
                                                className={classNames("py-0.5 select-none cursor-pointer", isSelected && "bg-green-600 font-semibold")}
                                                onClick={() => editor.uuid = item.uuid}
                                                key={item.uuid}
                                            >
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
    const uuid = useSnapshot(editor).uuid;
    const item = findExportItem(uuid);
    return (
        <div className="flex flex-col gap-4 bg-green-300">
            <ScrollArea className="w-full h-96">
                <div className="h-full w-full flex flex-col gap-4">
                    {item
                        ? <item.component />
                        : uuid
                    }
                </div>
            </ScrollArea>
        </div>
    );
}

function SourceCodeArea() {
    const uuid = useSnapshot(editor).uuid;
    const item = findExportItem(uuid);
    return (
        <div className="flex flex-col gap-4 bg-green-400">
            <ScrollArea className="h-96 w-full">
                <div className="h-full w-full text-xs whitespace-pre-wrap">
                    <CodeHighlighter code={item?.fileCnt} />
                    {/* {item?.fileCnt} */}
                </div>
            </ScrollArea>
        </div>
    );
}
