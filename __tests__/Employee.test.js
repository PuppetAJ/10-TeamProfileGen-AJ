const Employee = require('../lib/Employee.js');

test('Creates an employee object', () => {
    const employee = new Employee('Test', 2, 'Test');

    expect(employee).toEqual(expect.any(Object));

    expect(employee.name).toBe('Test');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test("Returns string containing Employee's name", () => {
    const employee = new Employee('Test', 2, 'Test');

    expect(employee.getName()).toEqual(expect.any(String));
    expect(employee.getName()).toBe("Employee's name is Test");
});

test("Returns string containing Employee's id", () => {
    const employee = new Employee('Test', 2, 'Test');

    expect(employee.getId()).toEqual(expect.any(String));
    expect(employee.getId()).toBe("Employee's id is 2");
});

test("Returns string containing Employee's email", () => {
    const employee = new Employee('Test', 2, 'Test');

    expect(employee.getEmail()).toEqual(expect.any(String));
    expect(employee.getEmail()).toBe("Employee's email is Test");
});

test("Returns Employee's role", () => {
    const employee = new Employee('Test', 2, 'Test');

    expect(employee.getRole()).toEqual(expect.any(String));
    expect(employee.getRole()).toBe("Employee");
});