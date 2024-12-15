/**
 * Write an interface named Studentthat accepts the
 * following elements:
 * - firstName(string),
 * - lastName(string),
 * - age(number),
 * - location(string)
 */

interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 20,
  location: 'USA'
};

const student2: Student = {
  firstName: 'Jane',
  lastName: 'Doe',
  age: 21,
  location: 'UK'
};


/**
 * - Using Vanilla Javascript, render a table and for each elements in the array,
 * append a new row to the table
 * 
 * - Each row should contain the first name of the student and the location
 */

const studentsList: Array<Student> = [student1, student2];

export const renderTable = (students: Array<Student>): void => {
  const table = document.createElement('table');
  const tr = document.createElement('tr');
  table.insertAdjacentElement('beforeend', tr);

  tr.insertAdjacentHTML('beforeend', '<th>FirstName</th>');
  tr.insertAdjacentHTML('beforeend', '<th>Location</th>');

  students.forEach((student) => {
      const tr = document.createElement('tr');
      table.insertAdjacentElement('beforeend', tr);
      tr.insertAdjacentHTML('beforeend', `<td>${student.firstName}</td>`);
      tr.insertAdjacentHTML('beforeend', `<td>${student.location}</td>`);
  });

  document.body.insertAdjacentElement('beforeend', table);
}

renderTable(studentsList);
