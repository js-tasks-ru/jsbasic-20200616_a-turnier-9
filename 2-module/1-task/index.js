/**
 * Складываем зарплаты
 * @param {Object} salaries - объект зарплат
 * @returns {Number}
 */
function sumSalary(salaries) {
  let sum = 0;
  for(let val of Object.values(salaries)){
    if(typeof val == 'number')
      sum += val;
  }
  return sum;
}
