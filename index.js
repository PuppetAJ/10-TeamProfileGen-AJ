const inquirer = require('inquirer');
const generateHtml = require('./src/template');
const { writeFile } = require('./src/generate-file');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern'); 

const employeeArr = [];

/*
TO DO:
- refactor tests?
- Create tests for html generation?
- Change test inputs for tests
- Comment the html
- Comment the css
- refactor inquirer prompts
- validate empty prompt for all isNaN checks
*/

const promptUser = () => {

    console.log(`
    =================
    Team Manager Info
    =================
    `);

    return inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: "Please enter your team manager's name.",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    return('Please enter a name!')
                    // return false;
                }
            }
        },
        {
            type: 'input',
            name: 'managerID',
            message: "Please enter your team manager's ID.",
            validate: idInput => {
                if(isNaN(idInput) || !idInput) {
                    return('Please enter a valid ID!');
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: "Please enter your team manager's email.",
            validate: emailInput => {
                // https://stackoverflow.com/questions/46155/how-can-i-validate-an-email-address-in-javascript
                valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput);
                if(valid) {
                    return true;
                } else {
                    return('Please enter a valid email!');
                }
            }
        },
        {
            type: 'input',
            name: 'managerOfficeNum',
            message: "Please enter your team manager's office number.",
            validate: officeNumInput => {
                if(isNaN(officeNumInput) || !idInput) {
                    return('Please enter a valid office number!');
                } else {
                    return true;
                }
            }
        },

    ])
};

const promptList = promptData => {

    const sendData = promptData => {

        const { managerName, managerID, managerEmail, managerOfficeNum, interns, engineers } = promptData;

            const manager = new Manager (managerName, managerID, managerEmail, managerOfficeNum);
            employeeArr.push(manager);

            engineers.forEach(engineer => {
                const {engineerName, engineerID, engineerEmail, engineerGitHub} = engineer;
                const curEngineer = new Engineer (engineerName, engineerID, engineerEmail, engineerGitHub);
                employeeArr.push(curEngineer);
            })
            
            interns.forEach(intern => {
                const {internName, internID, internEmail, internSchool} = intern;
                const curIntern = new Intern (internName, internID, internEmail, internSchool);
                employeeArr.push(curIntern);
            })
            
            return new Promise((resolve, reject) => {
                resolve(
                    generateHtml(employeeArr)
                )

                reject("HTML generation failed!");
                
            }) 
            .then(formattedData => {
                return writeFile(formattedData)
            })
            .then(writeFileRes => {
                console.log(writeFileRes.message);
            })
            .catch(err => {
                console.log(err);
            })

    };

    if (!promptData.engineers) {
        promptData.engineers = [];
    }

    if (!promptData.interns) {
        promptData.interns = [];
    }

    if (promptData.engineers.length + promptData.interns.length < 4) {

        return inquirer.prompt([
            {
                type: 'rawlist',
                name: 'nextEmployee',
                message: "Please select another employee to add to your team (max 5), or finish building.",
                choices: [
                    {value: 0, name: "Engineer"},
                    {value: 1, name: "Intern"},
                    {value: 2, name: "Finish building team"}
                ]
    
            }
        ]).then(data => { 
    
                if (data.nextEmployee === 0) {
                    promptEngineer(promptData);
                }
                if (data.nextEmployee === 1) {
                    promptIntern(promptData);
                }
                if (data.nextEmployee === 2) {

                    sendData(promptData);

                }
    
        })

    } else {
    console.log(`
    ======================
    Max employees reached!
    ----------------------
       Creating files...
    ======================
    `);

    sendData(promptData);   

    }

    
};

const promptEngineer = promptData => {

    console.log(`
    =============
    Engineer Info
    =============
    `);

    return inquirer.prompt([
        {
            type: 'input',
            name: 'engineerName',
            message: "Please enter your engineer's name.",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    return('Please enter a name!')
                }
            }

        },
        {
            type: 'input',
            name: 'engineerID',
            message: "Please enter your engineer's ID.",
            validate: idInput => {
                if(isNaN(idInput) || !idInput) {
                    return('Please enter a valid ID!');
                } else {
                    
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: "Please enter your engineer's email.",
            validate: emailInput => {
                // https://stackoverflow.com/questions/46155/how-can-i-validate-an-email-address-in-javascript
                valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput);
                if(valid) {
                    return true;
                } else {
                    return('Please enter a valid email!');
                }
            }
        },
        {
            type: 'input',
            name: 'engineerGitHub',
            message: "Please enter your engineer's github username.",
            validate: githubInput => {
                if(githubInput) {
                    return true;
                } else {
                    return('Please enter a username!');
                }
            }
        }
    ]).then(engineerData => {
        promptData.engineers.push(engineerData);
        promptList(promptData);
    });
};

const promptIntern = promptData => {

    console.log(`
    ===========
    Intern Info
    ===========
    `);

    return inquirer.prompt([
        {
            type: 'input',
            name: 'internName',
            message: "Please enter your intern's name.",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    return('Please enter a name!')
                }
            }

        },
        {
            type: 'input',
            name: 'internID',
            message: "Please enter your intern's ID.",
            validate: idInput => {
                if(isNaN(idInput) || !idInput) {
                    return('Please enter a valid ID!');
                } else {
                    
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'internEmail',
            message: "Please enter your intern's email.",
            validate: emailInput => {
                // https://stackoverflow.com/questions/46155/how-can-i-validate-an-email-address-in-javascript
                valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput);
                if(valid) {
                    return true;
                } else {
                    return('Please enter a valid email!');
                }
            }
        },
        {
            type: 'input',
            name: 'internSchool',
            message: "Please enter your intern's school.",
            validate: schoolInput => {
                if(schoolInput) {
                    return true;
                } else {
                    return('Please enter a school!');
                }
            }
        }
    ]).then(internData => {
        promptData.interns.push(internData);
        promptList(promptData);
    });
};

promptUser()
    .then(promptList)