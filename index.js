const inquirer = require('inquirer')
const fs = require('fs')
const generateHTML = require("./generateHTML");

// Importing all classes
const Employee = require('./lib/Employee');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');

// WHAT SET OF QUESTIONS WILL WE NEED?
const Position = [
 {
        type: 'list',
        message: 'What is your Position?',
        name: 'role',
        choices: ['Employee', 'Manager', 'Engineer', 'Intern'],
      }
]

// QUESTIONS FOR THE EMPLOYEES
const employees = [
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
];

// QUESTIONS FOR THE INTERNS
const interns = [
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
    name: 'school',
    message: "What school are you attending?",
  },

]

// QUESTIONS FOR THE MANAGERS
const managers = [
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
    message: "What's your Office Number?",
  },
]

// QUESTIONS FOR THE ENGINEERS
const Engineers = [
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
    name: 'github',
    message: "Whats your Github User name?",
  },
]

// WRITING TO THE FILE
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
      if (err) throw err;
      console.log('Saved!');
    });
  }

// CHOOSING WHAT FILE WE WANT OUR ANSWERS TO WRITE TO. 
function init() {
    console.log("initialize")
    inquirer.prompt(questions).then((answers) => {
      writeToFile("generateHTML.js",
      `
// HEADER
<header style="height: 125px; width: 100%; background-color: darkcyan; margin-top: 0%;">
<h1 Style="font-size: 100px; text-align: center; font-weight: bold; color:azure">Meet The Team</h1>
</header>

// SECOND PAGE TITLE
<h2 Style="font-size: 65px; text-align: center; font-weight: bold; color:black; margin-top: 10px;">Team Profiles</h2>

// WHERE I WANT THE CARDS TO GENERATE
<div class="cardContainer">

// INLINE STYLE FOR THE CARDS AND CARDCONTAINER
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
            border-top: 10px;
            border-color: solid darkmagenta;
            background-color: antiquewhite;
            text-align: center;

        }
        h3 {
          font-size: 30px;
          font-weight: bold;
      }
      h4, h5, h6 {
          font-size: 18px;
      }
</style>
</div>

// FOOTER
<footer style="height: 45px; width: 100%; background-color: darkcyan;"></footer>

      `)
    });
  
  }
  
  // Function call to initialize app
  init();
 var Anthony = new Manager ("anthony")