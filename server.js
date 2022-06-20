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
    //if engineer is chosen
    if (input.choice === "Engineer") {
        const Engineer = inquirer.prompt (
            [
                {
                    type: "input",
                    name: "github",
                    message: "What's their github account?",
                }
            ]
        ) 
        const newEngineer = new Engineer(
            input.name, 
            input.id, 
            input.email, 
            answers.github
        );
        newStaffMember.push(newEngineer);
        //if Intern is chosen
    } else if (input.choice === "Intern") {
        const Intern = inquirer.prompt (
            [
                {
                    type: "input",
                    name: "school",
                    message: "What's their school name?"        
                }
            ]
        )
        const newIntern = new Intern(
            input.name, 
            input.id, 
            input.email, 
            answers.school
        );
        newStaffMember.push(newIntern);

        //if Manager is chosen
    } else if (input.choice === "Manager") {
        const Manager = inquirer.prompt (
            [
                {
                    type: "input",
                    name: "officeNumber",
                    message: "What's their office number?"
                }
            ]
        )
        const newManager = new Manager(
            input.name,
            input.id, 
            input.email, 
            answers.officeNumber,
            );
            newStaffMember.push(newManager)
    }
}

//end of start function

function addFinish() {
    start()
    const addNewMember = inquirer.prompt(
        {
            type: 'list',
            name: 'addMember',
            choices: ['Add new member', 'Create team'],
            message: 'What would you like to do next?'
        }
    )
    
    if(addNewMember.addMember === 'Add new member') {
        return addFinish()
    } 
    return createTeam();
}

addFinish()

    function createTeam() {
        console.log("One or more staff member(s) got added to the system")
        fs.writeFileSync('./dist/index.html', generateMarkdown(newStaffMember.data), "utf-8");
      }