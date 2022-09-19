const Employee = require('../lib/Employee.js');

test('Creates an employee object', () => {
    const employee = new Employee('Bob', 2, 'Bob@gmail.com');

    expect(employee).toEqual(expect.any(Object));

    expect(employee.name).toBe('Bob');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test("Returns string containing Employee's name", () => {
    const employee = new Employee('Bob', 2, 'Bob@gmail.com');

    expect(employee.getName()).toEqual(expect.any(String));
    expect(employee.getName()).toBe("Bob");
});

test("Returns string containing Employee's id", () => {
    const employee = new Employee('Bob', 2, 'Bob@gmail.com');

    expect(employee.getId()).toEqual(expect.any(String));
    expect(employee.getId()).toBe("ID: 2");
});

test("Returns string containing Employee's email in HTML", () => {
    const employee = new Employee('Bob', 2, 'Bob@gmail.com');

    expect(employee.getEmail()).toEqual(expect.any(String));
    expect(employee.getEmail()).toBe('<p>Email: <a href="mailto:Bob@gmail.com">Bob@gmail.com</a></p>');
});

test("Returns Employee's role", () => {
    const employee = new Employee('Bob', 2, 'Bob@gmail.com');

    expect(employee.getRole()).toEqual(expect.any(String));
    expect(employee.getRole()).toBe("Employee");
});