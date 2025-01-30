import { useSnapshot } from "valtio";
import { type ExportItem } from "@/assets/generated/dev/all-samples-2";
import { editor } from "../0-all/8-editor-state";
import { ScrollArea } from "@/ui/shadcn";
import { Button } from "@/ui/shadcn";
import { classNames } from "@/utils";

export function DemoScrollArea({ uuid, item }: { uuid: number | undefined; item: ExportItem | undefined; }) {
    return (
        <div className="relative p-2 w-full h-full bg-muted">
            {/* <Button
                className="absolute left-4 top-4 z-10" variant="outline" size="icon"
                onClick={() => {
                    editor.isDrawerOpen = true;
                    console.log('isDrawerOpen', editor.isDrawerOpen);
                }}
            >
                Code
            </Button> */}

            <div className="relative w-full h-full">
                <div className="absolute inset-0">
                    <ScrollArea className="w-full h-full">
                        <div className="w-full h-full bg-background outline outline-1 outline-muted -outline-offset-1 rounded-md">
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
