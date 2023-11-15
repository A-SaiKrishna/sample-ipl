function totalRun(deliveries, ids) {
  let totalRuns = {};
  for (index = 0; index < deliveries.length; index++) {
    if (ids.includes(deliveries[index]["match_id"])) {
      let bowler = deliveries[index]["bowler"];
      let runInMatch = Number(deliveries[index]["total_runs"]);
      if (totalRuns[bowler] === undefined) {
        totalRuns[bowler] = runInMatch;
      } else {
        totalRuns[bowler] += runInMatch;
      }
    }
  }
  return totalRuns;
}
module.exports = totalRun;
