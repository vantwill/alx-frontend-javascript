export default function groceriesList() {
  const groArr = [['Apples', 10], ['Tomatoes', 10], ['Pasta', 1], ['Rice', 1], ['Banana', 5]];
  const groMap = new Map();
  for (const item of groArr) groMap.set(item[0], item[1]);
  return groMap;
}
// groArr is our grocery array of food items
// groMap is our map
