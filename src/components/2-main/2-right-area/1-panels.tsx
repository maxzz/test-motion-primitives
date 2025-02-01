import { type ComponentPropsWithRef } from "react";
import { useSnapshot } from "valtio";
import { editor } from "../0-all/8-editor-state";
import { DemoScrollArea } from "./2-demo-area";
import { SourceCodeArea } from "./3-source-area";
import { findExportItem } from "./8-find-item";
import { DemoSourceSwitcher } from "./4-demo-code-switcher";

export function RightArea(props: ComponentPropsWithRef<"div">) {
    const uuid = useSnapshot(editor).uuid;
    const item = findExportItem(uuid);
    const showCode = useSnapshot(editor).showCode;
    return (
        <div {...props}>
            <DemoSourceSwitcher className="px-3" item={item} />

            {!showCode && <DemoScrollArea item={item} uuid={uuid} />}
            {showCode && <SourceCodeArea item={item} uuid={uuid} />}
        </div>
    );
}
