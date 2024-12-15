const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const response = [];
      const content = data.toString().split('\n');
      let students = content.filter((item) => item);
      students = students.map((std) => std.split(','));

      const NUM_OF_STUDENTS = students.length ? students.length - 1 : 0;
      const msg = `Number of students: ${NUM_OF_STUDENTS}`;
      console.log(msg);

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
        const msg = `Number of students in ${key}: ${
          fields[key].length
        }. List: ${fields[key].join(', ')}`;

        console.log(msg);

        response.push(msg);
      }
      resolve(response);
    });
  });
}

module.exports = countStudents;
