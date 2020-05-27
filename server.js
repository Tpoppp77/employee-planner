const mysql = require("mysql")
const inquirer = require("inquirer");

function start() {
  return inquirer.prompt([
      {
          type: "rawlist",
          message: "What would you like to do?",
          name: "What",
          choices: ["View All Employees", "View All employees by Department", "View ALL employees by manager", "Add Employee", "Update Employee"]
      },
      {
          type: "input",
          message: "What would you like to do?",
          name: "View All Employees",
          choices: [""]
      },
  
  ]).then(answers => { 

  }).catch(error => {
    if (error) {
      console.log(error)
    }
  });
};

start();