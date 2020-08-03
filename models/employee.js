module.exports = function (sequelize, DataTypes) {
    const Employee = sequelize.define('Employee', {
        full_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
                msg: 'thsi i'
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
                notEmpty: true
            }
        },
        phone_number: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                notEmpty: true,
                is: (/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g),
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        role_id: {
            type: DataTypes.INTEGER,
        }
    });
    Employee.associate = function(models) {
        Employee.belongsTo(models.Role, {
            foreignKey: {
                allowNull: false
            }
        });

        // how would i do the association for a manager 

    }
    return Employee;
}; 