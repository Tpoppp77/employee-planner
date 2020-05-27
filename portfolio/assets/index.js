module.exports = function start() {
    return inquirer.prompt([
        {
            type: "List",
            message: "What would you like to do?",
            choices: ["View All Employees", "View All employees by Department", "View ALL employees by manager", "Add Employee", "Update Employee"]
        },
        {
            type: "input",
            message: "What would you like to do?",
            name: "View All Employees",
            choices: [""]
        },
        {
            type: "input",
            message: "What would you like to do?",
            name: "View All employees by Department",
            choices: [""]
        },
        {
            type: "input",
            message: "What would you like to do?",
            name: "View ALL employees by manager",
            choices: [""]
        },
        {
            type: "input",
            message: "What would you like to do?",
            name: "Add Employee",
        },
        {
            type: "list",
            message: "What license would you like to add?",
            name: "Update Employee",
            choices: [
                "MIT",
                "ISC",
                "GPL",
                "None"
            ]
        }
      
    ])
};

start();