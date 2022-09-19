const Employee = require('./Employee.js');

class Manager extends Employee {
    constructor (name, id, email, officeNum) {
        super(name, id, email)

        this.officeNumber = officeNum;
    };

    getRole() {
        // super.getRole();
        return 'Manager';
    };

    getOfficeNum() {
        return `Office Number: ${this.officeNumber}`;
    };

};

module.exports = Manager;

