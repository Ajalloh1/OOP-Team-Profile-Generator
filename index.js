///requiring links to files to generate page//
const Manager = require('./lib/Manager');
// console.log(Manager);
const Engineer = require('./lib/Engineer');
console.log(Engineer);
const Intern = require('./lib/Intern');
// console.log(Intern);
const inquirer = require('inquirer');
const fs = require('fs');

////variable Team Array for push//
const teamArray = [];
//oop team creation peremeters//
function runInquirer() {
    inquirer.prompt([{
        type: "list",
        message: "What employee type would you want to add?",
        options: ["Manager", "Engineer", "Intern"]
    }])
        .then(function (userData) {
            switch (input.addEmployeePrompt) {
                case "Manager";
                    addManager();
                    break;
                case "Engineer";
                    addEngineer();
                    break;
                case "Intern";
                    addIntern();
                    break;
                default:
                    htmlGenerator();
            }
        })
}
///creating object arrays adding manager//
function addManager() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter manager;s name"
        },
        {
            type: "input",
            name: "Id",
            message: "Enter manager's Id"
        },
        {
            type: "input",
            name: "Email",
            message: "Enter manager's Email"
        },
        {
            type: "input",
            name: "officeNumber",
            message: "Enter manager's officeNumber"
        },

    ])
        .then(answers => {
            const manager = new Manager(answers.name, answers.Id, answer.Email, answer.officeNumber);
            teamArray.push(manager);
            fs.createReadStream();
        });
}
///creating object arrays adding engineer//
function addEngineer() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter engineer's name"
        },
        {
            type: "input",
            name: "Id",
            message: "Enter engineer's Id"
        },
        {
            type: "input",
            name: "Email",
            message: "Enter engineer's Email"
        },
        {
            type: "input",
            name: "GitHub",
            message: "Enter manager's GitHub user"
        },

    ])
        .then(answers => {
            const engineer = new engineer(answers.name, answers.Id, answer.Email, answer.GitHub);
            teamArray.push(engineer);
            fs.createReadStream();
        });
}
///creating object arrays adding intern//
function addIntern() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter intern's name"
        },
        {
            type: "input",
            name: "Id",
            message: "Enter intern's Id"
        },
        {
            type: "input",
            name: "Email",
            message: "Enter intern's Email"
        },
        {
            type: "input",
            name: "School",
            message: "Enter School"
        },

    ])
        .then(answers => {
            const intern = new Intern(answers.name, answers.Id, answer.Email, answer.school);
            teamArray.push(intern);
            fs.createReadStream();
        });
}
function htmlGenerator() {
    fs.writeFile("./dist/index.html", data, err => {
        if (err) {
            console.log(err);
            return
        }
        else {
            console.log("Team Successfully Created")
        }
    })


}