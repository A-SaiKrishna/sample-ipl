function problem9(deliveries) {
  //let ans = ["", 0];
  let runsGiven = {};
  let ballsBalled = {};
  for (let index1 = 0; index1 < deliveries.length; index1++) {
    if (deliveries[index1]["is_super_over"] === "1") {
      let bowler = deliveries[index1]["bowler"];
      if (runsGiven[bowler] === undefined) runsGiven[bowler] = 0;
      if (ballsBalled[bowler] === undefined) ballsBalled[bowler] = 0;
      runsGiven[bowler] += Number(deliveries[index1]["total_runs"]);
      if (
        deliveries[index1]["noball_runs"] === "0" &&
        deliveries[index1]["wide_runs"] === "0"
      ) {
        ballsBalled[bowler] += 1;
      }
    }
  }
  let economy = {};
  for (let item1 in ballsBalled) {
    if (economy[item1] === undefined) economy[item1] = Infinity;
    economy[item1] = (
      runsGiven[item1] /
      (ballsBalled[item1] / 6 + (ballsBalled[item1] % 6))
    ).toFixed(2);
  }
  return economy;
}
module.exports = problem9;
