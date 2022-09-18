const Employee = require('./Employee.js');

class Engineer extends Employee {
    constructor (name, id, email, gitHub) {
        super(name, id, email)

        this.gitHub = gitHub;
    };

    getRole() {
        // super.getRole();
        return 'Engineer';
    };

    getGitHub() {
        return `${this.getRole()}'s office number is ${this.gitHub}`;
    };

};

module.exports = Engineer;