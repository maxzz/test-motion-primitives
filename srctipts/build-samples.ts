import path from "path";
import fs from "fs";

// create a function collect all js file names in the src/assets/samples folder and create single file
// with all the samples

const res = new Map<string, string[]>();

function collectSamples(folder: string) {
    console.log("folder", folder);

    const fnames = fs.readdirSync(`${folder}`);

    for (const fname of fnames) {
        const fullname = `${folder}/${fname}`;
        const st = fs.statSync(fullname);

        if (st.isDirectory()) {
            collectSamples(path.join(folder, fname));
            continue;
        } else if (st.isFile() && fname.endsWith(".js")) {
            const content = fs.readFileSync(fullname, "utf-8");

            if (!res.has(folder)) {
                res.set(folder, []);
            }
            res.get(folder)?.push(fname);
        }
    }
}

const rootFolder = path.resolve("./src/assets/samples");
collectSamples(rootFolder);

fs.writeFileSync("./src/assets/samples.js", `export default ${JSON.stringify([...res])}`);
