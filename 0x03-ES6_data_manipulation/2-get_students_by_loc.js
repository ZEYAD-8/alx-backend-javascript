export default function getStudentsByLocation(studentsList, city) {
  return studentsList.filter((student) => student.location.localeCompare(city) === 0);
}
