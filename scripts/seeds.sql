
-- All employees added into the database

INSERT INTO employee (full_name, email, phone_number, salary, password, role_id, manager_id ) VALUES ('John Doe', 'John@oatmega.com', 5124445567, 100000, 'ilovedogs', 1, null);
INSERT INTO employee (full_name, email, phone_number, salary, password, role_id, manager_id ) VALUES ('Mike Cha ', 'Mike@oatmega.com', 5124445568, 78000, 'ex3tranews', 1, null);
INSERT INTO employee (full_name, email, phone_number, salary, password, role_id, manager_id ) VALUES ('Ashley Rodriguez', 'Ashley@oatmega.com', 5124637065, 125000, 'f43sadve', 2, 2);
INSERT INTO employee (full_name, email, phone_number, salary, password, role_id, manager_id ) VALUES ('Kevin Tupik ', 'Kevin@oatmega.com', 5124445545, 65000, 'c0oLK1ds!', 3, null);
INSERT INTO employee (full_name, email, phone_number, salary, password, role_id, manager_id ) VALUES ('Malia Brown', 'Malia@oatmega.com', 5126578945, 230000, 'c0ding32!', 4, 3);
INSERT INTO employee (full_name, email, phone_number, salary, password, role_id, manager_id ) VALUES ('Sarah Lourd', 'Sarah@oatmega.com', 5126541234, 183000, '6svna5', 5 , null);
INSERT INTO employee (full_name, email, phone_number, salary, password, role_id, manager_id ) VALUES ('Tom Allen', 'Tom@oatmega.com', 5124445567, 100000, 'ilovedogs', 1, null);
INSERT INTO employee (full_name, email, phone_number, salary, password, role_id, manager_id ) VALUES ('Travis Campedo', 'Travis@oatmega.com', 5124578897, 97000, 'cAtLuv3r21$', 6, 5);

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


