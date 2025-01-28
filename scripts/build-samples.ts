import path from "path";
import fs from "fs";
import { lastFname, toUnix } from "../src/utils/utils-os";
import { writeFileSync } from "./node-os-utlis";

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
    const res = new Map<string, SampleItem[]>();

    collectSamplesRecursive(folder, res);

    return res;

    function collectSamplesRecursive(folder: string, res: Map<string, SampleItem[]>) {
        // console.log("folder", folder);

        const fnames = fs.readdirSync(`${folder}`);

        for (const fname of fnames) {
            const fullname = `${folder}/${fname}`;
            const st = fs.statSync(fullname);

            if (st.isDirectory()) {
                collectSamplesRecursive(path.join(folder, fname), res);
                continue;
            } else if (st.isFile() && fname.match(/\.[jt]sx?$/)) {
                const content = fs.readFileSync(fullname, "utf-8");

                const exportFunction = content.match(/export\s+function\s+(\w+)/);
                if (!exportFunction) {
                    console.log('%cno export function "%s"', 'color:red', fullname);
                    continue;
                }

                // add to res

                if (!res.has(folder)) {
                    res.set(folder, []);
                }
                res.get(folder)?.push({
                    dir: toUnix(folder),
                    last: lastFname(folder),
                    name: fname,
                    content: '',
                    funcName: exportFunction[1],
                });
            }
        }

        // sort in numeric order

        for (const [key, value] of res) {
            value.sort((a, b) => Intl.Collator(undefined, { numeric: true }).compare(a.name, b.name));
        }
    }

}


function print() {
    const res = collectSampleFiles(inFolder);
    // writeFileSync(`${outFolder}/dev/all-samples-1.json`, JSON.stringify([...res], null, 2));

    const final: string[] = [];

    [...res.entries()].forEach(
        ([key, value]) => {
            console.log('%c// %s', 'color:green', lastFname(key));

            final.push(`// ${lastFname(key)}`);

            const items = value
                .sort((a, b) => Intl.Collator(undefined, { numeric: true }).compare(a.name, b.name))
                .map((item) => {
                    //console.log(`import { ${item.funcName} } from %c"%s/%s";`, 'color:orange', toUnix(item.dir).replace(replaceOutFolder, replaceOutFolderTo), item.name);

                    return `export { ${item.funcName} } from "${toUnix(item.dir).replace(replaceOutFolder, replaceOutFolderTo)}/${item.name}";`
                });

            final.push(items.join('\n'));
        }
    );

    const names = final
        .map(
            (item) => {
                const name = item.match(/export\s+\{([^}]+)\}\s+from/)?.[1];
                if (name) {
                    console.log('%c// %s', 'color:green', name);
                    return name;
                }
            }
        ).filter((item) => item);
    console.log('%c// names', 'color:orange', JSON.stringify(names, null, 2));

    // writeFileSync(`${outFolder}/dev/all-samples-2.ts`, fileCnt.join('\n'));

    // const flatArray = [...res.values()].flat();
    // const textAllAsJson = `${JSON.stringify(flatArray, null, 2)}`;
    // writeFileSync(`${outFolder}/dev/all-samples-2-flat.json`, textAllAsJson);
}

function main() {
    const res = collectSampleFiles(inFolder);

    const final: string[] = [];

    [...res.entries()].forEach(([key, value]) => {
        console.log('%c// %s', 'color:green', lastFname(key));

        final.push(`// ${lastFname(key)}`);

        const items = value
            .map((item) => {
                //console.log(`import { ${item.funcName} } from %c"%s/%s";`, 'color:orange', toUnix(item.dir).replace(replaceOutFolder, replaceOutFolderTo), item.name);

                const str = `export { ${item.funcName} } from "${toUnix(item.dir).replace(replaceOutFolder, replaceOutFolderTo)}/${item.name}";`;
                return str;
            });

        final.push(items.join('\n'));
    });

    const names = final.map((item) => {
        const name = item.match(/export\s+\{([^}]+)\}\s+from/)?.[1];
        if (name) {
            console.log('%c// %s', 'color:orange', name);
            return name;
        }
    }).filter((item) => item);
    console.log('%c// names', 'color:green', JSON.stringify(names, null, 2));

    writeFileSync(`${outFolder}/dev/all-samples-2.ts`, final.join('\n'));
}

//process.argv.forEach((val, index) => console.log(`argv[${index}]: ${val}`));
console.log('%crootFolder %s', 'color:orange', inFolder);

main();
