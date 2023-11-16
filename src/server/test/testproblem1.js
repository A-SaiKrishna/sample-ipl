let problem1 = require("../problem1.js");
let matches = require("/home/saikrishna/Documents/js-ipl-data-project/src/data/match.json");
function testproblem1() {
  const yearObject = problem1(matches);
  //console.log(yearObject);

  require("fs").writeFileSync(
    "/home/saikrishna/Documents/js-ipl-data-project/src/public/output/problem1.json",
    JSON.stringify(yearObject),
    "utf-8",
    (err) => {
      if (err) {
        console.log(err);
      }
    }
  );
}
module.exports = testproblem1;
