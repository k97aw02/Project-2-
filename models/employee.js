module.exports = function (sequelize, DataTypes) {
    const Employee = sequelize.define(
        "Employee",
        {
            full_name: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: true,
                    msg: "thsi i",
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
                validate: {
                    is: /^[0-9]*$/,
                },
            },
            phone_number: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
                validate: {
                    notEmpty: true,
                    is: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g,
                },
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        {
            freezeTableName: true,
        }
    );
    Employee.associate = function (models) {
        Employee.belongsTo(models.Role, {
            foreignKey: {
                allowNull: false,
                name: "role_ID",
            },
        });
        Employee.associate = function (models) {
            // associtation with roles
            Employee.belongsTo(models.Role, {
                foreignKey: {
                    allowNull: false,
                    name: "role_ID",
                    // onDelete: "CASCADE"
                }
            });

            // how would I do the association for a manager .... 
            Employee.belongsTo(Employee, { as: 'employee', foreignKey: 'manage_Id', allowNull: true });

            Employee.belongsToMany(models.Task, { through: models.Employee_Task });
        };
        return Employee;
    };
};