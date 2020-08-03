

-- All Departments added into the database --
INSERT INTO department (name) VALUES ('Sales');
INSERT INTO department (name) VALUES ('Engineering');
INSERT INTO department (name) VALUES ('Finance');
INSERT INTO department (name) VALUES ('Legal');


-- All Roles added into the database --
INSERT INTO role (title, department_id) VALUES ('Sales Lead', 1);
INSERT INTO role (title, department_id) VALUES ('Sales Person', 1);
INSERT INTO role (title, department_id) VALUES ('Lead Engineer', 2);
INSERT INTO role (title, department_id) VALUES ('Software Engineer', 2);
INSERT INTO role (title, department_id) VALUES ('Accountant', 3);
INSERT INTO role (title, department_id) VALUES ('Legal Team Lead', 4);
INSERT INTO role (title, department_id) VALUES ('Lawyer', 4);


