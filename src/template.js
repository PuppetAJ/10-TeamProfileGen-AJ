// Import constructors 
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern'); 

// Function containing logic for generating card HTML
const generateCards = employeeArr => {

    // Array for formatted employee HTML
    const formattedEmployees = [];
    
    // Iterates through employee array and checks what kind of employee each is
    employeeArr.forEach(employee => {
        
        // If employee is an instance of the manager constructor..
        if(employee instanceof Manager) {

            // Format the data as html
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
            // Push it to the formattedEmployees array
            formattedEmployees.push(managerHTML);

        }

        // If employee is an instance of the engineer constructor..
        if(employee instanceof Engineer) {
            
            // Format the data as html
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
            // Push it to the formattedEmployees array
            formattedEmployees.push(engineerHTML);

        }

        // If employee is an instance of the intern constructor..
        if(employee instanceof Intern) {

            // Format the data as html
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
            // Push it to the formattedEmployees array
            formattedEmployees.push(internHTML);
        }
    })

    // Once all data is added to new array, join it as one string and return it
    return formattedEmployees.join('');

};

// Export function, takes employeeArr as paramater
module.exports = employeeArr => {

// Returns base html, and calls generateCards function to add card HTML using employeeArr as data
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
    <!-- Header start -->
    <header class = "hero is-danger block">
        <section class = "hero-body is-flex is-justify-content-center">
            <h1 class = "title is-1">My Team</h1>
        </section>
    </header>
    <!-- Header end -->

    <!-- Main content start -->
    <main>
        <section class="columns is-flex-wrap-wrap is-justify-content-center">
        <!-- Cards go here!-->
            ${generateCards(employeeArr)}
        </section>
    </main>
    <!-- Main content end-->
    
</body>
</html>   
`
};