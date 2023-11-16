const problem8 = require("../problem8");
let deliveries = require("/home/saikrishna/Documents/js-ipl-data-project/src/data/deliveries.json");

function testproblem8() {
  let ans = problem8(deliveries);
  require("fs").writeFileSync(
    "/home/saikrishna/Documents/js-ipl-data-project/src/public/output/problem8.json",
    JSON.stringify(ans),
    "utf-8",
    (err) => {
      if (err) {
        console.log(err);
      }
    }
  );
}
module.exports = testproblem8;
