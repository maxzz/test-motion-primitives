import { type ComponentProps } from "react";
import { useSnapshot } from "valtio";
import { classNames } from "@/utils";
import { ScrollArea } from "@/ui/shadcn";
import { allSamples, type ExportItem } from "@/assets/generated/dev/all-samples-2";
import { CodeHighlighter } from "./8-code-highlighter";
import { editor } from "../0-all/8-editor-state";

export function RightArea({ className }: ComponentProps<"div">) {
    return (
        <div className={classNames("flex flex-col gap-4", className)}>
            <DemoScrollArea />
            <SourceCodeArea />
        </div>
    );
}

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

export function DemoScrollArea() {
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

export function SourceCodeArea() {
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
