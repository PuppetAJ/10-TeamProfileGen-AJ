// Import node modules and functions
const inquirer = require('inquirer');
const generateHtml = require('./src/template');
const { writeFile } = require('./src/generate-file');

// Import constructors
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern'); 

// Declare global employee array
const employeeArr = [];

// Function containing logic for initial user prompts
const promptUser = () => {

    // Asks for team manager's info
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
                // Uses regex to validate email (source of code below)
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

// Function containing logic for prompting the user to add another employee or not
const promptList = promptData => {

    // Function containing logic to send data to the writefile functions
    const sendData = promptData => {

        // Destructures manager data from promptData
        const { managerName, managerID, managerEmail, managerOfficeNum, interns, engineers } = promptData;

            // Creates new manager using Manager constructor and pushes it to the employee array
            const manager = new Manager (managerName, managerID, managerEmail, managerOfficeNum);
            // Pushes manager to the employee array
            employeeArr.push(manager);

            // For each engineer in the engineers array within promptData..
            engineers.forEach(engineer => {
                // Destructures engineer data for each engineer
                const {engineerName, engineerID, engineerEmail, engineerGitHub} = engineer;
                // Creates curEngineer constant using the Engineer constructor and pushes it to the employee array
                const curEngineer = new Engineer (engineerName, engineerID, engineerEmail, engineerGitHub);
                employeeArr.push(curEngineer);
            })
            
            // For each intern in the interns array within promptData..
            interns.forEach(intern => {
                // Destructures intern data for each intern
                const {internName, internID, internEmail, internSchool} = intern;
                // Creates curIntern constant using the Intern constructor and pushes it to the employee array
                const curIntern = new Intern (internName, internID, internEmail, internSchool);
                employeeArr.push(curIntern);
            })
            
            // Creates a new promise which resolves when html is generated. if not, sends error message
            return new Promise((resolve, reject) => {
                resolve(
                    generateHtml(employeeArr)
                )

                reject("HTML generation failed!");
                
            }) 
            .then(formattedData => {
                // Once html is generated, use it to write the index.html file in dist
                return writeFile(formattedData)
            })
            .then(writeFileRes => {
                // Once index.html is generated, display messages returned by function
                console.log(writeFileRes.message);
            })
            .catch(err => {
                console.log(err);
            })

    };

    // If engineers array doesn't exist, create it
    if (!promptData.engineers) {
        promptData.engineers = [];
    }

    // If interns array doesn't exist, create it
    if (!promptData.interns) {
        promptData.interns = [];
    }

    // Checks number of engineers since we want to enforce a max of 5
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
                    // Sends engineer prompts if user selected engineer
                    promptEngineer(promptData);
                }
                if (data.nextEmployee === 1) {
                    // Sends intern prompts if user selected intern
                    promptIntern(promptData);
                }
                if (data.nextEmployee === 2) {
                    // calls sendData function if user chooses to finish building team
                    sendData(promptData);

                }
    
        })

    } else {
    // Once the amount of employees isn't less than 4..
    console.log(`
    ======================
    Max employees reached!
    ----------------------
       Creating files...
    ======================
    `);
    
    // Call sendData function
    sendData(promptData);   

    };

    
};

// Function containing logic to prompt the user to add an engineer
const promptEngineer = promptData => {

    console.log(`
    =============
    Engineer Info
    =============
    `);

    // Inquirer prompts
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
        // Adds the engineers data to the engineers array
        promptData.engineers.push(engineerData);
        // Calls promptList function
        promptList(promptData);
    });
};

// Function containing logic to prompt the user to add an intern
const promptIntern = promptData => {

    console.log(`
    ===========
    Intern Info
    ===========
    `);

    // Inquirer prompts
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
        // Adds the engineers data to the engineers array
        promptData.interns.push(internData);
        // Calls promptList function
        promptList(promptData);
    });
};

// Calls promptUser function, and then calls promptList with the data returned
promptUser()
    .then(promptList)