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

    getGitHub() {
        return `${this.getRole()}'s school is ${this.school}`;
    };

};

module.exports = Intern;