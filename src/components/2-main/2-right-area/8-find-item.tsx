import { type ExportItem, allSamples } from "@/assets/generated/dev/all-samples-2";

export function findExportItem(uuid: number): ExportItem | undefined {
    if (!uuid) {
        return;
    }
    for (const [key, value] of Object.entries(allSamples)) {
        for (const item of value) {
            if (item.uuid === uuid) {
                return item;
            }
        }
    }
}
