const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern'); 

const generateCards = employeeArr => {

    const formattedEmployees = [];
    
    employeeArr.forEach(employee => {
        
        if(employee instanceof Manager) {

            let managerHTML = `
            <div class = "column is-4">
            <div class = "card">
                <div class = "is-flex is-flex-direction-column card-header has-background-info">
                    <p class="title ml-5 pt-5 has-text-white">
                        ${employee.getName()}
                    </p>
                    <div class = "is-flex">
                        <p class="subtitle ml-5 mb-5 has-text-white">
                            <i class = "fa-solid fa-mug-hot has-text-white mr-2"></i>${employee.getRole()}
                        </p>
                    </div>
                </div>
                <div class = "card-content has-background-light">
                    <div class="box ml-3 mr-3">
                        <p>${employee.getId()}</p>
                    </div>
                    <div class="box ml-3 mr-3">
                        ${employee.getEmail()}
                    </div>
                    <div class="box ml-3 mr-3">
                        <p>${employee.getOfficeNum()}</p>
                    </div>
                </div>
            </div>
            </div>
            `

            formattedEmployees.push(managerHTML);

        }

        if(employee instanceof Engineer) {
            
            let engineerHTML = `
            <div class = "column is-4">
            <div class = "card">
                <div class = "is-flex is-flex-direction-column card-header has-background-info">
                    <p class="title ml-5 pt-5 has-text-white">
                        ${employee.getName()}
                    </p>
                    <div class = "is-flex">
                        <p class="subtitle ml-5 mb-5 has-text-white">
                            <i class = "fa-solid fa-glasses has-text-white mr-2"></i>${employee.getRole()}
                        </p>
                    </div>
                </div>
                <div class = "card-content has-background-light">
                    <div class="box ml-3 mr-3">
                        <p>${employee.getId()}</p>
                    </div>
                    <div class="box ml-3 mr-3">
                        ${employee.getEmail()}
                    </div>
                    <div class="box ml-3 mr-3">
                        ${employee.getGitHub()}
                    </div>
                </div>
            </div>
            </div>
            `

            formattedEmployees.push(engineerHTML);

        }

        if(employee instanceof Intern) {

            let internHTML = `
            <div class = "column is-4">
            <div class = "card">
                <div class = "is-flex is-flex-direction-column card-header has-background-info">
                    <p class="title ml-5 pt-5 has-text-white">
                        ${employee.getName()}
                    </p>
                    <div class = "is-flex">
                        <p class="subtitle ml-5 mb-5 has-text-white">
                            <i class = "fa-solid fa-user-graduate has-text-white mr-2"></i>${employee.getRole()}
                        </p>
                    </div>
                </div>
                <div class = "card-content has-background-light">
                    <div class="box ml-3 mr-3">
                        <p>${employee.getId()}</p>
                    </div>
                    <div class="box ml-3 mr-3">
                        ${employee.getEmail()}
                    </div>
                    <div class="box ml-3 mr-3">
                        <p>${employee.getSchool()}</p>
                    </div>
                </div>
            </div>
            </div>
            `

            formattedEmployees.push(internHTML);
        }
    })

    return formattedEmployees.join('');

};

module.exports = employeeArr => {

return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link 
    rel="stylesheet" 
    href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css"
    >
    <link rel="stylesheet" href="./style.css"/>
    <link 
    rel="stylesheet" 
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" 
    integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==" 
    crossorigin="anonymous" 
    referrerpolicy="no-referrer" 
    />
    <title>My Team</title>
</head>
<body>
    <header class = "hero is-danger block">
        <section class = "hero-body is-flex is-justify-content-center">
            <h1 class = "title is-1">My Team</h1>
        </section>
    </header>
    <main>
        <section class="columns is-flex-wrap-wrap is-justify-content-center">
            ${generateCards(employeeArr)}
        </section>
    </main>
    
</body>
</html>   
`
};