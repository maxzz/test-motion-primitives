import { type ReactNode } from "react";
import { useSnapshot } from "valtio";
import * as Dr from "@/ui/shadcn/drawer";
import { editor } from "../0-all/8-editor-state";

export function SourceCodeDrawer({ children }: { children: ReactNode; }) {
    const isDrawerOpen = useSnapshot(editor).isDrawerOpen;
    return (
        <Dr.Drawer shouldScaleBackground={false} open={isDrawerOpen} onOpenChange={() => editor.isDrawerOpen = false} direction="right" modal>
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
