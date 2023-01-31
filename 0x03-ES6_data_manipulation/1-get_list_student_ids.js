export default function getListStudentIds(array) {
  if (!Array.isArray(array)) return [];
  return array.map((j) => j.id);
}
// if arg is not an array, the func is returning an empty array
// you MUST use map func on the array
