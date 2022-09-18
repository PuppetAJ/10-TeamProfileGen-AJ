const Manager = require('../lib/Manager.js');

test('Creates a manager object', () => {
    const manager = new Manager('Test', 2, 'Test', 1);

    expect(manager).toEqual(expect.any(Object));

    expect(manager.name).toBe('Test');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
});

test("Returns string containing Employee's name", () => {
    const manager = new Manager('Test', 2, 'Test', 1);

    expect(manager.getName()).toEqual(expect.any(String));
    expect(manager.getName()).toBe("Employee's name is Test");
});

test("Returns string containing Employee's id", () => {
    const manager = new Manager('Test', 2, 'Test', 1);

    expect(manager.getId()).toEqual(expect.any(String));
    expect(manager.getId()).toBe("Employee's id is 2");
});

test("Returns string containing Employee's email", () => {
    const manager = new Manager('Test', 2, 'Test', 1);

    expect(manager.getEmail()).toEqual(expect.any(String));
    expect(manager.getEmail()).toBe("Employee's email is Test");
});

test("Returns manager's office number", () => {
    const manager = new Manager('Test', 2, 'Test', 1);

    expect(manager.getOfficeNum()).toEqual(expect.any(String));
    expect(manager.getOfficeNum()).toBe("Manager's office number is 1");
});

test("Returns Employee's role", () => {
    const manager = new Manager('Test', 2, 'Test', 1);

    expect(manager.getRole()).toEqual(expect.any(String));
    expect(manager.getRole()).toBe("Manager");
});