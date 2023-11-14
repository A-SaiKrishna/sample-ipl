function problem31(ids, deliveries) {
  let ans = {};
  for (index = 0; index < deliveries.length; index++) {
    if (ids.includes(deliveries[index]["match_id"])) {
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
module.exports = problem31;
