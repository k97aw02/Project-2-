const bcrypt = require('bcryptjs');

module.exports = function (sequelize, DataTypes) {
    const Employee = sequelize.define(
        "Employee",
        {
            full_name: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: {
                        args: true,
                        msg: "Please enter your name"
                    }
                },
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                // unique: true,
                validate: {
                    isEmail: {
                        args: true,
                        msg: "please enter a valid email"
                    },
                    notEmpty: {
                        args: true,
                        msg: "email cannot be left empty"
                    }
                },
            },
            salary: {
                type: DataTypes.STRING,
                allowNull: true,
                validate: {
                    isNumeric: {
                        args: /^[0-9]*$/,
                        msg: "salary should only include numbers"
                    }
                },
            },
            phone_number: {
                type: DataTypes.STRING,
                allowNull: true,
                // unique could be something we could add later 
                validate: {
                    is: {
                        args: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g,
                        msg: "please enter a valid phone number"
                    }
                }
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: {
                        args: true,
                        msg: "password cannot be left empty"
                    }
                }
            },
        },
        {
            freezeTableName: true,
            // let add the password hash
            hooks: {
                afterValidate: function (res) {
                    console.log(`this message happens after validation ${res.password}`);
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
                allowNull: true,
            }
        });

        Employee.belongsToMany(models.Task, {
            allowNull: true,
            through: models.Employee_Task
        });
    };
    return Employee;
};
