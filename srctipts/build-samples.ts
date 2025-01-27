import path from "path";
import fs from "fs";
import { getFilenameAndExt, lastFname, pathWithoutFilename, toUnix } from "../src/utils/utils-os";

//prompt: create a function collect all js file names in the src/assets/samples folder and create single file with all the samples

// const rootFolder = path.resolve('./src/assets/samples');
const inFolder = './src/assets/samples';
const outFolder = './src/assets';

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
        } else if (st.isFile() && fname.endsWith(".jsx")) {
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

    const textAllAsJson = `export default ${JSON.stringify(flatArray, null, 2)}`;

    fs.writeFileSync(`${outFolder}/all-samples.js`, textAllAsJson);
}

console.log('%crootFolder %s', 'color:orange', inFolder);
main();
