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
                    htmlBuilder();
            }
        })
}
///creating object arrays for the adding manager//
function addManager() {
    inquirer.prompt([

    ])
}