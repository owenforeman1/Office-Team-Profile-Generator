//questions inquery ting
const inquirer = require("inquirer");
const fs = require("fs");

const Manager = require("./lib/ManagerC");
const Engineer = require("./lib/EngineerC");
const Intern = require("./lib/InternC");

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
    // const filename = `${data.name.toLowerCase().split(" ").join("")}.json`;

    // fs.writeFile(filename, JSON.stringify(data, null, "\t"), (err) =>
    //   err ? console.log(err) : console.log("Success!")
    // );
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
      // const filename = `${data.name.toLowerCase().split(" ").join("")}.json`;

      // fs.writeFile(filename, JSON.stringify(data, null, "\t"), (err) =>
      //   err ? console.log(err) : console.log("Success!")
      // );
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
      // const filename = `${data.name.toLowerCase().split(" ").join("")}.json`;

      // fs.writeFile(filename, JSON.stringify(data, null, "\t"), (err) =>
      //   err ? console.log(err) : console.log("Success!")
      // );
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

function doneFunction(params) {
  console.log("DONE!");
}
//function to gwt info foe eng or intern, prompt
//done function to print all on html
