const maximumPOM = require("./maximumPOM");

function problem8(deliveries) {
  let ans = {};
  for (let index1 = 0; index1 < deliveries.length; index1++) {
    let player = deliveries[index1]["player_dismissed"];
    if (player !== "") {
      if (ans[player] === undefined) ans[player] = {};
      let player2;
      if (deliveries[index1]["dismissal_kind"] !== "run out") {
        player2 = deliveries[index1]["bowler"];
      } else {
        player2 = deliveries[index1]["fielder"];
      }
      if (ans[player][player2] === undefined) {
        ans[player][player2] = 1;
      } else {
        ans[player][player2] += 1;
      }
    }
  }

  let ans2 = maximumPOM(ans);

  let ans3 = {};
  for (let item1 in ans) {
    for (let item2 in ans[item1]) {
      if (ans[item1][item2] === ans2[item1]) {
        if (ans3[item1] === undefined) {
          ans3[item1] = [];
        }
        ans3[item1].push(item2);
      }
    }
  }
  return ans3;
}
module.exports = problem8;
