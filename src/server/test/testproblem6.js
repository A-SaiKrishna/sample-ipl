const problem6 = require("../problem6");
let matches = require("/home/saikrishna/Documents/js-ipl-data-project/src/data/match.json");

function testproblem6() {
  let ans = problem6(matches);

  require("fs").writeFileSync(
    "/home/saikrishna/Documents/js-ipl-data-project/src/public/output/problem6.json",
    JSON.stringify(ans),
    "utf-8",
    (err) => {
      if (err) {
        console.log(err);
      }
    }
  );
}
module.exports = testproblem6;
