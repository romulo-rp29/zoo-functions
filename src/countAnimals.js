const data = require('../data/zoo_data');

function countAnimals(animal) {
  const allAnimals = {};
  if (!animal) {
    data.species.forEach((element) => {
      allAnimals[element.name] = element.residents.length;
    });
    return allAnimals;
  }
  const residentAnimals = data.species.find((specie) => specie.name === animal.specie).residents;
  if (animal.specie && !animal.sex) {
    return residentAnimals.length;
  }
  return residentAnimals.filter((element) => element.sex === animal.sex).length;
}

module.exports = countAnimals;
