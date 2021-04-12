import fs from "fs";

// Print script name

const packageJsonUrl = new URL("../package.json", import.meta.url);
const packageJson = JSON.parse(fs.readFileSync(packageJsonUrl));

console.log(`${ packageJson.name } ${ packageJson.version }`);
