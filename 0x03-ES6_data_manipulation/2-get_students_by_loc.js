export default function getStudentsByLocation(array, city) {
  return array.filter((j) => j.location === city);
}
// should accept list of students and city as params
// you MUST use filter func on the array
