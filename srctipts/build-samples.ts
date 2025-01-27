import path from "path";
import fs from "fs";
import { getFilenameAndExt, lastFname, pathWithoutFilename, toUnix } from "../src/utils/utils-os";

//prompt: create a function collect all js file names in the src/assets/samples folder and create single file with all the samples

// const rootFolder = path.resolve('./src/assets/samples');
const inFolder = './src/assets/samples';
const outFolder = './src/assets';
const replaceOutFolder = 'src/assets/samples';

type FileItem = {
    dir: string;
    last: string;
    name: string;
    content: string;
};

const res = new Map<string, FileItem[]>();

function collectSamples(folder: string) {
    // console.log("folder", folder);

    const fnames = fs.readdirSync(`${folder}`);

    for (const fname of fnames) {
        const fullname = `${folder}/${fname}`;
        const st = fs.statSync(fullname);

        if (st.isDirectory()) {
            collectSamples(path.join(folder, fname));
            continue;
        } else if (st.isFile() && fname.match(/\.[jt]sx?$/)) {
            const content = fs.readFileSync(fullname, "utf-8");

            const exportFunction = content.match(/export\s+function\s+(\w+)/);
            if (!exportFunction) {
                console.log('%cno export function "%s"', 'color;red', fullname);
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
                content: exportFunction[1],
            });
        }
    }
}

function main() {
    collectSamples(inFolder);

    const flatArray = [...res.values()].flat();

    const fileCnt: string[] = [];

    [...res.entries()].forEach(([key, value]) => {
        console.log('%c// %s', 'color:green', lastFname(key));
        
        fileCnt.push(`// lastFname(key)`);

        // value
        //     .sort((a, b) => a.name.localeCompare(b.name))
        //     .map((item) => {
        //         console.log('import * from "%c%s/%s";', 'color:orange', toUnix(item.dir), item.name);
        //     });
        const items = value
            .sort((a, b) => Intl.Collator(undefined, { numeric: true }).compare(a.name, b.name))
            .map((item) => {
                //console.log(`import { ${item.content} } from %c"%s/%s";`, 'color:orange', toUnix(item.dir).replace(replaceOutFolder, '.'), item.name);

                const str = `export { ${item.content} } from "${toUnix(item.dir).replace(replaceOutFolder, '.')}/${item.name}";`;
                return str;
            });

        fileCnt.push(items.join('\n'));
    });

    fs.writeFileSync(`${outFolder}/samples/all-samples-2.ts`, fileCnt.join('\n'));

    const textAllAsJson = `${JSON.stringify(flatArray, null, 2)}`;

    fs.writeFileSync(`${outFolder}/samples/all-samples-2-flat.json`, textAllAsJson);
    fs.writeFileSync(`${outFolder}/samples/all-samples-1.json`, JSON.stringify([...res], null, 2));
}

console.log('%crootFolder %s', 'color:orange', inFolder);
main();
