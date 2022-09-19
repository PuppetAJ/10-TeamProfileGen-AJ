const generateEngineers = engineerArr => {
    if (engineerArr === []) {
        return "";
    } else {
        return engineerArr.map(engineer => {
            return `            
            <div class = "column is-one-third">
                <div class = "card">
                    <div class = "is-flex is-flex-direction-column card-header has-background-info">
                        <p class="title ml-5 pt-5 has-text-white">
                            ${engineer.engineerName}
                        </p>
                        <div class = "is-flex">
                            <p class="subtitle ml-5 mb-5 has-text-white">
                                <i class = "fa-solid fa-glasses has-text-white mr-2"></i>Engineer
                            </p>
                        </div>
                    </div>
                    <div class = "card-content has-background-light">
                        <div class="box ml-3 mr-3">
                            <p>ID: ${engineer.engineerID}</p>
                        </div>
                        <div class="box ml-3 mr-3">
                            <p>Email: ${engineer.engineerEmail}</p>
                        </div>
                        <div class="box ml-3 mr-3">
                            <p>Github: ${engineer.engineerGitHub}</p>
                        </div>
                    </div>
                </div>
            </div>
            `
        })
    }
};

const generateInterns = internArr => {
    if (internArr === []) {
        return "";
    } else {
        return internArr.map(intern => {            
            return `            
            <div class = "column is-one-third">
                <div class = "card">
                    <div class = "is-flex is-flex-direction-column card-header has-background-info">
                        <p class="title ml-5 pt-5 has-text-white">
                            ${intern.internName}
                        </p>
                        <div class = "is-flex">
                            <p class="subtitle ml-5 mb-5 has-text-white">
                                <i class = "fa-regular fa-user-graduate has-text-white mr-2"></i>Intern
                            </p>
                        </div>
                    </div>
                    <div class = "card-content has-background-light">
                        <div class="box ml-3 mr-3">
                            <p>ID: ${intern.internID}</p>
                        </div>
                        <div class="box ml-3 mr-3">
                            <p>Email: ${intern.internEmail}</p>
                        </div>
                        <div class="box ml-3 mr-3">
                            <p>School: ${intern.internSchool}</p>
                        </div>
                    </div>
                </div>
            </div>
            `
        })
    }
};

const generateCards = (manager, interns, engineers) => {

    let formattedEngineersArr = generateEngineers(engineers);
    let formattedInternsArr = generateInterns(interns);

    const { managerName, managerID, managerEmail, managerOfficeNum } = manager;

    if (engineers.length === 2 && interns.length >= 1) {

        return `
        <div class= "columns m-6">
            <div class = "column is-one-third">
                <div class = "card">
                    <div class = "is-flex is-flex-direction-column card-header has-background-info">
                        <p class="title ml-5 pt-5 has-text-white">
                            ${managerName}
                        </p>
                        <div class = "is-flex">
                            <p class="subtitle ml-5 mb-5 has-text-white">
                                <i class = "fa-solid fa-mug-hot has-text-white mr-2"></i>Intern
                            </p>
                        </div>
                    </div>
                    <div class = "card-content has-background-light">
                        <div class="box ml-3 mr-3">
                            <p>ID: ${managerID}</p>
                        </div>
                        <div class="box ml-3 mr-3">
                            <p>Email: ${managerEmail}</p>
                        </div>
                        <div class="box ml-3 mr-3">
                            <p>Office Number: ${managerOfficeNum}</p>
                        </div>
                    </div>
                </div>
            </div>

            ${formattedEngineersArr.join()}

        </div>

        <div class= "is-flex is-justify-content-center columns mr-6 ml-6 mb-6 mt-0">
            ${formattedInternsArr.join()}
        </div>
        `

    } else if (engineers.length < 2 && interns.length >= 1) {
        
        return `
        <div class= "columns m-6">
            <div class = "column is-one-third">
                <div class = "card">
                    <div class = "is-flex is-flex-direction-column card-header has-background-info">
                        <p class="title ml-5 pt-5 has-text-white">
                            ${managerName}
                        </p>
                        <div class = "is-flex">
                            <p class="subtitle ml-5 mb-5 has-text-white">
                                <i class = "fa-solid fa-mug-hot has-text-white mr-2"></i>Intern
                            </p>
                        </div>
                    </div>
                    <div class = "card-content has-background-light">
                        <div class="box ml-3 mr-3">
                            <p>ID: ${managerID}</p>
                        </div>
                        <div class="box ml-3 mr-3">
                            <p>Email: ${managerEmail}</p>
                        </div>
                        <div class="box ml-3 mr-3">
                            <p>Office Number: ${managerOfficeNum}</p>
                        </div>
                    </div>
                </div>
            </div>

            ${formattedEngineersArr.join()}
            ${formattedInternsArr.shift()}

        </div>

        <div class= "is-flex is-justify-content-center columns mr-6 ml-6 mb-6 mt-0">
            ${formattedInternsArr.join()}
        </div>
        `
    } else if (engineers.length === 0 && interns.length <= 2) {

        return `
        <div class= "columns m-6">
            <div class = "column is-one-third">
                <div class = "card">
                    <div class = "is-flex is-flex-direction-column card-header has-background-info">
                        <p class="title ml-5 pt-5 has-text-white">
                            ${managerName}
                        </p>
                        <div class = "is-flex">
                            <p class="subtitle ml-5 mb-5 has-text-white">
                                <i class = "fa-solid fa-mug-hot has-text-white mr-2"></i>Intern
                            </p>
                        </div>
                    </div>
                    <div class = "card-content has-background-light">
                        <div class="box ml-3 mr-3">
                            <p>ID: ${managerID}</p>
                        </div>
                        <div class="box ml-3 mr-3">
                            <p>Email: ${managerEmail}</p>
                        </div>
                        <div class="box ml-3 mr-3">
                            <p>Office Number: ${managerOfficeNum}</p>
                        </div>
                    </div>
                </div>
            </div>

            ${formattedInternsArr.join()}

        </div>

        <div class= "is-flex is-justify-content-center columns mr-6 ml-6 mb-6 mt-0">
        </div>
        `

    } else if (engineers.length === 0 && interns.length > 2) {

        return `
        <div class= "columns m-6">
            <div class = "column is-one-third">
                <div class = "card">
                    <div class = "is-flex is-flex-direction-column card-header has-background-info">
                        <p class="title ml-5 pt-5 has-text-white">
                            ${managerName}
                        </p>
                        <div class = "is-flex">
                            <p class="subtitle ml-5 mb-5 has-text-white">
                                <i class = "fa-solid fa-mug-hot has-text-white mr-2"></i>Intern
                            </p>
                        </div>
                    </div>
                    <div class = "card-content has-background-light">
                        <div class="box ml-3 mr-3">
                            <p>ID: ${managerID}</p>
                        </div>
                        <div class="box ml-3 mr-3">
                            <p>Email: ${managerEmail}</p>
                        </div>
                        <div class="box ml-3 mr-3">
                            <p>Office Number: ${managerOfficeNum}</p>
                        </div>
                    </div>
                </div>
            </div>

            ${formattedInternsArr.shift()}
            ${formattedInternsArr.shift()}


        </div>

        <div class= "is-flex is-justify-content-center columns mr-6 ml-6 mb-6 mt-0">
            ${formattedInternsArr.join()}
        </div>
        `

    } else if (engineers.length > 2) {

        return `
        <div class= "columns m-6">
            <div class = "column is-one-third">
                <div class = "card">
                    <div class = "is-flex is-flex-direction-column card-header has-background-info">
                        <p class="title ml-5 pt-5 has-text-white">
                            ${managerName}
                        </p>
                        <div class = "is-flex">
                            <p class="subtitle ml-5 mb-5 has-text-white">
                                <i class = "fa-solid fa-mug-hot has-text-white mr-2"></i>Intern
                            </p>
                        </div>
                    </div>
                    <div class = "card-content has-background-light">
                        <div class="box ml-3 mr-3">
                            <p>ID: ${managerID}</p>
                        </div>
                        <div class="box ml-3 mr-3">
                            <p>Email: ${managerEmail}</p>
                        </div>
                        <div class="box ml-3 mr-3">
                            <p>Office Number: ${managerOfficeNum}</p>
                        </div>
                    </div>
                </div>
            </div>

            ${formattedEngineersArr.shift()}
            ${formattedEngineersArr.shift()}


        </div>

        <div class= "is-flex is-justify-content-center columns mr-6 ml-6 mb-6 mt-0">
            ${formattedEngineersArr.join()}
            ${formattedInternsArr.join()}
        </div>
        `

    } else {

        return `
        <div class= "columns m-6">
            <div class = "column is-one-third">
                <div class = "card">
                    <div class = "is-flex is-flex-direction-column card-header has-background-info">
                        <p class="title ml-5 pt-5 has-text-white">
                            ${managerName}
                        </p>
                        <div class = "is-flex">
                            <p class="subtitle ml-5 mb-5 has-text-white">
                                <i class = "fa-solid fa-mug-hot has-text-white mr-2"></i>Intern
                            </p>
                        </div>
                    </div>
                    <div class = "card-content has-background-light">
                        <div class="box ml-3 mr-3">
                            <p>ID: ${managerID}</p>
                        </div>
                        <div class="box ml-3 mr-3">
                            <p>Email: ${managerEmail}</p>
                        </div>
                        <div class="box ml-3 mr-3">
                            <p>Office Number: ${managerOfficeNum}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
        <div class= "is-flex is-justify-content-center columns mr-6 ml-6 mb-6 mt-0">
        </div>
        `

    }

};

module.exports = userData => {

    const {managerName, managerID, managerEmail, managerOfficeNum, interns, engineers} = userData;

    let manager = {
        managerName: managerName,
        managerID: managerID,
        managerEmail: managerEmail,
        managerOfficeNum: managerOfficeNum
    }

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
    <main class="is-flex is-flex-direction-column">
        ${generateCards(manager, engineers, interns)}
    </main>
</body>
</html>      
`
};