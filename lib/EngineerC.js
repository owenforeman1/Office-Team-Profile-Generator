// name
// id
// email
// getName()
// getId()
// getEmail()
// getRole()—returns 'Employee'
// github—GitHub username
// getGithub()
// getRole()—overridden to return 'Engineer'

const Employee = require("./EmployeeC");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }
  getRole() {
    return "Engineer";
  }
  getGithub() {
    return this.github;
  }
}


// const engineer = new Engineer("Name", "id", "email", "github");
// console.log(engineer);
// engineer.printInfo();
module.exports = Engineer;