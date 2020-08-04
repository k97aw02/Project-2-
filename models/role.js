

module.exports = function (sequelize, DataTypes) {
    const Role = sequelize.define("Role", {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, {
        freezeTableName: true
    });
    Role.associate = function (models) {
        Role.belongsTo(models.Department, {
            foreignKey: {
                allowNull: true
            }
        })
    }
    return Role;
};
