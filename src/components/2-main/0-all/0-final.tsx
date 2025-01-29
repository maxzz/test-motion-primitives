import { ComponentsList } from "../1-left-area/1-components-list";
import { RightArea } from "../2-right-area";

export function Main() {
    return (
        <main className="p-4 grid grid-cols-[auto_1fr] 1debug">
            <ComponentsList className="px-4 py-2 bg-green-200" />
            <RightArea className="" />
        </main>
    );
}
