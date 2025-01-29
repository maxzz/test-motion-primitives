import { allSamples, type ExportItem } from "@/assets/generated/dev/all-samples-2";
import { lastFname, classNames } from "@/utils";
import { useSnapshot } from "valtio";
import { editor } from "./8-editor-state";

export function ComponentsList() {
    return (
        <div className="px-4 py-2 bg-green-200">
            {Object.entries(allSamples).map(
                ([key, value]) => {
                    return (
                        <div key={key}>
                            <h2 className="text-xs font-bold">{key}</h2>
                            <ul className="px-4 text-xs flex flex-col">
                                {value.map(
                                    (item: ExportItem, idx: number) => {
                                        const isSelected = useSnapshot(editor).uuid === item.uuid;
                                        const text = lastFname(item.fullname);
                                        return (
                                            <li
                                                className={classNames("py-0.5 select-none cursor-pointer", isSelected && "bg-green-600 font-semibold")}
                                                onClick={() => editor.uuid = item.uuid}
                                                key={item.uuid}
                                            >
                                                {text}
                                            </li>
                                        );
                                    }
                                )}
                            </ul>
                        </div>
                    );
                }
            )}
        </div>
    );
}
