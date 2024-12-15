export default function iterateThroughObject(reportWithIterator) {
  const employeeList = [];

  for (const employee of reportWithIterator) {
    employeeList.push(employee);
  }

  return employeeList.join(' | ');
}
