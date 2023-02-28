const inquirer = require('inquirer')
const fs = require('fs')
const generateHTML = require("./generateHTML");

// Importing all classes
const Employee = require('./lib/Employee');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');

// Declare employees as an empty array to be filled with user input
const employees = [
      {
        type: 'list',
        message: 'What is your Position?',
        name: 'role',
        choices: ['Employee', 'Manager', 'Engineer', 'Intern'],
      },
      {
        type: 'input',
        name: 'name',
        message: "What's your First and Last Name?",
      },
      {
        type: 'input',
        name: 'id',
        message: "What's your Employee Id?",
      },
      {
        type: 'input',
        name: 'email',
        message: "Enter your E-mail?",
      },
      {
        type: 'input',
        name: 'officeNumber',
        message: "what's your office number?",
      },
      {
        type: 'input',
        name: 'github',
        message: "what's your Github Username?",
      },
      {
        type: 'input',
        name: 'school',
        message: "What school are you/did you attend?",
      },
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
      if (err) throw err;
      console.log('Saved!');
    });
  }

function init() {
    console.log("initialize")
    inquirer.prompt(questions).then((answers) => {
      writeToFile("generateHTML.js",
      `
      


      `)
    });
  
  }
  
  // Function call to initialize app
  init();
