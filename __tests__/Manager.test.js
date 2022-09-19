const Manager = require('../lib/Manager.js');

test('Creates a manager object', () => {
    const manager = new Manager('Tom', 5, 'tom@gmail.com', 3);

    expect(manager).toEqual(expect.any(Object));

    expect(manager.name).toBe('Tom');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
});

test("Returns manager's office number", () => {
    const manager = new Manager('Tom', 5, 'tom@gmail.com', 3);

    expect(manager.getOfficeNum()).toEqual(expect.any(String));
    expect(manager.getOfficeNum()).toBe("Office Number: 3");
});

test("Returns Employee's role", () => {
    const manager = new Manager('Tom', 5, 'tom@gmail.com', 3);

    expect(manager.getRole()).toEqual(expect.any(String));
    expect(manager.getRole()).toBe("Manager");
});