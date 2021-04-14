import fs from "fs";
import prompt from "prompt";

let config = {};
let podcasts = [];
let episodes = [];

prompt.start();
prompt.message = "";
prompt.delimiter = "";

// Load configuration

const configUrl = new URL("../config.json", import.meta.url);
config = JSON.parse(fs.readFileSync(configUrl));
podcasts = config.podcasts;

// Print script name

const packageJsonUrl = new URL("../package.json", import.meta.url);
const packageJson = JSON.parse(fs.readFileSync(packageJsonUrl));

console.log();
console.log(`${ packageJson.name } ${ packageJson.version }`);

// Print podcasts

console.log();
console.log("Mis podcasts:");
console.log();

podcasts.forEach((podcast, i) => {
  console.log(`  ${ i + 1 }. ${ podcast.name }`);
});

console.log("  0. Todos");

// Ask podcast

const { podcastNum } = await prompt.get({
  properties: {
    podcastNum: {
      description: "\n¿Que podcast quieres consultar?",
      default: 0,
      type: "integer"
    }
  }
});

// Filter podcasts

if (podcastNum) {
  podcasts = [podcasts[podcastNum - 1]];
}

// Ask days

const { days } = await prompt.get({
  properties: {
    days: {
      description: "\n¿Cuantos días quieres consultar?",
      default: 14,
      type: "integer"
    }
  }
});
