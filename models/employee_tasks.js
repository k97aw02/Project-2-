
module.exports = (sequelize, DataTypes) => {
  const Employee_tasks = sequelize.define("Employee_tasks", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlpha: true,
        notNull: true,
      },
    },
  });
  return Employee_tasks;
};

// create table Employee_Tasks(
//     id INTEGER  not null auto_increment PRIMARY KEY,
//     created_date timestamp,
//     completed date,
//     employeeId  int,
//     foreign key (employeeId) references employee(id),
//     tasksId  int,
//     foreign key (tasksId) references Tasks(id)
