const reDate = /^(\d{2}):(\d{2}) - (\d{2}) de (\w{3})\. de (\d{4})$/;
const months = ["ene", "feb", "mar", "abr", "may", "jun",
                "jul", "ago", "sep", "oct", "nov", "dic"];

function page(pageNum, url) {
  const splitUrl = url.split("_");
  if (pageNum === "next") {
    splitUrl[3] = `${ Number(splitUrl[3].split(".")[0]) + 1 }.html`;
  } else {
    splitUrl[3] = `${ pageNum }.html`;
  }
  return splitUrl.join("_");
}

function parseIvoox(document) {
  const parsed = [];
  document
    .querySelectorAll("div.modulo-type-episodio")
    .forEach(element => {
      const titleElement = element.querySelector(".content .title-wrapper a");
      const title = titleElement.title;
      const fileCode = titleElement.href.split("_")[2];
      const url = `http://ivoox.com/listen_mn_${ fileCode }_1.mp3`;
      const splitDate = element.querySelector(".content .action .date")
                               .title.match(reDate);
      const date = new Date(
        splitDate[5],
        months.indexOf(splitDate[4]),
        splitDate[3],
        splitDate[1],
        splitDate[2]
      );
      parsed.push({title, url, date});
    });
  return parsed;
}
