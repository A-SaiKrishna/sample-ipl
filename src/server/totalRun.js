function totalRun(deliveries) {
  let totalRuns = {};
  for (let index = 0; index < deliveries.length; index++) {
    if (deliveries[index]["season"] === "2015") {
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
