import { ScrollArea } from "@/ui/shadcn";
import { allSamples, type ExportItem } from "@/assets/generated/dev/all-samples-2";
import { proxy, useSnapshot } from "valtio";
import { CodeHighlighter } from "./8-code-highlighter";
import { ComponentsList } from "./1-components-list";

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

export const editor = proxy({ uuid: 0 });

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
                </div>
            </ScrollArea>
        </div>
    );
}
