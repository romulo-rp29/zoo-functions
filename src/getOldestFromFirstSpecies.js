const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const getEmployee = data.employees.filter((element) =>
    element.id === id).map((element) =>
    element.responsibleFor[0]);
  const getOldestAnimal = data.species.find((element) =>
    element.id === getEmployee[0]).residents.sort((element1, element2) =>
    element2.age - element1.age).map((element) =>
    [element.name, element.sex, element.age])[0];
  return getOldestAnimal;
}

module.exports = getOldestFromFirstSpecies;
