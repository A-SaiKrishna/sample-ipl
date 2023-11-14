let problem31 = require("./problem31.js");
function problem3(matches, deliveries) {
  let ids = [];
  for (let index = 0; index < matches.length; index++) {
    if (matches[index]["season"] === "2016") {
      ids.push(matches[index]["id"]);
    }
  }
  return problem31(ids, deliveries);
}
module.exports = problem3;
