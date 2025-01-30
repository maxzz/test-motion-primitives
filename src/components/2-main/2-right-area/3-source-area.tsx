import { type ExportItem } from "@/assets/generated/dev/all-samples-2";
import { ScrollArea } from "@/ui/shadcn";
import { editor } from "../0-all/8-editor-state";
import { CodeHighlighter } from "./8-code-highlighter";
import { Button } from "@/ui/shadcn";
import { CircleArrowLeft } from "lucide-react";

export function SourceCodeArea({ uuid, item }: { uuid: number | undefined; item: ExportItem | undefined; }) {
    return (
        <div className="relative w-full h-full">
            <div className="absolute inset-0 bg-purple-400">

                <Button className="absolute top-4 right-4 z-10 bg-background" onClick={() => editor.isDrawerOpen = false}>
                    <CircleArrowLeft />
                </Button>

                <ScrollArea className="w-full h-full" fullHeight>
                    <div className="w-full h-full text-xs 1whitespace-pre-wrap">
                        <CodeHighlighter code={item?.fileCnt} />
                    </div>
                </ScrollArea>
            </div>
        </div>
    );
}

//TODO: reload demo page
//TODO: code icon
//TODO: drawer close button
