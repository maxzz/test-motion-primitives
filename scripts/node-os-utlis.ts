import fs from "fs";
import path from "path";

export function mkdirSync(dir: string): void {
    fs.mkdirSync(dir, { recursive: true });
}

export function writeFileSync(file: string, content: string): void {
    mkdirSync(path.dirname(file));
    fs.writeFileSync(file, content);
}
