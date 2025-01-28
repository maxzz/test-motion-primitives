import path from "path";
import fs from "fs";
import { writeFileSync } from "./node-os-utlis";
import { lastFname, toUnix } from "../src/utils/utils-os";

//prompt: create a function collect all js file names in the src/assets/samples folder and create single file with all the samples

const inFolder = './src/assets/samples'; // const inFolder = path.resolve('./src/assets/samples');
const outFolder = './src/assets/generated';
const replaceOutFolder = 'src/assets/samples';
const replaceOutFolderTo = '../../samples';

type SampleItem = {
    dir: string;
    last: string;
    name: string;
    content: string;
    funcName: string;
};

function collectSampleFiles(folder: string): Map<string, SampleItem[]> {
    const rv = new Map<string, SampleItem[]>();
    collectSamplesRecursive(folder, rv);
    return rv;

    function collectSamplesRecursive(folder: string, rv: Map<string, SampleItem[]>) {
        const fnames = fs.readdirSync(`${folder}`);

        for (const fname of fnames) {
            const fullname = `${folder}/${fname}`;
            const st = fs.statSync(fullname);

            if (st.isDirectory()) {
                collectSamplesRecursive(path.join(folder, fname), rv);
                continue;
            } else if (st.isFile() && fname.match(/\.[jt]sx?$/)) {
                const content = fs.readFileSync(fullname, "utf-8");

                const exportFunction = content.match(/export\s+function\s+(\w+)/);
                if (!exportFunction) {
                    console.log('%cno export function "%s"', 'color:red', fullname);
                    continue;
                }

                // add to res

                if (!rv.has(folder)) {
                    rv.set(folder, []);
                }
                rv.get(folder)?.push({
                    dir: toUnix(folder),
                    last: lastFname(folder),
                    name: fname,
                    content,
                    funcName: exportFunction[1],
                });
            }
        }

        // sort filenames in numeric order
        for (const [key, value] of rv) {
            value.sort((a, b) => Intl.Collator(undefined, { numeric: true }).compare(a.name, b.name));
        }

        // setup dir
        for (const [key, value] of rv) {
            value.forEach((item) => {
                item.dir = toUnix(item.dir).replace(replaceOutFolder, replaceOutFolderTo);
            });
        }
    }
}

type ExportItem = {
    fullname: string;
    component: string;
    fileCnt: string;
};

type ExportItems = Record<string, ExportItem[]>;

function main() {
    const res = collectSampleFiles(inFolder);
    const collected = [...res.entries()];

    const lines: string[] = [];

    // generate imports
    collected.forEach(
        ([key, value]) => {
            lines.push(`// ${lastFname(key)}`);

            const items = value.map((item) => `import { ${item.funcName} } from "${item.dir}/${item.name}";`);
            lines.push(items.join('\n'));
        }
    );

    // generate types
    lines.push(
        "",
        "export type ExportItem = {",
        "    fullname: string;",
        "    component: () => JSX.Element;",
        "    fileCnt: string;",
        "};",
        "",
    );

    // generate exports
    const exportItems: ExportItems = collected.reduce(
        (acc, [key, value]) => {
            const items = value.map(
                (item) => {
                    const rv: ExportItem = {
                        fullname: item.dir + '/' + item.name,
                        component: item.funcName,
                        fileCnt: '',
                    };
                    return rv;
                }
            );
            acc[lastFname(key)] = items;
            return acc;
        }, {} as ExportItems
    );

    const exports = `export const allSamples: Record<string, ExportItem[]> = \n${JSON.stringify(exportItems, null, 2)}`;
    lines.push(exports);

    // convert component name to component reference
    let txt = lines.join('\n');
    txt = txt.replaceAll(/"component":\s+"([^"]+)"/g, 'component: $1');

    // write it down
    writeFileSync(`${outFolder}/dev/all-samples-2.ts`, txt);
}

console.log('%cIn folder "%s"', 'color:orange', inFolder);

main();
