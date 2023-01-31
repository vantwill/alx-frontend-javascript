export default function getListStudentIds(array) {
  return array.reduce((accumulator, i) => accumulator + i.id, 0);
}
// should accept a list of students as a parameter
// you MUST use the reduce func on the array
