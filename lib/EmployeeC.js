// name
// id
// email
// getName()
// getId()
// getEmail()
// getRole()—returns 'Employee'

const { get } = require("http");

class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
  printInfo() {
    console.log(`${this.name}`);
    console.log(`${this.id}`);
    console.log(`${this.email}`);
  }
}

module.exports =  Employee;