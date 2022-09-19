// Imports employee constructor
const Employee = require('./Employee.js');

// Manager class declaration, extending from employee
class Manager extends Employee {
    // Constructor
    constructor (name, id, email, officeNum) {
        // Uses employee constructor for first 3 params
        super(name, id, email)

        this.officeNumber = officeNum;
    };

    // Prototypal methods for use in other scripts..

    getRole() {
        return 'Manager';
    };

    getOfficeNum() {
        return `Office Number: ${this.officeNumber}`;
    };

};

// Exports class
module.exports = Manager;

