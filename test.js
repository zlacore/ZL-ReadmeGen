import inquirer from "inquirer";
import generateMarkdown from "./utils/generateMarkdown.js";
import fs from "fs";

const data = {
    title: "title",
    description: "description",
    install: "Installation",
    usage: "Usage Information",
    contribution: "Contribution Guidelines",
    license: "License",
    questions: "Questions",
}

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
    choices: ["MIT", "ATF", "WTFPL", "IBM"],
    name: "license"
},
{
    type: "input",
    message: "What is your github?",
    name: "github"
},
{
    type: "input",
    message: "What is your email address?",
    name: "email"
}
];

// console.log(generateMarkdown(response));
let string = ""
string += "Hello!"
string += "World!"
function writeToFile() {
    inquirer
        .prompt(questions)
        .then((response) => {
            data.title = response.title;
            data.description = response.description;
            data.install = response.install;
            data.usage = response.usage;
            data.contribution = response.contribution;
            data.tests = response.tests;
            data.license = 
            data.questions = `
            Github: ${response.github} 
            Email: ${response.email}`;
            const markdown = generateMarkdown(data)
            fs.writeFile('README.md', markdown, (err) => {
                err ? console.log("Error!") : console.log("Yay!");
            })
        })
}

writeToFile();