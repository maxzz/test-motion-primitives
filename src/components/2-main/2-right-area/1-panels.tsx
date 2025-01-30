import { type ComponentPropsWithRef } from "react";
import { useSnapshot } from "valtio";
import { classNames } from "@/utils";
import { editor } from "../0-all/8-editor-state";
import { DemoScrollArea } from "./2-demo-area";
import { SourceCodeArea } from "./3-source-area";
import { findExportItem } from "./8-find-item";
import { DemoSourceSwitcher } from "./4-demo-code-switcher";

export function RightArea({ className }: ComponentPropsWithRef<"div">) {
    const uuid = useSnapshot(editor).uuid;
    const item = findExportItem(uuid);
    const isDrawerOpen = useSnapshot(editor).isDrawerOpen;
    return (
        <div className={classNames("relative w-full h-full", className)}>

            <DemoSourceSwitcher className="px-3" />

            {!isDrawerOpen && <DemoScrollArea uuid={uuid} item={item} />}
            {isDrawerOpen && <SourceCodeArea uuid={uuid} item={item} />}
            
        </div>
    );
}
