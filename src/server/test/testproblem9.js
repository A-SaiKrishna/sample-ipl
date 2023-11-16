const problem9 = require("../problem9.js");
let deliveries = require("/home/saikrishna/Documents/js-ipl-data-project/src/data/deliveries.json");

function testproblem9() {
  let ans = problem9(deliveries);
  let name = "";
  let value = Infinity;
  for (let player in ans) {
    if (Number(ans[player]) < value) {
      name = player;
      value = ans[player];
    }
  }
  let ans1 = {};
  ans1[name] = value;
  //console.log(ans1);

  require("fs").writeFileSync(
    "/home/saikrishna/Documents/js-ipl-data-project/src/public/output/problem9.json",
    JSON.stringify(ans1),
    "utf-8",
    (err) => {
      if (err) {
        console.log(err);
      }
    }
  );
}
module.exports = testproblem9;
