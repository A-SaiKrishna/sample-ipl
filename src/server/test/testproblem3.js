let problem3 = require("../problem3.js");
let matches = require("/home/saikrishna/Documents/js-ipl-data-project/src/data/match.json");
let deliveries = require("/home/saikrishna/Documents/js-ipl-data-project/src/data/deliveries.json");

const ans = problem3(matches, deliveries);
console.log(ans);

require("fs").writeFileSync(
  "/home/saikrishna/Documents/js-ipl-data-project/src/public/output/problem3.json",
  JSON.stringify(ans),
  "utf-8",
  (err) => {
    if (err) {
      console.log(err);
    }
  }
);
