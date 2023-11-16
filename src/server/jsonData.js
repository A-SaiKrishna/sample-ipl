// importing recquire libraries
const matchLocation = "../data/matches.csv";
const deleLocation = "../data/deliveries.csv";
const fs = require("fs");

const csv = require("csvtojson");
// match data converted in json

function jsonData() {
  csv()
    .fromFile(matchLocation)
    .then((arrayObj) => {
      console.log(arrayObj);
      fs.writeFileSync(
        "../data/match.json",
        JSON.stringify(arrayObj),
        "utf-8",
        (err) => {
          if (err) {
            console.log(err);
          }
        }
      );
    });

  //deliveries data converting into json
  csv()
    .fromFile(deleLocation)
    .then((arrayObj) => {
      console.log(arrayObj);
      fs.writeFileSync(
        "../data/deliveries.json",
        JSON.stringify(arrayObj),
        "utf-8",
        (err) => {
          if (err) {
            console.log(err);
          }
        }
      );
    });
}
module.exports = jsonData;
