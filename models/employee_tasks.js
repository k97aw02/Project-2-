module.exports = (sequelize, DataTypes) => {
  const Employee_tasks = sequelize.define(
    "Employee_tasks",
    {
      completed_date: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isDate: true,
          notNull: true,
        },
      },
    },
    {
      freezeTableName: true,
    }
  );

  Employee.associate = function (models) {
    Employee.belongsToMany(models.Task, { through: models.Employee_tasks });
  };
  Task.associate = function (models) {
    Task.belongsToMany(models.Employee, { through: models.Employee_tasks });
  };

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
