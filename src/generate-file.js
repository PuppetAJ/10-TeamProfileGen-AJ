// Imports file system module
const fs = require('fs');

// logic for write file function
const writeFile = fileContent => {

// Variable containing css files content
let cssContent = `
/* General styles */

html {
    height: 100%;
}

body {
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
    line-height: 1;
    height: 100%;
}

main {
    margin: 125px 15% 10px 15%;
}

/* Bulma style overrides */

.box:not(:last-child) {
    margin-bottom: 2px;
}

.hero-body {
    padding: 4rem;
}

.title:not(:last-child) {
    margin-bottom: 5px;
}
`;

// Creates a new promise which resolves once index.html is created and rejects when there is an error
return new Promise((resolve, reject) => {
fs.writeFile('./dist/index.html', fileContent, err => {
    if(err) {
        reject(err)
        return;
    } 

    resolve({
    ok: true,
    message: `
    ===================
    index.html created!
    ===================
        `
    })
    })
}).then(
// After index.html is created, create css file
fs.writeFile('./dist/style.css', cssContent, err => {
    if(err) {
        console.log(err)
        return;
    } else {
    console.log(`
    ==================
    style.css created!
    ==================
    `)
    };
})
)
};

// Exports writeFile function
module.exports = { writeFile };