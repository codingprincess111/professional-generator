// TODO: Include packages needed for this application
const fs = require('fs'); 
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    "What is the title of your project?",
    "Provide a brief description of your project:",
    "Provide installation instructions:",
    "Provide project usage information:",
    "How can others contribute to this project?",
    "How can others test your project?",
    "Which license will you be using?",
    "What is your GitHub username?",
    "What is your email adress?"
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) =>
    err ? console.log(err) : console.log("Done!"));
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'title',
                message: questions[0],
            },
            {
                type: 'input',
                name: 'projectName',
                message: questions [1],
            },
            {
                type: 'input',
                name: 'installation',
                message: questions [3],
            },
            {
                type: 'input',
                name: 'usage',
                message: questions [4],
            },
            {
                type: 'input',
                name: 'contributing',
                message: questions [5],
            },
            {
                type: 'input',
                name: 'test',
                message: questions [5],
            },
            {
                type: 'input',
                name: 'license',
                message: 'Which license do you want to use?',
                choices: [
                    'MIT License',
                    'GNU GPL v2',
                    'Mozilla Public License 2.0',
                    'None',
                ]
            },
            {
                type: 'input',
                name: 'githubUsername',
                message: questions [7],

            },
            {
                type: 'input',
                name: 'email',
                message: questions [8]

            }
        ])
            
}

// Function call to initialize app
init();
