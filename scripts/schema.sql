-- delete any existing databases with the same name --
DROP DATABASE IF EXISTS Employee_management;
-- CREATE DATABASE --
CREATE DATABASE Employee_management;





--------- the table will not be added manually 
--- just for testing   




-- --  DEPARTMENT TABLE - endpoints  rest 
-- CREATE TABLE Department (
--     id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
--     name TEXT NOT NULL
-- );
-- -- CREATING ROLE TABLE  -- depends on  DEPARTMENT
-- CREATE TABLE Role (
--     id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
--     title TEXT NOT NULL,
--     department_id INT,
--     FOREIGN KEY (department_id) REFERENCES department(id)
-- );
-- -- CREATING EMPLOYEE TABLE  --  array to simulate  depends on  ROLE
-- create table Employee ( 
--     id int primary key not null auto_increment,
--     full_name text not null,  
--     email TEXT,
--     phone_number int,
--     salary DECIMAL,
--     password TEXT NOT NULL,
--     role_id int,
--     foreign key (role_id) references role(id),
--     manager_id int,
--     foreign key (manager_id) references employee(id)
-- );
-- -- Task table TO DO LIST  ---
-- create table Tasks(
--  id INTEGER  not null auto_increment PRIMARY KEY,
--  task TEXT not null
-- ); 
-- -- joining table -- depends on --- root                     
-- create table Employee_Tasks(
--     id INTEGER  not null auto_increment PRIMARY KEY,
--     created_date timestamp,
--     completed date,
--     employeeId  int,
--     foreign key (employeeId) references employee(id),
--     tasksId  int,
--     foreign key (tasksId) references Tasks(id)
-- ); 


