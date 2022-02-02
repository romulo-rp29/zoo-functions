const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const ageCount = { child: 0, adult: 0, senior: 0 };
  ageCount.child = entrants.filter((element) => element.age < 18).length;
  ageCount.adult = entrants.filter((element) => element.age >= 18 && element.age < 50).length;
  ageCount.senior = entrants.filter((element) => element.age >= 50).length;
  return ageCount;
}

function calculateEntry(entrants) {
  if (entrants === undefined || entrants.length === undefined) {
    return 0;
  }
  const totalEntrants = countEntrants(entrants);
  const pricesValue = data.prices;
  const totalPrice = totalEntrants.child * pricesValue.child
  + totalEntrants.adult * pricesValue.adult
  + totalEntrants.senior * pricesValue.senior;
  return totalPrice;
}

module.exports = { calculateEntry, countEntrants };
