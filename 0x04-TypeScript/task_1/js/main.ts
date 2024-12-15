export interface Teacher {
  readonly firstName: string,
  readonly lastName: string,
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any;
}

const teacher3: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: true,
  location: 'USA'
};

console.log(teacher3);

export interface Directors extends Teacher {
  numberOfReports: number;
}

export interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

export function printTeacher(firstName: string, lastName: string): string {
  return `${firstName[0]}. ${lastName}`
}

export interface StudentConstructor {
  new(firstName: string, lastName: string): IsStudentClass;
}

export interface IsStudentClass {
  workOnHomework(): string;
  displayName(): string;
}

export class StudentClass implements IsStudentClass {
  private _firstName: string;
  private _lastName: string;

  constructor(firstName: string, lastName: string) {
    this._firstName = firstName;
    this._lastName = lastName;
  }

  workOnHomework() : string {
    return 'Currently working';
  }

  displayName(): string {
    return this._firstName;
  }
}
