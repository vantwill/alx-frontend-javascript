/* eslint-disable no-param-reassign */
// Above for lines 9 and 14 ^
export default function updateStudentGradeByCity(studentsList, city, newGrades) {
  if (!(studentsList instanceof Array)) {
    return [];
  }

  function addGrade(student) {
    newGrades.forEach((person) => {
      if (person.studentId === student.id) {
        student.grade = person.grade;
      }
    });

    if (student.grade === undefined) {
      student.grade = 'N/A';
    }
    return student;
  }

  const filteredStudentList = studentsList.filter((students) => students.location === city);
  return filteredStudentList.map(addGrade);
}
// Create a func that returns an array of students for a specific city with their new grade
// It should accept a list of students, a city, and newGrades as parameters
// PLD HELP 7/23 10:50 A.M.
