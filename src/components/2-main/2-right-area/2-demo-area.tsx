import { type ExportItem } from "@/assets/generated/dev/all-samples-2";
import { ScrollArea } from "@/ui/shadcn";

export function DemoScrollArea({ uuid, item }: { uuid: number | undefined; item: ExportItem | undefined; }) {
    return (
        <div className="relative w-full h-full bg-muted">
            <div className="absolute inset-0">

                <ScrollArea className="p-2 w-full h-full rounded-md">
                    <div className="w-full h-full bg-background outline outline-1 outline-muted -outline-offset-1">
                        {item
                            ? <item.component />
                            : uuid
                        }
                    </div>
                </ScrollArea>

            </div>
        </div>
    );
}

