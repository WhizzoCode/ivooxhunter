function page(pageNum, url) {
  const splitUrl = url.split("_");
  if (pageNum === "next") {
    splitUrl[3] = `${ Number(splitUrl[3].split(".")[0]) + 1 }.html`;
  } else {
    splitUrl[3] = `${ pageNum }.html`;
  }
  return splitUrl.join("_");
}
