const fs = require('fs');

function countStudents(path) {
  let contents;
  try {
    contents = fs.readFileSync(path, 'utf8');
  } catch (error) {
    throw new Error('Cannot load the database');
  }
  contents = contents.toString().split('\n');
  let students = contents.filter((item) => item);

  students = students.map((std) => std.split(','));

  const NUM_OF_STUDENTS = students.length ? students.length - 1 : 0;
  console.log(`Number of students: ${NUM_OF_STUDENTS}`);

  const fields = {};
  for (const i in students) {
    if (i !== 0) {
      if (!fields[students[i][3]]) {
        fields[students[i][3]] = [];
      }
      fields[students[i][3]].push(students[i][0]);
    }
  }

  delete fields.field;

  for (const key of Object.keys(fields)) {
    console.log(
      `Number of students in ${key}: ${fields[key].length}. List: ${fields[
        key
      ].join(', ')}`,
    );
  }
}

module.exports = countStudents;
