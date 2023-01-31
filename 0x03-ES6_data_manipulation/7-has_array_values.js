export default function hasValuesFromArray(set, array) {
  return array.every((elements) => set.has(elements));
}
// function accepts two arguments: a set (Set) and an array (Array)
// returns a boolean if all the elements in the array exist within the set
