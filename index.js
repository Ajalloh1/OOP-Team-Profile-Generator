///requiring links to files to generate page//
const Manager = require('./lib/Manager');
// console.log(Manager);
const Engineer = require('./lib/Engineer');
console.log(Engineer);
const Intern = require('./lib/Intern');
// console.log(Intern);
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

const dist_dir = path.resolve(__dirname, 'dist');
const dist_path = path.join(dist_dir, 'team.html');


const render = require('./src/generateHTML.js');

////variable Team Array for push//
const teamArray = [];


function menu() {

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
                message: "Enter manager's email"
            },
            {
                type: "input",
                name: "officeNumber",
                message: "Enter manager's officeNumber"
            },

        ])
            .then(answers => {
                const manager = new Manager(answers.name, answers.Id, answers.Email, answers.officeNumber);
                teamArray.push(manager);
                buildTeam();
            });
    }
    //oop team creation peremeters//
    function buildTeam() {
        inquirer.prompt([{
            type: "list",
            name: "memberChoice",
            message: "What employee type would you want to add?",
            choices: ["Engineer", "Intern", "I don't need to add any more"]
        }])
            .then(function (userData) {
                switch (userData.memberChoice) {
                    case "Engineer":
                        addEngineer();
                        break;
                    case "Intern":
                        addIntern();
                        break;
                    default:
                        htmlGenerator();
                }
            })
    }
    ///creating object arrays adding manager//

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
                const engineer = new Engineer(answers.name, answers.Id, answers.Email, answers.GitHub);
                teamArray.push(engineer);
                buildTeam();
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
                const intern = new Intern(answers.name, answers.Id, answers.Email, answers.school);
                teamArray.push(intern);
                buildTeam();
            });
    }
    function htmlGenerator() {
        fs.writeFileSync(dist_path, render(teamArray), "utf-8");
        // if (err) {
        //     console.log(err);
        //     return
        // }
        // else {
        //     console.log("Team Successfully Created")
        // }
    }

    addManager();
};
menu();