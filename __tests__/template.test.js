const template = require('../src/template');

const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern'); 

const employeeArr = [];

const manager = new Manager('Tom', 5, 'tom@gmail.com', 3);
const intern = new Intern('Jimmy', 4, 'jimmy@gmail.com', 'jimboschool');
const engineer = new Engineer('Bobby', 3, 'Bobby@gmail.com', 'billybob');

employeeArr.push(manager, intern, engineer);

test('Returns formatted data as a string', () => {
    expect(template(employeeArr)).toEqual(expect.any(String));
});