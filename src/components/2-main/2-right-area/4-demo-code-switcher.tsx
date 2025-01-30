import { type ComponentPropsWithRef } from "react";
import { useSnapshot } from "valtio";
import { editor } from "../0-all/8-editor-state";
import { classNames } from "@/utils";
import { Button } from "@/ui/shadcn";
import { CodeXml } from "lucide-react";

export function DemoSourceSwitcher({ className, ...rest }: ComponentPropsWithRef<"div">) {
    const isDrawerOpen = useSnapshot(editor).isDrawerOpen;
    return (
        <div className={classNames("flex items-center gap-1", className)} {...rest}>
            <Button
                className={classNames("px-0 font-normal", !isDrawerOpen ? "underline" : "hover:no-underline")} variant="link" size="xs"
                onClick={() => editor.isDrawerOpen = false}
            >
                Demo
            </Button>
            <Button
                className={classNames("px-0 font-normal", isDrawerOpen ? "underline" : "hover:no-underline")} variant="link" size="xs"
                onClick={() => editor.isDrawerOpen = true}
            >
                {/* <CodeXml className="pt-0.5 size-4" /> */}
                Code
            </Button>
        </div>
    );
}

//TODO: reload demo page
