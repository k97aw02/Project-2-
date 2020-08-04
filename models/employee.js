const bcrypt = require('bcryptjs');

module.exports = function (sequelize, DataTypes) {
    const Employee = sequelize.define(
        "Employee",
        {
            full_name: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: true,
                    // msg: "Please enter your name",
                },
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
                validate: {
                    isEmail: true,
                    notEmpty: true,
                },
            },
            salary: {
                type: DataTypes.STRING,
                allowNull: true,
                validate: {
                    is: /^[0-9]*$/,
                },
            },
            phone_number: {
                type: DataTypes.STRING,
                allowNull: true,
                unique: true,
                validate: {
                    // notEmpty: true,
                    is: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g,
                },
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: true
                }
            },
        },
        {
            freezeTableName: true,
            hooks: {
                afterValidate: function () {
                    console.log(`this message happens after validation ${res}`);
                }
            }
        }
    );

    Employee.associate = function (models) {

        // ROLES associtation 
        Employee.belongsTo(models.Role, {
            foreignKey: {
                allowNull: true,
                name: "role_ID",
                // onDelete: "CASCADE"
            }
        });

        // MANAGER association
        Employee.belongsTo(Employee, {
            as: 'employee',
            foreignKey: {
                name: 'manage_Id',
                allowNull: true
            }
        });

        Employee.belongsToMany(models.Task, {
            allowNull: true,
            through: models.Employee_Task
        });
    };
    return Employee;
};
