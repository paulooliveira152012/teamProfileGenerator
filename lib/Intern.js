const Employee = require("./Employee")

class Intern extends Employee {
    constructor (name, id, email, school) {
        // super says "we are getting the name, id and email from the employee class"
        super (name, id, email)

        this.school = school
    }
    getSchool() {
        return this.school
    }
    getRole() {
        return "Intern"
    }
}

module.exports = Intern;