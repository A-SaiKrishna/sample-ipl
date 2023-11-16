let problem4 = require("../problem4.js");
//let matches = require("/home/saikrishna/Documents/js-ipl-data-project/src/data/match.json");
let updeliveries = require("/home/saikrishna/Documents/js-ipl-data-project/src/data/updateddeliveries.json");
//let findIds = require("../findIds.js");

function testproblem4() {
  let bowlers = problem4(updeliveries);
  let bowlersArray = Object.entries(bowlers);
  bowlersArray.sort((a, b) => a[1] - b[1]);
  //console.log(bowlersArray);
  let top10Array = bowlersArray.slice(0, 10);
  //console.log(top10Array);

  require("fs").writeFileSync(
    "/home/saikrishna/Documents/js-ipl-data-project/src/public/output/problem4.json",
    JSON.stringify(top10Array),
    "utf-8",
    (err) => {
      if (err) {
        console.log(err);
      }
    }
  );
}
module.exports = testproblem4;
