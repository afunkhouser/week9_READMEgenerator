const inquirer = require('inquirer');
const fs = require('fs');



const promptUser = () => {
  return inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'Project Title:',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a short description explaining the what, why, and how of your project.',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Provide instructions and examples for use. Include screenshots as needed.',
    },
    {
      type: 'input',
      name: 'credits',
      message: 'List your collaborators, if any, with links to their GitHub profiles.',
    },
    {
      type: 'list',
      name: 'License',
      message: 'License used:',
      choices: [
          'Apache', 
          'Academic', 
          'GNU', 
          'ISC', 
          'MIT', 
          'Mozilla', 
          'Open',
          'None'
      ]
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Go the extra mile and write tests for your application. Then provide examples on how to run them here.',
    },
    {
        type: 'input',
        name: 'username',
        message: 'Enter your github username.',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email.',
    },
  ]);
};

function renderLicenseBadge(License) {
  if(License !== 'None') {
    return `![License](https://img.shields.io/static/v1?label=License&message=${License}&color=BLUE)`
  }
}

const generateREADME = ({ title, description, installation, usage, credits, License, tests, username, email  }) =>
`${renderLicenseBadge(License)}
# ${title}

## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
* [Tests](#tests)
* [Questions](#questions)

## Description
${description}

## Installation
${installation}

## Usage
${usage}

## Credits
${credits}

## License
${License}

## Tests
${tests}

## Questions
Email me or find me on GitHub!
GitHub Username: [${username}](https://www.github.com/${username})
Email: ${email}
`;





const init = () => {
  promptUser()
    .then((answers) => fs.writeFileSync('sampleReadme.md', generateREADME(answers)))
    .then(() => console.log('Successfully wrote to README.md'))
    .catch((err) => console.error(err));
};

init();