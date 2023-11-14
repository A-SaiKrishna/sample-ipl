function problem1(matches) {
  let yearObject = {};
  for (let mat = 0; mat < matches.length; mat++) {
    let year = Number(matches[mat]["season"]);
    if (yearObject[year] === undefined) {
      yearObject[year] = 1;
    } else {
      yearObject[year] += 1;
    }
  }
  return yearObject;
}

module.exports = problem1;
