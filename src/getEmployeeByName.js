const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) return {};
  return data.employees.find((employees) =>
    employeeName.includes(employees.firstName) || employeeName.includes(employees.lastName));
}

module.exports = getEmployeeByName;
