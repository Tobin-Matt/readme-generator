// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const getMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Provide a brief one to two sentence description of your project.',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What are the instructions to install the application?',
        name: 'install',
    },
    {
        type: 'input',
        message: 'How can this application be used?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'What are the contribution guidelines?',
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'What are the instructions to test the application?',
        name: 'test',
    },
    {
        type: 'checkbox',
        message: 'What license is being used for the application?',
        name: 'license',
        choices: ['MIT', 'Apache', 'GPL', 'BSD', 'None'],
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'github',
    },
    {
        type: 'input',
        message: 'What is the best email to reach you at?',
        name: 'email',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const readMeContent = getMarkdown.generateMarkdown(data);

    fs.writeFile('README.md', readMeContent, (err) =>
      err ? console.log(err) : console.log('README generated!'))
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(answers => writeToFile('README.md', answers));
}

// Function call to initialize app
init();
