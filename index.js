// TODO: Include packages needed for this application
import inquirer from "inquirer";
import generateMarkdown from "./utils/generateMarkdown.js";
// import Choices from "inquirer/lib/objects/choices.js";
import fs from "fs";


function init() { }
console.log("Beep boop beep boop, README generator loading!")
// Function call to initialize app
init();


const data = {
    title: "title",
    description: "description",
    install: "Installation",
    usage: "Usage Information",
    contribution: "Contribution Guidelines",
    license: "License",
    questions: "Questions",
}
// TODO: Create an array of questions for user input
const questions = [{
    type: "input",
    message: "What is the title of your product?",
    name: "title"
},
{
    type: "input",
    message: "What is the description of your product?",
    name: "description"
},
{
    //Installation
    type: "input",
    message: "How do you install this product?",
    name: "install"
},
{
    type: "input",
    message: "What is the usage information?",
    name: "usage"
},
{
    type: "input",
    message: "What are the contribution guidelines?",
    name: "contribution"
},
{
    type: "input",
    message: "What are some tests used for your project?",
    name: "tests"
},
{
    type: "list",
    message: "Which license are you using for your product?",
    choices: ["None", "MIT", "WTFPL", "ISC"],
    name: "license"
},
{
    type: "input",
    message: "For further inquiry, what is your github?",
    name: "github"
},
{
    type: "input",
    message: "For further inquiry, what is your email?",
    name: "email"
}
];

// TODO: Create a function to write README file
function writeToFile() {
    inquirer
    .prompt(questions)
    .then((response) => {
        const license = response.license
            data.title = response.title;
            data.description = response.description;
            data.install = response.install;
            data.usage = response.usage;
            data.contribution = response.contribution;
            data.tests = response.tests;
            data.questions = 
            `Github: ${response.github}         Email: ${response.email}`;
            const markdown = generateMarkdown(data, license)
            fs.writeFile('README.md', markdown, (err) => {
                err ? console.log("Error!") : console.log("Yay!");
            })
        })
}

writeToFile();

// TODO: Create a function to initialize app

