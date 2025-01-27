import { ScrollArea } from "@/ui/shadcn";

export function Main() {
    return (
        <main className="p-4 grid grid-cols-2 debug">
            <ComponentsList />

            <div className="flex flex-col gap-4">
                <DemoScrollArea />
                <SourceCodeArea />
            </div>

        </main>
    );
}

function ComponentsList() {
    return (
        <div className="bg-green-200">
            <div className="flex flex-col gap-4">
                <h2 className="text-2xl font-bold">All Demos</h2>
                <ul className="flex flex-col gap-2">
                    <li><a href="#simple">Simple</a></li>
                    <li><a href="#accordion">Accordion</a></li>
                    <li><a href="#accordion-with-transitions">Accordion with transitions</a></li>
                    <li><a href="#accordion-with-transitions-2">Accordion with transitions 2</a></li>
                    <li><a href="#accordion-with-transitions-3">Accordion with transitions 3</a></li>
                    <li><a href="#accordion-with-transitions-4">Accordion with transitions 4</a></li>
                    <li><a href="#accordion-with-transitions-5">Accordion with transitions 5</a></li>
                    <li><a href="#accordion-with-transitions-6">Accordion with transitions 6</a></li>
                    <li><a href="#accordion-with-transitions-7">Accordion with transitions 7</a></li>
                    <li><a href="#accordion-with-transitions-8">Accordion with transitions 8</a></li>
                    <li><a href="#accordion-with-transitions-9">Accordion with transitions 9</a></li>
                    <li><a href="#accordion-with-transitions-10">Accordion with transitions 10</a></li>
                    <li><a href="#accordion-with-transitions-11">Accordion with transitions 11</a></li>
                    <li><a href="#accordion-with-transitions-12">Accordion with transitions 12</a></li>
                    <li><a href="#accordion-with-transitions-13">Accordion with transitions 13</a></li>
                    <li><a href="#accordion-with-transitions-14">Accordion with transitions 14</a></li>
                    <li><a href="#accordion-with-transitions-15">Accordion with transitions 15</a></li>
                </ul>
            </div>
            <div className="flex flex-col gap-4">
                <h2 className="text-2xl font-bold">Demos</h2>
                <ul className="flex flex-col gap-2">
                    <li><a href="#demo-1">Demo 1</a></li>
                    <li><a href="#demo-2">Demo 2</a></li>
                    <li><a href="#demo-3">Demo 3</a></li>
                    <li><a href="#demo-4">Demo 4</a></li>
                    <li><a href="#demo-5">Demo 5</a></li>
                    <li><a href="#demo-6">Demo 6</a></li>
                    <li><a href="#demo-7">Demo 7</a></li>
                    <li><a href="#demo-8">Demo 8</a></li>
                    <li><a href="#demo-9">Demo 9</a></li>
                    <li><a href="#demo-10">Demo 10</a></li>
                    <li><a href="#demo-11">Demo 11</a></li>
                    <li><a href="#demo-12">Demo 12</a></li>
                    <li><a href="#demo-13">Demo 13</a></li>
                    <li><a href="#demo-14">Demo 14</a></li>
                    <li><a href="#demo-15">Demo 15</a></li>
                </ul>
            </div>
        </div>
    );
}

function DemoScrollArea() {
    return (
        <div className="flex flex-col gap-4 bg-green-300">
            <ScrollArea className="w-full h-96">
                <div className="h-full w-full flex flex-col gap-4">
                    2
                </div>
            </ScrollArea>
        </div>
    );
}

function SourceCodeArea() {
    return (
        <div className="flex flex-col gap-4 bg-green-400">
            <ScrollArea className="h-96 w-full">
                <div className="h-full w-full flex flex-col gap-4">
                    3
                </div>
            </ScrollArea>
        </div>
    );
}
