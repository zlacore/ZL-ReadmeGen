import inquirer from "inquirer";

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

inquirer 
    .prompt(questions)
    .then((response) => {
        console.log(response.title);
        console.log(response.description);
        console.log(response.install)
        console.log(response.usage)
        console.log(response.contribution)
        console.log(response.tests)
        console.log(response.license)
    })