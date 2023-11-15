function totalOver(deliveries, ids) {
  let totalBalls = {};
  for (let index = 0; index < deliveries.length; index++) {
    if (ids.includes(deliveries[index]["match_id"])) {
      let bowler = deliveries[index]["bowler"];
      if (totalBalls[bowler] === undefined) totalBalls[bowler] = 0;
      else {
        if (
          deliveries[index]["noball_runs"] === "0" &&
          deliveries[index]["wide_runs"] === "0"
        ) {
          totalBalls[bowler] += 1;
        }
      }
    }
  }
  return totalBalls;
}
module.exports = totalOver;
