// Imports intern constructor
const Intern = require('../lib/Intern.js');

// Tests if the constructor creates an object with the correct properties
test('Creates an intern object', () => {
    const intern = new Intern('Jimmy', 4, 'jimmy@gmail.com', 'jimboschool');

    expect(intern).toEqual(expect.any(Object));

    expect(intern.name).toBe('Jimmy');
    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
});

// Tests if intern.getSchool() returns a string containing the employee's school
test("Returns string containing intern's school", () => {
    const intern = new Intern('Jimmy', 4, 'jimmy@gmail.com', 'jimboschool');

    expect(intern.getSchool()).toEqual(expect.any(String));
    expect(intern.getSchool()).toBe("School: jimboschool");
});

// Tests if intern.getRole() returns a string containing the employee's role
test("Returns Employee's role", () => {
    const intern = new Intern('Jimmy', 4, 'jimmy@gmail.com', 'jimboschool');

    expect(intern.getRole()).toEqual(expect.any(String));
    expect(intern.getRole()).toBe("Intern");
});