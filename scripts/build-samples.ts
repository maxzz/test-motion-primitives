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

    const final: string[] = [];

    // generate imports
    collected.forEach(
        ([key, value]) => {
            final.push(`// ${lastFname(key)}`);

            const items = value.map((item) => `import { ${item.funcName} } from "${item.dir}/${item.name}";`);
            final.push(items.join('\n'));
        }
    );

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

    final.push(
        "",
        "export type ExportItem = {",
        "    fullname: string;",
        "    component: () => JSX.Element;",
        "    fileCnt: string;",
        "};",
        "",
    );

    const exports = `export const allSamples: Record<string, ExportItem[]> = \n${JSON.stringify(exportItems, null, 2)}`;
    final.push(exports);

    let txt = final.join('\n');
    txt = txt.replaceAll(/"component":\s+"([^"]+)"/g, 'component: $1'); // convert component name to component reference


    // generate exports
    // Object.keys(exportItems).forEach(
    //     (key) => {
    //         const value = exportItems[key];
    //         if (typeof value === 'string') {
    //             final.push(value);
    //         } else {
    //             value.forEach((item) => {
    //                 final.push(item);
    //             });
    //         }
    //     }
    // );


    // const names = final
    //     .map(
    //         (item) => {
    //             const name = item.match(/export\s+\{([^}]+)\}\s+from/)?.[1];
    //             if (name) {
    //                 console.log('%c// %s', 'color:green', name);
    //                 return name;
    //             }
    //         }
    //     ).filter((item) => item);

    // console.log('%c// names', 'color:green', JSON.stringify(names, null, 2));

    writeFileSync(`${outFolder}/dev/all-samples-2.ts`, txt);
}

console.log('%cIn folder "%s"', 'color:orange', inFolder);

main();
