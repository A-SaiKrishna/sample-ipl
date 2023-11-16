let playerOfMatch = require("./playerofmatch.js");
let maximumPOM = require("./maximumPOM.js");
function problem6(matches) {
  let yearPlayerOfmatch = playerOfMatch(matches);
  let maxiCountPOM = maximumPOM(yearPlayerOfmatch);
  let ans = {};

  for (let item1 in yearPlayerOfmatch) {
    for (let item2 in yearPlayerOfmatch[item1]) {
      if (yearPlayerOfmatch[item1][item2] === maxiCountPOM[item1]) {
        if (ans[item1] === undefined) {
          ans[item1] = [];
        }
        ans[item1].push(item2);
      }
    }
  }
  return ans;
}
module.exports = problem6;
