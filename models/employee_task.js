module.exports = (sequelize, DataTypes) => {
  const Employee_Task = sequelize.define(
    "Employee_Task",
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

  return Employee_Task;
};
