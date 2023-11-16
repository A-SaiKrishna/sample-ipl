let matches = require("/home/saikrishna/Documents/js-ipl-data-project/src/data/match.json");
let deliveries = require("/home/saikrishna/Documents/js-ipl-data-project/src/data/deliveries.json");
let fs = require("fs");

function idAndSeason() {
  let ans = {};
  for (let index = 0; index < matches.length; index++) {
    ans[matches[index]["id"]] = matches[index]["season"];
  }
  return ans;
}
function updatedDeliveries() {
  let idseason = idAndSeason();
  for (let index = 0; index < deliveries.length; index++) {
    deliveries[index]["season"] = idseason[deliveries[index]["match_id"]];
  }
  fs.writeFileSync(
    "../data/updateddeliveries.json",
    JSON.stringify(deliveries),
    "utf-8",
    (err) => {
      if (err) {
        console.log(err);
      }
    }
  );
}
module.exports = updatedDeliveries;
