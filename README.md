# ivooxhunter

Downloader for ivoox podcasts.

## Installation

Clone the repository with git:

```shell
git clone https://github.com/WhizzoCode/ivooxhunter.git
```

Install dependences:

```shell
cd ivooxhunter
npm install
```

Configure:

```shell
cp config-template.json config.json
```

*You can see about the configuration file on the [next](#Configuration) section.*

Execute:

```shell
node src/index.js
```

## Configuration

The configuration file is `config.json` located at the root of the project.

### Podcasts

You can add the podcast subscriptions in the **podcasts** section:

```json
"podcasts":[
  {
    "name": "The podcast name",
    "url": "https://www.ivoox.com/podcast-url.html"
  },
  {
    "name": "Another podcast",
    "url": "https://www.ivoox.com/another-podcast-url.html"
  },
  [...]
]
```

### Other configurations

- **downloadPath**: The path where the episodes will be downloaded, every podcast has his own subdirectory.
- **requestWait**: The waiting time in milliseconds between each request to ivoox.
