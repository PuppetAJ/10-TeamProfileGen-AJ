const inquirer = require('inquirer');

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
                    console.log('Please enter a name!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'managerID',
            message: "Please enter your team manager's ID.",
            validate: idInput => {
                if(idInput) {
                    return true;
                } else {
                    console.log('Please enter a valid ID!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: "Please enter your team manager's email.",
            validate: emailInput => {
                if(emailInput) {
                    return true;
                } else {
                    console.log('Please enter an email!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'managerOfficeNum',
            message: "Please enter your team manager's office number.",
            validate: officeNumInput => {
                if(officeNumInput) {
                    return true;
                } else {
                    console.log('Please enter a valid office number!');
                    return false;
                }
            }
        },

    ])
};

const promptList = promptData => {

    return inquirer.prompt([
        {
            type: 'rawlist',
            name: 'nextEmployee',
            message: "Please select another employee to add to your team, or finish building.",
            choices: [
                {value: 0, name: "Engineer"},
                {value: 1, name: "Intern"},
                {value: 2, name: "Finish building team"}
            ]

        }
    ]).then(data => {
        if (promptData.engineers.length + promptData.interns.length === 4) {

            console.log(promptData);
            
        } else {

            if (data.nextEmployee === 0) {
                promptEngineer(promptData);
            }
            if (data.nextEmployee === 1) {
                promptIntern(promptData);
            }
            if (data.nextEmployee === 2) {
                // return promptData;
                console.log(promptData);
            }

        }

    })
};

const promptEngineer = promptData => {

    if(!promptData.engineers) {
        promptData.engineers = [];
    }

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
                    console.log('Please enter a name!')
                    return false;
                }
            }

        },
        {
            type: 'input',
            name: 'engineerID',
            message: "Please enter your engineer's ID.",
            validate: idInput => {
                if(idInput) {
                    return true;
                } else {
                    console.log('Please enter a valid ID!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: "Please enter your engineer's email.",
            validate: emailInput => {
                if(emailInput) {
                    return true;
                } else {
                    console.log('Please enter an email!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'engineerGitHub',
            message: "Please enter your engineer's github.",
            validate: githubInput => {
                if(githubInput) {
                    return true;
                } else {
                    console.log('Please enter a username!');
                    return false;
                }
            }
        }
    ]).then(engineerData => {
        promptData.engineers.push(engineerData);
        promptList(promptData);
    });
};

const promptIntern = promptData => {

    if(!promptData.interns) {
        promptData.interns = [];
    }

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
                    console.log('Please enter a name!')
                    return false;
                }
            }

        },
        {
            type: 'input',
            name: 'internID',
            message: "Please enter your intern's ID.",
            validate: idInput => {
                if(idInput) {
                    return true;
                } else {
                    console.log('Please enter a valid ID!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'internEmail',
            message: "Please enter your intern's email.",
            validate: emailInput => {
                if(emailInput) {
                    return true;
                } else {
                    console.log('Please enter an email!');
                    return false;
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
                    console.log('Please enter a school!');
                    return false;
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