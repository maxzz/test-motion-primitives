import { type ComponentPropsWithRef } from "react";
import { useSnapshot } from "valtio";
import { type ExportItem } from "@/assets/generated/dev/all-samples-2";
import { editor } from "../0-all/8-editor-state";
import { classNames } from "@/utils";
import { Button } from "@/ui/shadcn";
import { CodeXml, Files, RotateCw } from "lucide-react";

export function DemoSourceSwitcher({ item, className, ...rest }: { item: ExportItem | undefined; } & ComponentPropsWithRef<"div">) {
    const showCode = useSnapshot(editor).showCode;
    return (
        <div className="py-1 flex items-center justify-between">
            <div className={classNames("flex items-center gap-1", className)} {...rest}>
                <Button
                    className={classNames("px-0 font-normal tracking-tighter", !showCode ? "underline" : "hover:no-underline")} variant="link" size="xs"
                    onClick={() => editor.showCode = false}
                >
                    Demo
                </Button>

                <Button
                    className={classNames("px-0 font-normal tracking-tighter", showCode ? "underline" : "hover:no-underline")} variant="link" size="xs"
                    onClick={() => editor.showCode = true}
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
                    <RotateCw className="pt-0.5 size-4" />
                </Button>

                <Button
                    className={classNames("font-normal tracking-tighter")} variant="outline" size="xs"
                    onClick={() => navigator.clipboard.writeText(item?.fileCnt || '')}
                    disabled={!item}
                >
                    <Files className="pt-0.5 size-4" />
                </Button>
            </div>
        </div>
    );
}
