import { type RefObject, type ReactNode } from "react";
import { useSnapshot } from "valtio";
import * as Dr from "@/ui/shadcn/drawer";
import { editor } from "../0-all/8-editor-state";

export function SourceCodeDrawer({ children, container }: { children: ReactNode; container?: RefObject<HTMLDivElement>; }) {
    const isDrawerOpen = useSnapshot(editor).isDrawerOpen;
    console.log('container', container?.current);
    return (
        <Dr.Drawer
            shouldScaleBackground={false}
            open={isDrawerOpen}
            onOpenChange={() => editor.isDrawerOpen = false}
            direction="right"
            modal
            container={container?.current}
        >
            <Dr.DrawerContent
                className="w-full h-full max-w-3xl rounded outline-none"
                withoutOverlay
                hiddenTitle="Source Code"
            >
                {children}
            </Dr.DrawerContent>
        </Dr.Drawer>
    );
}
