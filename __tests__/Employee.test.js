// Import employee constructor
const Employee = require('../lib/Employee.js');

// Tests if employee constructor creates an object
test('Creates an employee object', () => {
    const employee = new Employee('Bob', 2, 'Bob@gmail.com');

    expect(employee).toEqual(expect.any(Object));

    expect(employee.name).toBe('Bob');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

// Tests if employee.getName() returns a string with the employee's name
test("Returns string containing Employee's name", () => {
    const employee = new Employee('Bob', 2, 'Bob@gmail.com');

    expect(employee.getName()).toEqual(expect.any(String));
    expect(employee.getName()).toBe("Bob");
});

// Tests if employee.getId() returns a string with the employee's id
test("Returns string containing Employee's id", () => {
    const employee = new Employee('Bob', 2, 'Bob@gmail.com');

    expect(employee.getId()).toEqual(expect.any(String));
    expect(employee.getId()).toBe("ID: 2");
});

// Tests if employee.getEmail() returns a string with formatted html
test("Returns string containing Employee's email in HTML", () => {
    const employee = new Employee('Bob', 2, 'Bob@gmail.com');

    expect(employee.getEmail()).toEqual(expect.any(String));
    expect(employee.getEmail()).toBe('<p>Email: <a href="mailto:Bob@gmail.com">Bob@gmail.com</a></p>');
});

// Tests if employee.getRole() returns a string with the proper role
test("Returns Employee's role", () => {
    const employee = new Employee('Bob', 2, 'Bob@gmail.com');

    expect(employee.getRole()).toEqual(expect.any(String));
    expect(employee.getRole()).toBe("Employee");
});