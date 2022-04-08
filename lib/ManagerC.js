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
  printInfo() {
    // console.log(`${this.name}`);
    // console.log(`${this.id}`);
    // console.log(`${this.email}`);
    console.log(`${this.officeNumber}`);
  }
}

const manager = new Manager("Name", "id", "email", 1);
console.log(manager);
manager.printInfo();
