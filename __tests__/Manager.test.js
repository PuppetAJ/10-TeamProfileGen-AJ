// Imports manager constructor
const Manager = require('../lib/Manager.js');

// Tests if the constructor creates an object with the correct properties
test('Creates a manager object', () => {
    const manager = new Manager('Tom', 5, 'tom@gmail.com', 3);

    expect(manager).toEqual(expect.any(Object));

    expect(manager.name).toBe('Tom');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
});

// Tests if manager.getOfficeNum() returns a string containing the employee's office number
test("Returns manager's office number", () => {
    const manager = new Manager('Tom', 5, 'tom@gmail.com', 3);

    expect(manager.getOfficeNum()).toEqual(expect.any(String));
    expect(manager.getOfficeNum()).toBe("Office Number: 3");
});

// Tests if manager.getRole() returns a string containing the employee's role
test("Returns Employee's role", () => {
    const manager = new Manager('Tom', 5, 'tom@gmail.com', 3);

    expect(manager.getRole()).toEqual(expect.any(String));
    expect(manager.getRole()).toBe("Manager");
});