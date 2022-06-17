// const { init } = require('express/lib/application')
const { type } = require('express/lib/response')
const fs = require('fs')
const inquirer = require ('inquirer')
const generateMarkdown = require('./utils/generateMarkdown')


//questions to be answerd by user
const questions = [
    {
        type: "input",
        name: "name",
        message: "What's your name?",
    },


    {
        type: "input",
        name: "id",
        message: "What's your Id",
    },

    {
        type: "input",
        name: "email",
        message: "What's your E-mail?",
    },
]

// Questions for each choice of addition
const engineerQuestion = [
    {
        type: "input",
        name: "github",
        message: "What's your github?"
    }
]

const internQuestion = [
    {
        type: "input",
        name: "school",
        message: "What's the name of your school?"
    }
]

const managerQuestion = [
    {
        type: "input",
        name: "officeNumber",
        message: "What's your office number?",
    },
]


//function to start the app
function start() {
    return inquirer.prompt(
        {
            type: "list",
            name: "choice",
            message: "What would you like to do?", 
            choices: [
                "Add an Engineer",
                "Add an Intern",
                "Add a Manager",
                "Exit",
            ]

        }
    
    )
    .then (
        function(userInput){
            // console.log(userInput.choice)
            if(userInput.choice === "Add an Engineer"){
                addEngineer()
            }
            else if (userInput.choice === "Add an Intern"){
                addIntern()
            }
            else if (userInput.choice === "Add a Manager"){
                addManager()
            }
            else {
                console.log("Thank you for Using out app")
            }
        }
    )
}

start()

//create functions
// lookup: arrays, iquirer package, method push
//function to add an engineer
function addEngineer(userInput) {
   inquirer.prompt(
       {
        type: "input",
        name: "github",
        message: "What's your github?",
    }
   )
   console.log("yes")
}
//function to add an intern
function addIntern() {

}
//function to add a manager
function addManager() {

}



// search how to create a variable using a class



// import all the classes, engineer, intern and manager
function init() {
    return inquirer.prompt(questions)
    .then(function(data){
        console.log(data)
    //file name and data to be passed to the file 
    fs.writeFileSync("./dist/index.html", generateMarkdown(data))
    })
}

// function call to initialize app 

init()