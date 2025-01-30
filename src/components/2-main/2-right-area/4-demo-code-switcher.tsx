import { useSnapshot } from "valtio";
import { editor } from "../0-all/8-editor-state";
import { classNames } from "@/utils";
import { Button } from "@/ui/shadcn";

export function DemoSourceSwitcher() {
    const isDrawerOpen = useSnapshot(editor).isDrawerOpen;
    return (
        <div className="absolute left-4 top-4 z-10 flex items-center gap-1">
            <Button
                className={classNames("px-0", isDrawerOpen && "underline")} variant="link" size="xs"
                onClick={() => {
                    editor.isDrawerOpen = true;
                    console.log('isDrawerOpen', editor.isDrawerOpen);
                }}
            >
                Demo
            </Button>
            <Button
                className={classNames("px-0", isDrawerOpen && "underline")} variant="link" size="xs"
                onClick={() => {
                    editor.isDrawerOpen = true;
                    console.log('isDrawerOpen', editor.isDrawerOpen);
                }}
            >
                Code
            </Button>
        </div>
    );
}
