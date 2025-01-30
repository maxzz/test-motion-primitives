import { type ComponentPropsWithRef } from "react";
import { useSnapshot } from "valtio";
import { classNames } from "@/utils";
import { editor } from "../0-all/8-editor-state";
import { DemoScrollArea } from "./3-demo-area";
import { SourceCodeArea } from "./4-source-area";
import { findExportItem } from "./8-find-item";

export function RightArea({ className }: ComponentPropsWithRef<"div">) {
    const uuid = useSnapshot(editor).uuid;
    const item = findExportItem(uuid);
    return (
        <div className={classNames("relative w-full h-full", className)}>
            <DemoScrollArea uuid={uuid} item={item} />
            <SourceCodeArea uuid={uuid} item={item} />
        </div>
    );
}
