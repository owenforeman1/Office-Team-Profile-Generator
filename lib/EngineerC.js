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
  constructor(name, id, email, gitHub) {
    super(name, id, email, gitHub);
    this.gitHub = gitHub;
  }
  printInfo() {
    console.log(`${this.name}`);
    console.log(`${this.id}`);
    console.log(`${this.email}`);
    console.log(`${this.gitHub}`);
  }
}

const engineer = new Engineer("Name", "id", "email", "github");
console.log(engineer);
engineer.printInfo();
