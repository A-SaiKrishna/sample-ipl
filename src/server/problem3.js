function problem3(deliveries) {
  let ans = {};

  for (let index = 0; index < deliveries.length; index++) {
    if (deliveries[index]["season"] === "2016") {
      let team = deliveries[index]["batting_team"];
      let extra = Number(deliveries[index]["extra_runs"]);
      if (ans[team] === undefined) {
        ans[team] = 0;
      }
      ans[team] += extra;
    }
  }

  return ans;
}
module.exports = problem3;
