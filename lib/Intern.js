// Imports employee constructor
const Employee = require('./Employee.js');

// Intern class declaration, extending from employee
class Intern extends Employee {
    // Constructor
    constructor (name, id, email, school) {
        // Uses employee constructor for first 3 params
        super(name, id, email)

        this.school = school;
    };

    // Prototypal methods for use in other scripts..

    getRole() {
        return 'Intern';
    };

    getSchool() {
        return `School: ${this.school}`;
    };

};

// Exports class
module.exports = Intern;