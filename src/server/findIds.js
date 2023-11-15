function findIds(matches, year) {
  let ids = [];
  for (let index = 0; index < matches.length; index++) {
    if (matches[index]["season"] === year) {
      ids.push(matches[index]["id"]);
    }
  }
  return ids;
}
module.exports = findIds;
