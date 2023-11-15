let problem7 = require("../problem7.js");
let matches = require("/home/saikrishna/Documents/js-ipl-data-project/src/data/match.json");
let deliveries = require("/home/saikrishna/Documents/js-ipl-data-project/src/data/deliveries.json");
let findIds = require("../findIds.js");

let yearIDS = [];
for (let index = 2008; index < 2018; index++) {
  yearIDS.push(findIds(matches, String(index)));
}

const ans = problem7(deliveries, yearIDS);

require("fs").writeFileSync(
  "/home/saikrishna/Documents/js-ipl-data-project/src/public/output/problem7.json",
  JSON.stringify(ans),
  "utf-8",
  (err) => {
    if (err) {
      console.log(err);
    }
  }
);
