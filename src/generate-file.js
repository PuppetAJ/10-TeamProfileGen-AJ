const fs = require('fs');

const writeFile = fileContent => {

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

module.exports = { writeFile };