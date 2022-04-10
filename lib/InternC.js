// name
// id
// email
// getName()
// getId()
// getEmail()
// getRole()—returns 'Employee'
// school
// getSchool()
// getRole()—overridden to return 'Intern'

const Employee = require("./EmployeeC");

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }
  getRole() {
    return "Intern";
  }
  getSchool() {
    return this.school;
  }
}

module.exports = Intern;
