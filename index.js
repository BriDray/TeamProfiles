const inquirer = require('inquirer')
const fs = require('fs')

// Importing all classes
// const Employee = require('./lib/Employee');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');


const employees = []

// QUESTIONS FOR THE INTERNS
const internQuestions = [
  {
    type: 'input',
    name: 'name',
    message: "What's the Intern's First and Last Name?",
  },
  {
    type: 'input',
    name: 'id',
    message: "What's the Intern's Employee Id?",
  },
  {
    type: 'input',
    name: 'email',
    message: "Enter the Intern's E-mail?",
  },
  {
    type: 'input',
    name: 'school',
    message: "What school is the Intern attending?",
  },

]

// QUESTIONS FOR THE MANAGERS
const manager = [
  {
    type: 'input',
    name: 'name',
    message: "Enter Manager's First and Last Name?",
  },
  {
    type: 'input',
    name: 'id',
    message: "What's the Manager's Employee Id?",
  },
  {
    type: 'input',
    name: 'email',
    message: "Enter the Manager's email?",
  },
  {
    type: 'input',
    name: 'officeNumber',
    message: "Enter the Manager's Office Number?",
  },
]

// QUESTIONS FOR THE ENGINEERS
const engineerQuestions = [
  {
    type: 'input',
    name: 'name',
    message: "What's the Engineer's First and Last Name?",
  },
  {
    type: 'input',
    name: 'id',
    message: "What's the Engineer's Employee Id?",
  },
  {
    type: 'input',
    name: 'email',
    message: "Enter the Engineer's E-mail?",
  },
  {
    type: 'input',
    name: 'github',
    message: "Whats the Engineer's Github User name?",
  },
]

// WRITING TO THE FILE
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function (err) {
    if (err) throw err;
    console.log('Saved!');
  });
}

// CHOOSING WHAT FILE WE WANT OUR ANSWERS TO WRITE TO. AND CODING THE HTML. 
let html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .cardContainer {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-evenly; 
            margin: 15px 0 15px 0;
        }
        .profileCard {
            display: inline-block;
            width:350px;
            height:375px;
            border: 2px solid black;
            background-color: antiquewhite;
            text-align: center;
            margin: 65px;

        }
        h3 {
          font-size: 35px;
          font-weight: bold;
          color: white;
          background-color: darkcyan;
        }
        h4, h5, h6 {
            font-size: 18px;
        }
     </style>
</head>
<body>
  <header style="width: 100%; background-color: darkcyan; margin-top: 0%;">
  <h1 Style="font-size: 100px; text-align: center; font-weight: bold; color:azure; margin: 0;">Meet The Team</h1>
  </header>

  <!-- SECOND PAGE TITLE-->
  <h2 Style="font-size: 65px; text-align: center; font-weight: bold; color:black; margin-top: 10px;">Team Profiles</h2>
  `;

function init() {
  inquirer.prompt(manager).then((managerAnswer) => {
    console.log("manager " + JSON.stringify(managerAnswer));
    // const {name, id, email, officeNumber} = managerAnswer
    const manager = new Manager (managerAnswer)
    employees.push(manager)
    menu ();

  });
}
function menu () {

  inquirer.prompt([
    {
      type: 'list',
      message: 'What would you like to do?',
      name: 'choice',
      choices: ['Add an engineer', 'Add an intern', 'Quit'],
    }
  ]).then((userChoice) => {
    console.log("userChoice " + JSON.stringify(userChoice));
    switch (userChoice.choice) {
      case 'Add an engineer':
        addEngineer()
        break
      case 'Add an intern':
        addIntern()
        break
      default:
        employees.forEach(employee => {
          html += employee.createCard();
          html +=   `</body></html>`;
        });
        writeToFile("generateHTML.html",
          html
        )
    }
  });
}

function addEngineer (){
  inquirer.prompt(engineerQuestions).then((engineerAnswer) => {
    console.log("engineerAn " + JSON.stringify(engineerAnswer));
    const engineer = new Engineer (engineerAnswer)
    employees.push(engineer)
    menu ();
  });
}

function addIntern (){
  inquirer.prompt(internQuestions).then((internAnswer) => {
    console.log("internAn " + JSON.stringify(internAnswer));
    const intern = new Intern (internAnswer)
    employees.push(intern)
    menu ();
  });
}

// Function call to initialize app
init();