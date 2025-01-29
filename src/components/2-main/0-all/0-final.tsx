import { ScrollArea } from "@/ui/shadcn";
import { allSamples, type ExportItem } from "@/assets/generated/dev/all-samples-2";
import { useSnapshot } from "valtio";
import { CodeHighlighter } from "../2-right-area/8-code-highlighter";
import { ComponentsList } from "./1-components-list";
import { DemoScrollArea, SourceCodeArea } from "../2-right-area";

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
