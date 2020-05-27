const mysql = require("mysql")
const inquirer = require("inquirer");
const util = require("util");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "employees_db"
});

connection.connect(function (error) {
    if (error) {
        throw error;
    }

  });

connection.query = util.promisify(connection.query);

function start() {
   inquirer
   .prompt([
      {
          type: "rawlist",
          message: "What would you like to do?",
          name: "Action",
          choices: ["View All Employees", "View All employees by Department", "View ALL employees by manager", "Add Employee", "Update Employee"]
      }]).then(function (answer) {
        switch (answer.action) {
          case "View All Employees":
            employeeSearch();
            break;

            case "View All employees by department":
              departmentSearch();
              break;

              case "View All Employees By Manager":
                managerSearch();
        }
      })
    };

    
 




start();