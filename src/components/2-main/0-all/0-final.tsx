import { Layout1, Layout2, Layout3 } from "../1-demos";
import { TestDescendant } from "./7-test-descendant";

export function Main() {
    return (
        <main className="p-4">
            <TestDescendant />
            <Layout1 />            {/* Only this one has exit animation */}
            <Layout2 />
            <Layout3 />
        </main>
    );
}
