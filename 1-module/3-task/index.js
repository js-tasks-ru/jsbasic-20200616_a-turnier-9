/**
 * ucFirst
 * @param {string} str
 * @returns {string}
 */
function ucFirst(str) {
  if(str.length === 0)
    return str;
  let firstChar = str[0].toUpperCase();
  return firstChar + str.slice(1);
}
