const Intern = require('../lib/Intern.js');

test('Creates an intern object', () => {
    const intern = new Intern('Jimmy', 4, 'jimmy@gmail.com', 'jimboschool');

    expect(intern).toEqual(expect.any(Object));

    expect(intern.name).toBe('Jimmy');
    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
});

test("Returns string containing intern's school", () => {
    const intern = new Intern('Jimmy', 4, 'jimmy@gmail.com', 'jimboschool');

    expect(intern.getSchool()).toEqual(expect.any(String));
    expect(intern.getSchool()).toBe("School: jimboschool");
});

test("Returns Employee's role", () => {
    const intern = new Intern('Jimmy', 4, 'jimmy@gmail.com', 'jimboschool');

    expect(intern.getRole()).toEqual(expect.any(String));
    expect(intern.getRole()).toBe("Intern");
});