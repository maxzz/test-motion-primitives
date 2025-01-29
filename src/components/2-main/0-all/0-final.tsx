import { ComponentsList } from "./1-components-list";
import { DemoScrollArea, SourceCodeArea } from "../2-right-area";

export function Main() {
    return (
        <main className="p-4 grid grid-cols-[auto_1fr] 1debug">
            <ComponentsList />

            <div className="flex flex-col gap-4">
                <DemoScrollArea />
                <SourceCodeArea />
            </div>

        </main>
    );
}
