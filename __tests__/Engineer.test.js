const Engineer = require('../lib/Engineer.js');

test('Creates an engineer object', () => {
    const engineer = new Engineer('Test', 2, 'Test', 'Test');

    expect(engineer).toEqual(expect.any(Object));

    expect(engineer.name).toBe('Test');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
});

test("Returns string containing Employee's name", () => {
    const engineer = new Engineer('Test', 2, 'Test', 'Test');

    expect(engineer.getName()).toEqual(expect.any(String));
    expect(engineer.getName()).toBe("Employee's name is Test");
});

test("Returns string containing Employee's id", () => {
    const engineer = new Engineer('Test', 2, 'Test', 'Test');

    expect(engineer.getId()).toEqual(expect.any(String));
    expect(engineer.getId()).toBe("Employee's id is 2");
});

test("Returns string containing Employee's email", () => {
    const engineer = new Engineer('Test', 2, 'Test', 'Test');

    expect(engineer.getEmail()).toEqual(expect.any(String));
    expect(engineer.getEmail()).toBe("Employee's email is Test");
});

test("Returns string containing engineer's github", () => {
    const engineer = new Engineer('Test', 2, 'Test', 'Test');

    expect(engineer.getGitHub()).toEqual(expect.any(String));
    expect(engineer.getGitHub()).toBe("Engineer's office number is Test");
});

test("Returns Employee's role", () => {
    const engineer = new Engineer('Test', 2, 'Test', 'Test');

    expect(engineer.getRole()).toEqual(expect.any(String));
    expect(engineer.getRole()).toBe("Engineer");
});