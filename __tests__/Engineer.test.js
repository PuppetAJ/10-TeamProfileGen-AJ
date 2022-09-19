// Imports engineer constructor
const Engineer = require('../lib/Engineer.js');

// Tests if the constructor creates an object with the correct properties
test('Creates an engineer object', () => {
    const engineer = new Engineer('Bobby', 3, 'Bobby@gmail.com', 'billybob');

    expect(engineer).toEqual(expect.any(Object));

    expect(engineer.name).toBe('Bobby');
    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
});

// Tests if engineer.getGitHub() returns the employee's github formatted as html as a string
test("Returns string containing engineer's github as an HTML a element", () => {
    const engineer = new Engineer('Bobby', 3, 'Bobby@gmail.com', 'billybob');

    expect(engineer.getGitHub()).toEqual(expect.any(String));
    expect(engineer.getGitHub()).toBe('<p>GitHub: <a href="https://github.com/billybob" target="_blank">billybob</a></p>');
});

// Tests if engineer.getRole() returns proper role as a string
test("Returns Employee's role", () => {
    const engineer = new Engineer('Bobby', 3, 'Bobby@gmail.com', 'billybob');

    expect(engineer.getRole()).toEqual(expect.any(String));
    expect(engineer.getRole()).toBe("Engineer");
});