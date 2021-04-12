import fs from "fs";

// Load configuration

const configUrl = new URL("../config.json", import.meta.url);
const config = JSON.parse(fs.readFileSync(configUrl));
const podcasts = config.podcasts;

// Print script name

const packageJsonUrl = new URL("../package.json", import.meta.url);
const packageJson = JSON.parse(fs.readFileSync(packageJsonUrl));

console.log(`${ packageJson.name } ${ packageJson.version }`);

// Print podcasts

console.log();
console.log("Mis podcasts:");
console.log();

let i = 1;
podcasts.forEach(podcast => {
  console.log(`  ${ i }. ${ podcast.name }`);
  i++;
});

console.log("  0. Todos");
