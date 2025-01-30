import { type ExportItem } from "@/assets/generated/dev/all-samples-2";
import { ScrollArea } from "@/ui/shadcn";
import { editor } from "../0-all/8-editor-state";
import { Button } from "@/ui/shadcn";

export function DemoScrollArea({ uuid, item }: { uuid: number | undefined; item: ExportItem | undefined; }) {
    return (
        <div className="relative w-full h-full flex flex-col gap-4 bg-green-300">
            <Button
                className="absolute left-4 top-4 z-10" variant="outline" size="icon"
                onClick={() => {
                    editor.isDrawerOpen = true;
                    console.log('isDrawerOpen', editor.isDrawerOpen);
                }}
            >
                Code
            </Button>

            <div className="relative w-full h-full">
                <div className="absolute inset-0">
                    <ScrollArea className="w-full h-full bg-purple-400">
                        <div className="w-full h-full flex flex-col gap-4">
                            {item
                                ? <item.component />
                                : uuid
                            }
                        </div>
                    </ScrollArea>
                </div>
            </div>
        </div>
    );
}
