class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    };

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

module.exports = Employee;