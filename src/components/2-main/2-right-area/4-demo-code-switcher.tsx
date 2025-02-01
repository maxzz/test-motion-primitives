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
                    className={classNames("px-0", buttonClasses, !showCode ? "underline" : "hover:no-underline")} variant="link" size="xs"
                    onClick={() => editor.showCode = false}
                >
                    Preview
                </Button>

                <Button
                    className={classNames("px-0", buttonClasses, showCode ? "underline" : "hover:no-underline")} variant="link" size="xs"
                    onClick={() => editor.showCode = true}
                >
                    {/* <CodeXml className="size-4 stroke-[1.5]" /> */}
                    Code
                </Button>
            </div>

            <div className={classNames("flex items-center gap-1", className)} {...rest}>
                {showCode ?
                    <Button
                        className={buttonClasses} variant="outline" size="xs" title="Copy to clipboard"
                        onClick={() => navigator.clipboard.writeText(item?.fileCnt || '')}
                        disabled={!item}
                    >
                        <Files className="size-4 stroke-[1.5]" />
                    </Button>
                    :

                    <Button
                        className={buttonClasses} variant="outline" size="xs" title="Reload"
                        onClick={() => editor.reload = editor.reload + 1}
                    >
                        <RotateCw className="size-4 stroke-[1.5]" />
                    </Button>
                }

            </div>
        </div>
    );
}

const buttonClasses = "font-normal tracking-tighter active:scale-[.97]";
