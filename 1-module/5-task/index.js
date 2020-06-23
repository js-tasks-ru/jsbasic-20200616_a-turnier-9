/**
 * truncate
 * @param {string} str
 * @param {number} maxlength
 * @returns {string}
 */
function truncate(str, maxlength) {
  if(str.length <= 20)
    return str;
  return str.slice(0, maxlength - 1) + '…';
}
