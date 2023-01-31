export default function updateUniqueItems(updatedMap) {
  if (!(updatedMap instanceof Map)) throw Error('Cannot process');
  for (const entry of updatedMap) if (entry[1] === 1) updatedMap.set(entry[0], 100);
  return updatedMap;
}
// returns an updated map for all items with initial quantity at 1
// for each entry of the map where the quantity is 1, update the quantity to 100
