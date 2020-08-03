"use strict";
module.exports = (sequelize, DataTypes) => {
  const Department = sequelize.define("Department", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlpha: true,
        notNull: true,
      },
    },
  });
  return Department;
};
