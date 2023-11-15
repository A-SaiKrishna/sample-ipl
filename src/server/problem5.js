function problem5(matches) {
  let tossandmatch = {};
  for (let index = 0; index < matches.length; index++) {
    let team1 = matches[index]["toss_winner"];
    let team2 = matches[index]["winner"];
    if (team1.trim().toUpperCase() === team2.trim().toUpperCase()) {
      if (tossandmatch[team1] === undefined) {
        tossandmatch[team1] = 0;
      } else {
        tossandmatch[team1] += 1;
      }
    }
  }
  return tossandmatch;
}
module.exports = problem5;
