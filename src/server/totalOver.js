function totalOver(deliveries) {
  let totalBalls = {};
  for (let index = 0; index < deliveries.length; index++) {
    if (deliveries[index]["season"] === "2015") {
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
