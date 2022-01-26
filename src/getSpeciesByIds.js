const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  if (ids === undefined) return [];
  return data.species.filter((species) => ids.includes(species.id));
}

module.exports = getSpeciesByIds;
