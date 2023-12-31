//refrenced from http://allthatcricket.com/runs-per-over-economy-rate/
let totalRun = require("./totalRun.js");
let totalBall = require("./totalOver.js");
function problem4(deliveries) {
  let totalRunsByBowler = totalRun(deliveries);
  let totalOversByBowler = totalBall(deliveries);
  let economy = {};
  for (let item in totalRunsByBowler) {
    let overs = totalOversByBowler[item] / 6 + (totalOversByBowler[item] % 6);
    let result = totalRunsByBowler[item] / overs;
    economy[item] = result.toFixed(2);
  }

  return economy;
}
module.exports = problem4;
