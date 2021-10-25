const inquirer = require('inquirer');
const db = require('./db/connection');

const starterQuestion = () => {
    inquirer.prompt ([
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
    ]).then((answer) => {
        switch(answer.choices) {
            case 'View all departments':
            viewAllDepartments();
            break;
            case 'View all roles':
            viewAllRoles();
            break;
            case 'View all employees':
            viewAllemployees();
            break;
            case 'Add a department':
            addADepartment();
            break;
            case 'Add a role':
            addARoles();
            break;
            case 'Add an employee':
            addAnEmployee();
            break;
            case 'Update an employee role':
            UpdateAnEmloyeeRole();
            break;
        }
    })
};

function addEmployee() {
inquirer.prompt([
    {
        name: "FirstName",
        type: "input",
        message: "Enter employees first name."
    }, {
        name: "LastName",
        type: "input",
        message: "Enter Last Name"
    }, {
        name: "role",
        type: "input",
        message: "Enter Role"
    }, {
        name: "choices",
        type: "list",
        message: "Enter Manager's Name",
        choices: selectManager()
    }
])
}

function addRoles() {
    inquirer.prompt([
        {
         name: "title",
         type: "input",
         message: "What is the Role?"   
        }, {
            name: "Salary",
            type: "input",
            message: "Enter Salary"
        }
    ])
}

function addDepartment() {
    inquirer.prompt([
        {
            name: "name",
            type: "input",
            message: "Add Department"
        }
    ])
}



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