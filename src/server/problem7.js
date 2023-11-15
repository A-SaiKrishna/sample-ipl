function problem7(deliveries, yearIDS) {
  let ballsFaced = {};
  let runsScored = {};
  for (let index = 0; index < deliveries.length; index++) {
    let player = deliveries[index]["batsman"];

    let runs = Number(deliveries[index]["batsman_runs"]);

    for (let index2 = 0; index2 < yearIDS.length; index2++) {
      if (yearIDS[index2].includes(deliveries[index]["match_id"])) {
        let year = String(2008 + index2);
        if (ballsFaced[year] === undefined) ballsFaced[year] = {};
        if (runsScored[year] === undefined) runsScored[year] = {};
        if (ballsFaced[year][player] === undefined)
          ballsFaced[year][player] = 0;
        if (runsScored[year][player] === undefined)
          runsScored[year][player] = 0;
        if (deliveries[index]["wide_runs"] === "0")
          ballsFaced[year][player] += 1;
        runsScored[year][player] += runs;
        break;
      }
    }
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
