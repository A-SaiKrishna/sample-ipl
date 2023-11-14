let problem2 = require("../problem2");
let matches = require("/home/saikrishna/Documents/js-ipl-data-project/src/data/match.json");
const ans = problem2(matches);
console.log(ans);

require("fs").writeFileSync(
  "/home/saikrishna/Documents/js-ipl-data-project/src/public/output/problem2.json",
  JSON.stringify(ans),
  "utf-8",
  (err) => {
    if (err) {
      console.log(err);
    }
  }
);
