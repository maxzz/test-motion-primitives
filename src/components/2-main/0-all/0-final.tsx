import { ComponentsList } from "./1-components-list";
import { RightArea } from "../2-right-area";

export function Main() {
    return (
        <main className="p-4 grid grid-cols-[auto_1fr] 1debug">
            <ComponentsList />
            <RightArea className="flex flex-col gap-4" />
        </main>
    );
}
