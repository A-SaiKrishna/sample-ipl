function problem2(matches) {
  let teamWins = {};
  for (let index = 0; index < matches.length; index++) {
    let year = matches[index]["season"];
    let team = matches[index]["winner"];
    if (teamWins[year] === undefined) {
      teamWins[year] = {};
    }
    if (teamWins[year][team] === undefined) {
      teamWins[year][team] = 1;
    } else {
      if (matches[index]["result"] !== "tie") teamWins[year][team] += 1;
    }
  }
  return teamWins;
}
module.exports = problem2;
