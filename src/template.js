
const generateEngineers = engineerArr => {
    if (engineerArr === []) {
        return "";
    } else {
        return engineerArr.map(engineer => {
            // return HTML
        })
    }
};

const generateInterns = internArr => {
    if (internArr === []) {
        return "";
    } else {
        return internArr.map(intern => {
            // return HTML
        })
    }
};

module.exports = userData => {

    const {managerName, managerID, managerEmail, managerOfficeNum, interns, engineers} = userData;

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
        <div class= "columns m-6">
            <div class = "column is-one-third">
                <div class = "card">
                    <div class = "is-flex is-flex-direction-column card-header has-background-info">
                        <p class="title ml-5 pt-5 has-text-white">
                            Hello
                        </p>
                        <div class = "is-flex">
                            <p class="subtitle ml-5 mb-5 has-text-white">
                                <i class = "fa-solid fa-glasses has-text-white mr-2"></i>hello
                            </p>
                        </div>
                    </div>
                    <div class = "card-content has-background-light">
                        <div class="box ml-3 mr-3">
                            <p>Hello</p>
                        </div>
                        <div class="box ml-3 mr-3">
                            <p>Hello</p>
                        </div>
                        <div class="box ml-3 mr-3">
                            <p>Hello</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class = "column">
                <div class = "card">
                    <div class = "is-flex is-flex-direction-column card-header has-background-info">
                        <p class="title ml-5 pt-5 has-text-white">
                            Hello
                        </p>
                        <div class = "is-flex">
                            <p class="subtitle ml-5 mb-5 has-text-white">
                                <i class = "fa-solid fa-glasses has-text-white mr-2"></i>hello
                            </p>
                        </div>
                    </div>
                    <div class = "card-content has-background-light">
                        <div class="box ml-3 mr-3">
                            <p>Hello</p>
                        </div>
                        <div class="box ml-3 mr-3">
                            <p>Hello</p>
                        </div>
                        <div class="box ml-3 mr-3">
                            <p>Hello</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class = "column">
                <div class = "card">
                    <div class = "is-flex is-flex-direction-column card-header has-background-info">
                        <p class="title ml-5 pt-5 has-text-white">
                            Hello
                        </p>
                        <div class = "is-flex">
                            <p class="subtitle ml-5 mb-5 has-text-white">
                                <i class = "fa-solid fa-glasses has-text-white mr-2"></i>hello
                            </p>
                        </div>
                    </div>
                    <div class = "card-content has-background-light">
                        <div class="box ml-3 mr-3">
                            <p>Hello</p>
                        </div>
                        <div class="box ml-3 mr-3">
                            <p>Hello</p>
                        </div>
                        <div class="box ml-3 mr-3">
                            <p>Hello</p>
                        </div>
                    </div>
                </div>     
            </div>
        </div>

        <div class= "is-flex is-justify-content-center columns mr-6 ml-6 mb-6 mt-0">
            <div class = "column is-one-third">
                <div class = "card">
                    <div class = "is-flex is-flex-direction-column card-header has-background-info">
                        <p class="title ml-5 pt-5 has-text-white">
                            Hello
                        </p>
                        <div class = "is-flex">
                            <p class="subtitle ml-5 mb-5 has-text-white">
                                <i class = "fa-solid fa-glasses has-text-white mr-2"></i>hello
                            </p>
                        </div>
                    </div>
                    <div class = "card-content has-background-light">
                        <div class="box ml-3 mr-3">
                            <p>Hello</p>
                        </div>
                        <div class="box ml-3 mr-3">
                            <p>Hello</p>
                        </div>
                        <div class="box ml-3 mr-3">
                            <p>Hello</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class = "column is-one-third">
                <div class = "card">
                    <div class = "is-flex is-flex-direction-column card-header has-background-info">
                        <p class="title ml-5 pt-5 has-text-white">
                            Hello
                        </p>
                        <div class = "is-flex">
                            <p class="subtitle ml-5 mb-5 has-text-white">
                                <i class = "fa-solid fa-glasses has-text-white mr-2"></i>hello
                            </p>
                        </div>
                    </div>
                    <div class = "card-content has-background-light">
                        <div class="box ml-3 mr-3">
                            <p>Hello</p>
                        </div>
                        <div class="box ml-3 mr-3">
                            <p>Hello</p>
                        </div>
                        <div class="box ml-3 mr-3">
                            <p>Hello</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </main>
    
</body>
</html>      
`
};