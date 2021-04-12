import fs from "fs";

// Load configuration

const configUrl = new URL("../config.json", import.meta.url);
const config = JSON.parse(fs.readFileSync(configUrl));
const podcasts = config.podcasts;

// Print script name

const packageJsonUrl = new URL("../package.json", import.meta.url);
const packageJson = JSON.parse(fs.readFileSync(packageJsonUrl));

console.log(`${ packageJson.name } ${ packageJson.version }`);
