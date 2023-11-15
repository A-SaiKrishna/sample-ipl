function maximumPOM(pomData) {
  let maxiCountPOM = {};
  for (let item1 in pomData) {
    let maxi = 0;

    for (let item2 in pomData[item1]) {
      maxi = Math.max(maxi, pomData[item1][item2]);
    }
    maxiCountPOM[item1] = maxi;
  }
  return maxiCountPOM;
}
module.exports = maximumPOM;
