// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown")
// TODO: Create an array of questions for user input
const questions =  [
{
    type: 'input',
    name: 'title',
    message: "What do we call your project?"
},
{
    type: 'input',
    name: 'description',
    message: "Please enter a small description"
},
{
    type: 'input',
    name: 'instal',
    message: "What do you need to install?"
},
{
    type: 'input',
    name: 'usage',
    message: "How to use"
},
{
    type: 'list',
    name: 'license',
    message: "what license?",
    choices: ['MIT', 'Apache', 'Other', 'None']
},
{
    type: 'input',
    name: 'contribute',
    message: "Who Worked on it"
},
{
    type: 'input',
    name: 'test',
    message: "What command will be used for running tests"
},
{
    type: 'input',
    name: 'username',
    message: "What is your github username"
},
{
    type: 'input',
    name: 'email',
    message: "what is your email address"
}







];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then (function(answers){
        writeToFile('read.md', generateMarkdown(answers));
    })
}

// Function call to initialize app
init();
