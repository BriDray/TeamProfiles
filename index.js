const inquirer = require('inquirer')
const fs = require('fs')

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
  {
    type: 'list',
    message: 'Would you like to add another team member?',
    name: 'role',
    choices: ['yes', 'no'],
  }
];

// QUESTIONS FOR THE INTERNS
const internQuestions = [
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

const options = [
  {
    type: 'list',
    message: 'What would you like to do?',
    name: 'choice',
    choices: ['Add an engineer', 'Add an intern', 'Quit'],
  }
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

  let html = `<header style="height: 125px; width: 100%; background-color: darkcyan; margin-top: 0%;">
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
    <footer style="height: 45px; width: 100%; background-color: darkcyan;"></footer>`;


  inquirer.prompt(manager).then((manager) => {
    console.log("manager " + JSON.stringify(manager));

    let done = false;

    while (!done) {
      getUserChoice().then(choice => {
        console.log(JSON.stringify(choice));
        console.log("choice " + JSON.stringify(choice));

        if (choice.name === "Quit") {
          done = true;
        } else {
          if (choice.name === "Add an engineer") {
            inquirer.prompt(engineerQuestions).then(engineer => {
              // deal with engineer
              console.log(JSON.stringify(engineer));
            })

          } else {
            inquirer.prompt(internQuestions).then(intern => {
              // deal with intern
              console.log(JSON.stringify(intern));
            })
          }
        }
      });
    }

    writeToFile("generateHTML.html",
      html
    )
  });

}

function getUserChoice() {
  return inquirer.prompt(options);
}

// Function call to initialize app
init();
//  var Anthony = new Manager ("anthony")