// name
// id
// email
// getName()
// getId()
// getEmail()
// getRole()—returns 'Employee'
// officeNumber
// getRole()—overridden to return 'Manager'

const Employee = require("./EmployeeC");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);

    this.officeNumber = officeNumber;
  }
  getRole() {
    return "Manager";
  }
  getOfficeNumber() {
    return this.officeNumber;
  }
}

module.exports = Manager;
