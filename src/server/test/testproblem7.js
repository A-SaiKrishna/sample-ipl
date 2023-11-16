let problem7 = require("../problem7.js");
//let matches = require("/home/saikrishna/Documents/js-ipl-data-project/src/data/match.json");
let updeliveries = require("/home/saikrishna/Documents/js-ipl-data-project/src/data/updateddeliveries.json");
//let findIds = require("../findIds.js");
function testproblem7() {
  const ans = problem7(updeliveries);

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
}
module.exports = testproblem7;
