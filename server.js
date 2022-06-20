// TODO: Include packages needed for this application
// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown')

//constructures
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')

// Array for answers
var newStaffMember = [];

function start() {
        inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "What's the staff member's name?",
            },


            {
                type: "input",
                name: "id",
                message: "What's the staff member's Id",
            },

            {
                type: "input",
                name: "email",
                message: "What's the staff member's E-mail?",
            },

            {
                type: "list",
                name: "choice",
                message: "What'ts the staff member's role?", 
                choices: [
                    "Engineer",
                    "Intern",
                    "Manager",
                    "Exit",
                ]
            }
        ]
        
    )

    .then (
        function(userInput){

            //first console log
            console.log(userInput)
            if(userInput.choice === "Engineer"){
                addEngineer(userInput)
            }
            else if (userInput.choice === "Intern"){
                addIntern(userInput)
            }
            else if (userInput.choice === "Manager"){
                addManager(userInput)
            }
            else {
                // console.log("Thank you for Using out app")

            }
        }
    )
}



function addEngineer(input) {
    //prompt users with engineer based questions
    inquirer.prompt(
        [
            {
                type: "input",
                name: "github",
                message: "What's their github account?",
            },
            {
                type: "list",
                name: "choice",
                message: "would you like to add a new staff member?",
                choices: ["yes", "no",]
            }
        ] 
        
    )
.then(answers => {
    if(answers.choice === "yes") {
        const engineerAnswer = new Engineer(
            input.name, 
            input.id, 
            input.email, 
            answers.github
        );
        newStaffMember.push(engineerAnswer);
        start()
    } else {
            const engineerAnswer = new Engineer(
                input.name, 
                input.id, 
                input.email, 
                answers.github
            );
            newStaffMember.push(engineerAnswer);
            console.log("Thank you for Using out app")
            console.log(newStaffMember)
        createTeam()
        }
    }
)
}

function addIntern(input) {
    inquirer.prompt(
        [
            {
                type: "input",
                name: "school",
                message: "What's their school name?"
            },
            {
                type: "list",
                name: "choice",
                message: "would you like to add a new staff member?",
                choices: ["yes", "no",]
            }
        ]
    )
.then(answers => {
    if(answers.choice === "yes") {
        const internAnswer = new Intern(
            input.name, 
            input.id, 
            input.email, 
            answers.school
        );
        newStaffMember.push(internAnswer);
        start()
    } else {  
        const internAnswer = new Intern(
                input.name, 
                input.id, 
                input.email, 
                answers.school
            );
            newStaffMember.push(internAnswer);
            console.log("Thank you for Using out app")
            console.log(newStaffMember)
            createTeam()
            }
        }
    )
}

function addManager(input) {
    inquirer.prompt(
        [
            {
                type: "input",
                name: "officeNumber",
                message: "What's their office number?"
            },
            {
                type: "list",
                name: "choice",
                message: "would you like to add a new staff member?",
                choices: ["yes", "no",]
            }
        ]
    )
    .then(answers => {
        if(answers.choice === "yes") {
            const managerAnswer = new Manager(
                input.name,
                input.id, 
                input.email, 
                answers.officeNumber,
                );
                newStaffMember.push(managerAnswer);
            start()
        } else {
            const managerAnswer = new Manager(
                input.name,
                input.id, 
                input.email, 
                answers.officeNumber,
                );
                newStaffMember.push(managerAnswer);
                console.log("Thank you for Using out app")
                console.log(newStaffMember)
                createTeam()
            }
        }
    )
}

function createTeam() {
    console.log("One or more staff member(s) got added to the system")
    fs.writeFileSync('./dist/index.html', generateMarkdown(newStaffMember))
  }

start()