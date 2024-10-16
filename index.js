// TODO: Include packages needed for this application
import inquirer from "inquirer";
import generateMarkdown from "./utils/generateMarkdown";
import Choices from "inquirer/lib/objects/choices";
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
    choices: ["MIT", "ATF", "CIA", "FBI", "FML"],
    name: "license"
}
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();


