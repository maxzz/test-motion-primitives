import { type ComponentPropsWithRef } from "react";
import { useSnapshot } from "valtio";
import { type ExportItem } from "@/assets/generated/dev/all-samples-2";
import { editor } from "../0-all/8-editor-state";
import { classNames } from "@/utils";
import { Button } from "@/ui/shadcn";
import { CodeXml } from "lucide-react";

export function DemoSourceSwitcher({ item, className, ...rest }: { item: ExportItem | undefined; } & ComponentPropsWithRef<"div">) {
    const isDrawerOpen = useSnapshot(editor).isDrawerOpen;
    return (
        <div className="py-1 flex items-center justify-between">
            <div className={classNames("flex items-center gap-1", className)} {...rest}>
                <Button
                    className={classNames("px-0 font-normal tracking-tighter", !isDrawerOpen ? "underline" : "hover:no-underline")} variant="link" size="xs"
                    onClick={() => editor.isDrawerOpen = false}
                >
                    Demo
                </Button>

                <Button
                    className={classNames("px-0 font-normal tracking-tighter", isDrawerOpen ? "underline" : "hover:no-underline")} variant="link" size="xs"
                    onClick={() => editor.isDrawerOpen = true}
                >
                    {/* <CodeXml className="pt-0.5 size-4" /> */}
                    Code
                </Button>
            </div>

            <div className={classNames("flex items-center gap-1", className)} {...rest}>
                <Button
                    className={classNames("font-normal tracking-tighter")} variant="outline" size="xs"
                    onClick={() => editor.reload = editor.reload + 1}
                >
                    Reload
                </Button>

                <Button
                    className={classNames("font-normal tracking-tighter")} variant="outline" size="xs"
                    onClick={() => navigator.clipboard.writeText(item?.fileCnt || '')}
                    disabled={!item}
                >
                    Copy
                </Button>
            </div>
        </div>
    );
}
