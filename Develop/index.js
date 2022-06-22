// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'please enter description of project!'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'How do you install the project?'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'How to you use the project?'
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'How can others contribute?'
        },
        {
            type: 'input',
            name: 'test',
            message: 'How can the project be tested?'
        },
        {
            type: 'list',
            name: 'licenses',
            choices: ['Apache', 'Boost', 'Eclipse', 'Mozilla'],
            message: 'licenses?'
        },
        {
            type: 'input',
            name: 'github',
            message: 'enter your github username'
        },
        {
            type: 'input',
            name: 'email',
            message: 'enter your email'
        },

    ]);
};

// TODO: Create a function to write README file
function writeToFile(data) {
    return `# ${data.title}
![license](https://img.shields.io/badge/license-${data.licenses}-blue.svg)
## Description
${data.description}
## Table of Contents
    
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#how-to-contribute)
- [Tests](#tests)
- [License](#license)
- [Credits](#credits)

## Installation
${data.installation}
## Usage
${data.usage}
## How to Contribute
${data.contributing}
## Tests
${data.test}
## License
${data.licenses}
## Questions
for questions please refer to my [GitHub](https://github.com/${data.github})
or contact me through my [Email](${data.email})`
}

// TODO: Create a function to initialize app
function init() {
    questions()
        .then((answers) =>
            fs.writeFileSync('README-GeneratedExample.md', writeToFile(answers)))
        .then(() => console.log('Successfully wrote to README.md'))
        .catch((err) => console.error(err));
};

// Function call to initialize app
init();
