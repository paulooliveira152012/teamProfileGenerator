const inquirer = require ('inquirer')
const generalQuestions = [
    {
        type: "input",
        name: "name",
        message: "What's the employee's name?"
    },

    {
        type: "input",
        name: "id",
        message: "What's your Id"
    },

    {
        type: "input",
        name: "email",
        message: "What's your E-mail?"
    }
]

const managerQuestion = [
    {
        type: "input",
        name: "officeNumber",
        message: "What's your office number?"
    }
]

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
                "Exit"
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
// search how to create a variable using a class
// import all the classes, engineer, intern and manager