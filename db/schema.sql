DROP DATABASE IF EXISTS employees;
CREATE DATABASE employees;

USE employees;

CREATE TABLE department(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL
);

CREATE TABLE role (
    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    title VARCHAR(25) NOT NULL,
    Salary DECIMAL NOT NULL,
    departmentId INT NOT NULL,
    INDEX depInd (departmentId),
    FOREIGN KEY (departmentId) REFERENCES department(id)
);

CREATE TABLE employee (
    id INT AUTO_INCREMENT PRIMARY KEY,
    FirstName VARCHAR(25) NOT NULL,
    LastName VARCHAR(25) NOT NULL,
    roleID INT NOT NULL,
    managerId INT,
    INDEX rolInd (roleId),
    CONSTRAINT fkRole FOREIGN KEY (roleId) REFERENCES role(id)
    INDEX manInd (managerId),
    CONSTRAINT fkRole FOREIGN KEY (managerId) REFERENCES employee(id)
);