import { type ExportItem } from "@/assets/generated/dev/all-samples-2";
import { ScrollArea } from "@/ui/shadcn";
import { CodeHighlighter } from "./8-code-highlighter";

export function SourceCodeArea({ uuid, item }: { uuid: number | undefined; item: ExportItem | undefined; }) {
    return (
        <div className="relative w-full h-full bg-muted">
            <div className="absolute inset-0">

                <ScrollArea className="p-2 w-full h-full rounded-md" fullHeight>
                    <div className="w-full h-full">
                        <CodeHighlighter code={item?.fileCnt} />
                    </div>
                </ScrollArea>

            </div>
        </div>
    );
}
