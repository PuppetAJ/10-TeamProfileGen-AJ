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
        return `<p>GitHub: <a href="https://github.com/${this.gitHub}" target="_blank">${this.gitHub}</a></p>`;
    };

};

module.exports = Engineer;