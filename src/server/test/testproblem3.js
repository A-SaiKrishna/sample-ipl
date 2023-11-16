let problem3 = require("../problem3.js");
//let matches = require("/home/saikrishna/Documents/js-ipl-data-project/src/data/match.json");
let updatedDeliveriesdeliveries = require("/home/saikrishna/Documents/js-ipl-data-project/src/data/updateddeliveries.json");

//onsole.log(ans);
function testproblem3() {
  let ans = problem3(updatedDeliveriesdeliveries);
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
}
module.exports = testproblem3;
