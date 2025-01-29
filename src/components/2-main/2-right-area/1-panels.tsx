import { type ComponentPropsWithRef } from "react";
import { useSnapshot } from "valtio";
import { classNames } from "@/utils";
import { ScrollArea } from "@/ui/shadcn";
import { editor } from "../0-all/8-editor-state";
import { CodeHighlighter } from "./8-code-highlighter";
import { findExportItem } from "./8-find-item";

export function RightArea({ className }: ComponentPropsWithRef<"div">) {
    return (
        <div className={classNames("flex flex-col gap-4", className)}>
            <DemoScrollArea />
            <SourceCodeArea />
        </div>
    );
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
