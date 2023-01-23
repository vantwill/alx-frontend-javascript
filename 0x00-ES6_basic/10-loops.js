export default function appendToEachArrayValue(array, appendString) {
  const theNewA = [];
  for (const string of array) {
    theNewA.push(appendString + string);
  }

  return theNewA;
}
