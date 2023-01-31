export default function cleanSet(set, startString) {
  if (startString === '' || typeof startString !== 'string') {
    return '';
  }
  const array = [];
  for (const value of set) {
    if (typeof value === 'string' && value.startsWith(startString)) {
      array.push(value.slice(startString.length));
    }
  }
  return array.join('-');
}
// returns a string of all the set values that start with a specific string (startString)
// string contains all values of the set separated by '-'
