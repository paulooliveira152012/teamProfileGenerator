// // const { init } = require('express/lib/application')
// // const { type } = require('express/lib/response')
// // const fs = require('fs')
// const inquirer = require ('inquirer')
// // const generateMarkdown = require('./utils/generateMarkdown')


// // questions to be answerd by user
// const questions = [
//     {
//         type: "input",
//         name: "name",
//         message: "What's your name?",
//     },


//     {
//         type: "input",
//         name: "id",
//         message: "What's your Id",
//     },

//     {
//         type: "input",
//         name: "email",
//         message: "What's your E-mail?",
//     },
// ]

// // Questions for each choice of addition
// const engineerQuestion = [
//     {
//         type: "input",
//         name: "github",
//         message: "What's your github?"
//     }
// ]

// const internQuestion = [
//     {
//         type: "input",
//         name: "school",
//         message: "What's the name of your school?"
//     }
// ]

// const managerQuestion = [
//     {
//         type: "input",
//         name: "officeNumber",
//         message: "What's your office number?",
//     },
// ]


// //function to start the app
// function start() {
//     inquirer.prompt(
//         // {
//         //     type: "input",
//         //     name: "name",
//         //     message: "What's your name?",
//         // },
    
    
//         // {
//         //     type: "input",
//         //     name: "id",
//         //     message: "What's your Id",
//         // },
    
//         // {
//         //     type: "input",
//         //     name: "email",
//         //     message: "What's your E-mail?",
//         // },

//         {
//             type: "list",
//             name: "choice",
//             message: "What would you like to do?", 
//             choices: [
//                 "Add an Engineer",
//                 "Add an Intern",
//                 "Add a Manager",
//                 "Exit",
//             ]

//         },

//           {
//             type: "input",
//             name: "email",
//             message: "What's your E-mail?",
//         },
    
//     )
//     .then (
//         function(userInput){
//             // console.log(userInput)
//             // if(userInput.choice === "Add an Engineer"){
//             //     addEngineer()
//             // }
//             // else if (userInput.choice === "Add an Intern"){
//             //     addIntern()
//             // }
//             // else if (userInput.choice === "Add a Manager"){
//             //     addManager()
//             // }
//             // else {
//             //     console.log("Thank you for Using out app")
//             // }
//         }
//     )
// }

// start()

// //create functions
// // lookup: arrays, iquirer package, method push
// //function to add an engineer
// function addEngineer(userInput) {
//    return inquirer.prompt[
//     (
//         {
//          type: "input",
//          name: "github",
//          message: "What's your github?",
//      },
 
//      {
//         type: "input",
//         name: "github",
//         message: "What's your github?",
//      }
//     )
//    ]
  
//    console.log("yes")
// }
// //function to add an intern
// function addIntern() {
//     console.log('intern')
// }
// //function to add a manager
// function addManager() {

// }



// // search how to create a variable using a class



// // import all the classes, engineer, intern and manager
// function init() {
//     return inquirer.prompt(questions)
//     .then(function(data){
//         console.log(data)
//     //file name and data to be passed to the file 
//     fs.writeFileSync("./dist/index.html", generateMarkdown(data))
//     })
// }

// // function call to initialize app 

// init()




// __________

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
var idArray = [];


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
            // fs.writeFileSync('./dist/index.html', generateMarkdown())
            createTeam()
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
        start()
    } else {
            const engineerAnswer = new Engineer(
                input.name, 
                input.id, 
                input.email, 
                answers.github
            );
            console.log("Thank you for Using out app")
            newStaffMember.push(engineerAnswer);
            console.log(newStaffMember)
            // console.log(engineerAnswer);
        // fs.writeFileSync('./dist/index.html', generateMarkdown(engineerAnswer))
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
        start()
    } else {  
        const internAnswer = new Intern(
                input.name, 
                input.id, 
                input.email, 
                answers.school
            );
            console.log("Thank you for Using out app")
            newStaffMember.push(internAnswer);
            console.log(newStaffMember)
            // console.log(internAnswer)
            // fs.writeFileSync('./dist/index.html', generateMarkdown(internAnswer))
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
            start()
        } else {
            const managerAnswer = new Manager(
                input.name,
                input.id, 
                input.email, 
                answers.officeNumber,
                );
                newStaffMember.push(managerAnswer);
                console.log(newStaffMember)
                // console.log(managerAnswer)
                // fs.writeFileSync('./dist/index.html', generateMarkdown(managerAnswer))
                createTeam()
            }
        
        }
    )
}

function createTeam() {
    console.log("One or more staff member(s) got added to the system")
    fs.writeFile('index.html', template(newStaffMember), 'utf-8', err => err ? console.log(err) : console.log('HTML has been created'));
  }



// // TODO: Create a function to initialize app
// function init() {
//     return inquirer.prompt(questions)
//     .then(function(data){
//         console.log(data)
//         fs.writeFileSync('./dist/index.html', generateMarkdown(data))
//     })
// }

// Function call to initialize app
// init();

start()