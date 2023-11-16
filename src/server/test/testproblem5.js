let problem5 = require("../problem5.js");
let matches = require("/home/saikrishna/Documents/js-ipl-data-project/src/data/match.json");

function testproblem5() {
  let ans = problem5(matches);

  ans["Rising Pune Supergiant"] += ans["Rising Pune Supergiants"];
  delete ans["Rising Pune Supergiants"];

  require("fs").writeFileSync(
    "/home/saikrishna/Documents/js-ipl-data-project/src/public/output/problem5.json",
    JSON.stringify(ans),
    "utf-8",
    (err) => {
      if (err) {
        console.log(err);
      }
    }
  );
}
module.exports = testproblem5;
