// Imports employee constructor
const Employee = require('./Employee.js');

// Engineer class declaration, extending from employee
class Engineer extends Employee {
    // Constructor
    constructor (name, id, email, gitHub) {
        // Uses employee constructor for first 3 params
        super(name, id, email)

        this.gitHub = gitHub;
    };

    // Prototypal methods for use in other scripts..
    
    getRole() {
        return 'Engineer';
    };

    getGitHub() {
        return `<p>GitHub: <a href="https://github.com/${this.gitHub}" target="_blank">${this.gitHub}</a></p>`;
    };

};

// Exports class
module.exports = Engineer;