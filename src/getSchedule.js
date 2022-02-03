const data = require('../data/zoo_data');

const { hours, species } = data;

const openTime = (open, close) => {
  if (open === 0) return 'CLOSED';
  return `Open from ${open}am until ${close}pm`;
};

// buscar os dias da semana que cada animal (animal que contem o dia
// da semana parametro) está em exibiçao e adiciona em um novo array.
const exhibition = (weekDay) => {
  const exhibitionAnimals = species.reduce((accumulator, specie) => {
    if (specie.availability.includes(weekDay)) accumulator.push(specie.name);
    return accumulator;
  }, []);
  return (exhibitionAnimals.length) ? exhibitionAnimals : 'The zoo will be closed!';
};

// hora de estruturar officeHour e exhibition.
const daySchedule = (weekDay) => ({
  [weekDay]: {
    officeHour: openTime(hours[weekDay].open, hours[weekDay].close),
    exhibition: exhibition(weekDay) } });

const fullSchedule = () => Object.keys(hours).reduce((acc, weekDay) =>
  Object.assign(acc, daySchedule(weekDay)), {});
// referência https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/assign

function getSchedule(scheduleTarget) {
  // busca dias disponiveis caso o parametro seja o nome da especie
  const animal = species.find((specie) => specie.name === scheduleTarget);
  if (animal !== undefined) {
    return animal.availability;
  }
  if (Object.keys(hours).includes(scheduleTarget)) {
    return daySchedule(scheduleTarget);
  }
  return fullSchedule();
}
// console.log(getSchedule());

module.exports = getSchedule;
