import { ScrollArea } from "@/ui/shadcn";
import { ComponentsList } from "../1-left-area";
import { RightArea } from "../2-right-area";

export function Main() {
    return (
        <main className="grid grid-cols-[minmax(9rem,_auto)_2fr] 1debug">

            <div className="relative w-full h-full">
                <div className="absolute inset-0">
                    <ScrollArea className="h-full w-full">
                        <ComponentsList className="px-4 py-3 bg-muted/30 border-foreground/10 border-r" />
                    </ScrollArea>
                </div>
            </div>

            <RightArea className="relative w-full h-full" />
        </main>
    );
}
