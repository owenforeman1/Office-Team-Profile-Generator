//questions inquery ting
const inquirer = require("inquirer");
const fs = require("fs");

const Manager = require("./lib/ManagerC");
const Engineer = require("./lib/EngineerC");
const Intern = require("./lib/InternC");
const htmlGenerator = require("./src/htmlGenerator");

//office members
const officeTeam = [];

inquirer
  .prompt([
    {
      type: "input",
      name: "name",
      message: "What is your team managers name?",
    },
    {
      type: "input",
      message: "What is this employees id?",
      name: "id",
    },
    {
      type: "input",
      message: "What is this employees email?",
      name: "email",
    },
    {
      type: "input",
      message: "What is this employees office number?",
      name: "office",
    },
    {
      type: "list",
      message: "What employee do you want next?",
      name: "employee",
      choices: ["Engineer", "Intern", "Done"],
    },
  ])
  .then((data) => {
    console.log(data);

    const newManager = new Manager(data.name, data.id, data.email, data.office);
    officeTeam.push(newManager);
    choiceRouter(data.employee);
  });

function createEngineer() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is your engineers name?",
      },
      {
        type: "input",
        message: "What is this engineers id?",
        name: "id",
      },
      {
        type: "input",
        message: "What is this engineers email?",
        name: "email",
      },
      {
        type: "input",
        message: "What is this engineers github username?",
        name: "github",
      },
      {
        type: "list",
        message: "What employee do you want next?",
        name: "employee",
        choices: ["Engineer", "Intern", "Done"],
      },
    ])
    .then((data) => {
      console.log(data);

      const newEngineer = new Engineer(
        data.name,
        data.id,
        data.email,
        data.github
      );
      officeTeam.push(newEngineer);
      choiceRouter(data.employee);
    });
}

function createIntern() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is your interns name?",
      },
      {
        type: "input",
        message: "What is this interns id?",
        name: "id",
      },
      {
        type: "input",
        message: "What is this interns email?",
        name: "email",
      },
      {
        type: "input",
        message: "Where did this intern go to school?",
        name: "school",
      },
      {
        type: "list",
        message: "What employee do you want next?",
        name: "employee",
        choices: ["Engineer", "Intern", "Done"],
      },
    ])
    .then((data) => {
      console.log(data);

      const newIntern = new Intern(data.name, data.id, data.email, data.school);
      officeTeam.push(newIntern);
      choiceRouter(data.employee);
    });
}

function choiceRouter(choice) {
  console.log(officeTeam);
  console.log("Decision was made: " + choice);
  switch (choice) {
    case "Engineer":
      createEngineer();
      break;
    case "Intern":
      createIntern();
      break;
    case "Done":
      doneFunction();
      break;
    default:
      break;
  }
}
function cardPageDisplay(officeTeam) {
  let teamCard = "";
  for (let index = 0; index < officeTeam.length; index++) {
    const employee = officeTeam[index];
    const employeeRole = employee.getRole();
    switch (employeeRole) {
      case "Engineer":
        teamCard = teamCard + htmlGenerator.engineerCard(employee);
        break;
      case "Intern":
        teamCard = teamCard + htmlGenerator.internCard(employee);
        break;
      case "Manager":
        teamCard = teamCard + htmlGenerator.managerCard(employee);
        break;
      default:
        break;
    }
  }
  return teamCard;
}

function doneFunction() {
  
  var finalCardDisplay = cardPageDisplay(officeTeam);
  var pageDisplayFinal = htmlGenerator.htmlPage(finalCardDisplay);

  const filename = `Office-Team-Page.html`;

  fs.writeFile(filename, pageDisplayFinal, (err) =>
    err ? console.log(err) : console.log("Done!")
  );
}

//then display on html template
//writes to file

//done function to print all on html
//mailto links
