// Employee class declaration
class Employee {
    // Constructor for creating an employee
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    };

    // Prototypal methods for use in other scripts..

    getName() {
        return `${this.name}`;
    }

    getId() {
        return `ID: ${this.id}`;
    }

    getEmail() {
        return `<p>Email: <a href="mailto:${this.email}">${this.email}</a></p>`;
    }

    getRole() {
        return 'Employee';
    }
};

// Exports class
module.exports = Employee;