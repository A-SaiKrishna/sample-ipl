function playerOfMatch(matches) {
  let playerOfMatchObject = {};
  for (let index = 0; index < matches.length; index++) {
    let year = matches[index]["season"];
    if (playerOfMatchObject[year] === undefined) {
      playerOfMatchObject[year] = {};
    }
    let player = matches[index]["player_of_match"];
    if (playerOfMatchObject[year][player] === undefined) {
      playerOfMatchObject[year][player] = 1;
    } else {
      playerOfMatchObject[year][player] += 1;
    }
  }

  return playerOfMatchObject;
}
module.exports = playerOfMatch;
