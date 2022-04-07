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
    super(name, id, email, school);
    this.school = school;
  }
   printInfo() {
    console.log(`${this.name}`);
    console.log(`${this.id}`);
    console.log(`${this.email}`);
    console.log(`${this.school}`);
   }
}

const intern = new Intern("Name", "id", "email", "school");
console.log(intern);
intern.printInfo();
