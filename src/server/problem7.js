function problem7(deliveries) {
  let ballsFaced = {};
  let runsScored = {};
  for (let index = 0; index < deliveries.length; index++) {
    let player = deliveries[index]["batsman"];

    let runs = Number(deliveries[index]["batsman_runs"]);

    let year = deliveries[index]["season"];
    if (ballsFaced[year] === undefined) ballsFaced[year] = {};
    if (runsScored[year] === undefined) runsScored[year] = {};
    if (ballsFaced[year][player] === undefined) ballsFaced[year][player] = 0;
    if (runsScored[year][player] === undefined) runsScored[year][player] = 0;
    if (deliveries[index]["wide_runs"] === "0") ballsFaced[year][player] += 1;
    runsScored[year][player] += runs;
  }

  let ans = {};
  for (let item1 in ballsFaced) {
    for (let item2 in ballsFaced[item1]) {
      if (ans[item1] === undefined) ans[item1] = {};
      ans[item1][item2] = (
        (runsScored[item1][item2] / ballsFaced[item1][item2]) *
        100
      ).toFixed(2);
    }
  }

  return ans;
}
module.exports = problem7;
