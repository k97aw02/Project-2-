const bcrypt = require('bcryptjs');

module.exports = function (sequelize, DataTypes) {
    const Employee = sequelize.define(
        "Employee",
        {
            full_name: {
                type: DataTypes.STRING,
                allowNull: true,
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
                // unique could be added later 
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
            // hooks: {
            //     afterValidate: function (user) {
            //         user.password = bcrypt.hashSync(user.password, 10);
            //         // console.log(`this message happens after validation ${res.password}`);
            //     }
            // }
        }
    );

    Employee.prototype.validPassword = function (password) {
        return bcrypt.compareSync(password, this.password);
    };
    // Hooks are automatic methods that run during various phases of the User Model lifecycle
    // In this case, before a User is created, we will automatically hash their password
    Employee.addHook("beforeCreate", function (user) {
        user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
    });

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
