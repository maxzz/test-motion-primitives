import fs from "fs";

// create a function collect all js file names in the src/assets/samples folder and create single file
// with all the samples

function collectSamples() {
    const samples = new Map<string, string>();

    const files = fs.readdirSync("./src/assets/samples");

    for (const file of files) {
        const name = file.replace(".js", "");
        const content = fs.readFileSync(`./src/assets/samples/${file}`, "utf-8");
        samples.set(name, content);
    }

    return samples;
}

const samples = collectSamples();

fs.writeFileSync("./src/assets/samples.js", `export default ${JSON.stringify(samples)}`);
