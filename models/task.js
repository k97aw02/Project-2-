module.exports = function (sequelize, DataTypes) {
  const Task = sequelize.define(
    "Task",
    {
      task: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Please, enter a task",
          },
        },
      },
    },
    {
      freezeTableName: true,
    }
  );

  
  Task.associate = function (models) {
    Task.belongsToMany(models.Employee, { through: models.Employee_Task });
  };

  return Task;
};
