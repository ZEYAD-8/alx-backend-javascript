export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  get name() {
    return this._name;
  }

  /**
  * @param {String} name
  */
  set name(name) {
    if (typeof name !== 'string') {
    throw new TypeError('Name must be a string');
    }

    this._name = name;
  }

  get length() {
    return this._length;
  }

  /**
   * @param {Number} length
  */
  set length(length) {
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }

    this._length = length;
  }

  get students() {
    return this._students;
  }

  /**
   * @param {Array} students
  */
  set students(students) {
    if (students instanceof Array) {
      this._students = students;
    } else {
      throw new TypeError('Students must be an Array');
    }
  }
}
