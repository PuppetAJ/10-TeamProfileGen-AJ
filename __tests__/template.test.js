// Imports template function
const template = require('../src/template');

// Imports constructors
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern'); 

// Creates an array with employees
const employeeArr = [];

const manager = new Manager('Tom', 5, 'tom@gmail.com', 3);
const intern = new Intern('Jimmy', 4, 'jimmy@gmail.com', 'jimboschool');
const engineer = new Engineer('Bobby', 3, 'Bobby@gmail.com', 'billybob');

employeeArr.push(manager, intern, engineer);

// Tests if template function returns a string using the array as a paramater
test('Returns formatted data as a string', () => {
    expect(template(employeeArr)).toEqual(expect.any(String));
});