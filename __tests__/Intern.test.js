const Intern = require('../lib/Intern.js');

test('Creates an intern object', () => {
    const intern = new Intern('Test', 2, 'Test', 'Test');

    expect(intern).toEqual(expect.any(Object));

    expect(intern.name).toBe('Test');
    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
});

test("Returns string containing Employee's name", () => {
    const intern = new Intern('Test', 2, 'Test', 'Test');

    expect(intern.getName()).toEqual(expect.any(String));
    expect(intern.getName()).toBe("Employee's name is Test");
});

test("Returns string containing Employee's id", () => {
    const intern = new Intern('Test', 2, 'Test', 'Test');

    expect(intern.getId()).toEqual(expect.any(String));
    expect(intern.getId()).toBe("Employee's id is 2");
});

test("Returns string containing Employee's email", () => {
    const intern = new Intern('Test', 2, 'Test', 'Test');

    expect(intern.getEmail()).toEqual(expect.any(String));
    expect(intern.getEmail()).toBe("Employee's email is Test");
});

test("Returns string containing intern's school", () => {
    const intern = new Intern('Test', 2, 'Test', 'Test');

    expect(intern.getSchool()).toEqual(expect.any(String));
    expect(intern.getSchool()).toBe("Intern's school is Test");
});

test("Returns Employee's role", () => {
    const intern = new Intern('Test', 2, 'Test', 'Test');

    expect(intern.getRole()).toEqual(expect.any(String));
    expect(intern.getRole()).toBe("Intern");
});