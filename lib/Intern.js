const Employee = require('./Employee.js');

class Intern extends Employee {
    constructor (name, id, email, school) {
        super(name, id, email)

        this.school = school;
    };

    getRole() {
        // super.getRole();
        return 'Intern';
    };

    getSchool() {
        return `School: ${this.school}`;
    };

};

module.exports = Intern;