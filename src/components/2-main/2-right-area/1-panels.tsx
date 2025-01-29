import { type ComponentPropsWithRef } from "react";
import { useSnapshot } from "valtio";
import { classNames } from "@/utils";
import { type ExportItem } from "@/assets/generated/dev/all-samples-2";
import { ScrollArea } from "@/ui/shadcn";
import { editor } from "../0-all/8-editor-state";
import { CodeHighlighter } from "./8-code-highlighter";
import { findExportItem } from "./8-find-item";
import { Button } from "@/ui/button";
import { SourceCodeDrawer } from "./2-drawer";

export function RightArea({ className }: ComponentPropsWithRef<"div">) {
    const uuid = useSnapshot(editor).uuid;
    const item = findExportItem(uuid);
    return (
        <div className={classNames("relative w-full h-full", className)}>
            <DemoScrollArea uuid={uuid} item={item} />
            <SourceCodeArea uuid={uuid} item={item} />
        </div>
    );
}

export function DemoScrollArea({ uuid, item }: { uuid: number | undefined; item: ExportItem | undefined; }) {
    return (
        <div className="relative flex flex-col gap-4 bg-green-300">
            <Button className="absolute left-4 top-4" variant="outline" size="icon" onClick={() => editor.isDrawerOpen = true}>
                Code
            </Button>

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

export function SourceCodeArea({ uuid, item }: { uuid: number | undefined; item: ExportItem | undefined; }) {
    return (
        <SourceCodeDrawer>
            <div className="bg-purple-400">
                <ScrollArea className="h-96 w-full">
                    <div className="h-full w-full text-xs whitespace-pre-wrap">
                        <CodeHighlighter code={item?.fileCnt} />
                    </div>
                </ScrollArea>
            </div>
        </SourceCodeDrawer>
    );
}
