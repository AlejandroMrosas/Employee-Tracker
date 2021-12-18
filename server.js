const inquirer = require('inquirer');
const mysql = require('mysql2');
const db = require('./db/connection')
require('console.table');


const starterQuestion = [
        {
                type: 'list',
                name: 'choices',
                message: 'Select one of the choices',
                choices: [
                    'view all departments', 
                    'view all roles', 
                    'view all employees', 
                    'add a department', 
                    'add a role', 
                    'add an employee', 
                    'update an employee role']
        }
    ];

const addEmployee = [
    {
        name: "FirstName",
        type: "input",
        message: "Enter employees first name."
    }, {
        name: "LastName",
        type: "input",
        message: "Enter Last Name"
    }, {
        name: "roleID",
        type: "input",
        message: "Enter Role"
    }, {
        name: "managerID",
        type: "input",
        message: "Enter Manager's Name",
    }
];

const addRoles = [
        {
         name: "title",
         type: "input",
         message: "What is the Role?"   
        }, {
            name: "Salary",
            type: "input",
            message: "Enter Salary"
        }
    ];

const addDepartment = [
        {
            name: "departmentId",
            type: "input",
            message: "Add Department"
        }
    ];

    const choices = starterQuestion.concat(addEmployee, addRoles, addDepartment);

    inquirer.prompt(starterQuestion).then((answers) => {
          console.log(answers);
          switch(answers.choices){
            case 'view all departments':
            viewAllDepartments();
            break;
            case 'view all roles':
            viewAllRoles();
            break;
            case 'view all employees':
            viewAllemployees();
            break;
            case 'add a department':
                inquirer.prompt(addDepartment).then((answers) => {
                    console.log(answers);
                    addADepartment();
                })
            
            break;
            case 'add a role':
                inquirer.prompt(addRoles).then((answers) => {
                    console.log(answers);
                    addARoles();
                })
            
            break;
            case 'add an employee':
            
            inquirer.prompt(addEmployee).then((answers) => {
                console.log(answers);
                addAnEmployee(employeeInfo);
            });
            break;
            case 'update an employee role':
            updateAnEmloyeeRole();
            break;
            default: 
            console.log("invalid");
            break;
        }
    });


    function viewAllDepartments() {
        db.query("SELECT * FROM department", function(err, choices) {
            if (err)
            throw err;
            console.table(choices);
        })
    };

    function viewAllRoles() {
        db.query("SELECT * FROM role", function(err, choices) {
            if (err)
            throw err;
            console.table(choices);
        })
    };

    function viewAllemployees() {
        db.query("SELECT * FROM employee", function(err, choices) {
            if (err)
            throw err;
            console.table(choices);
        })
    };

    function addADepartment() {
        db.query("INSERT INTO department (name) VALUES ()", function(err, choices) {
            if (err)
            throw err;
            console.table(choices);
        })
    };

    function addARoles() {
        db.query("INSERT INTO department (role) VALUES ()", function(err, choices) {
            if (err)
            throw err;
            console.table(choices);
        })
    };

    function addAnEmployee(employeeInfo){
        return db.query("INSERT INTO employee SET ?,?,?,?", employeeInfo)
        // db.query("INSERT INTO employee (FirstName, LastName, roleID, managerId) VALUES ()", function(err, choices) {
        //     if (err)
        //     throw err;
        //     console.table(choices);
        // })
    };
    
    

// THEN I am presented with a formatted table showing department names and department ids
// WHEN I choose to view all roles
// THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
// WHEN I choose to view all employees
// THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
// WHEN I choose to add a department
// THEN I am prompted to enter the name of the department and that department is added to the database
// WHEN I choose to add a role
// THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
// WHEN I choose to add an employee
// THEN I am prompted to enter the employee’s first name, last name, role, and manager and that employee is added to the database
// WHEN I choose to update an employee role
// THEN I am prompted to select an employee to update and their new role and this information is updated in the database 
// Mock-Up