

module.exports = function(sequelize, DataTypes) {
    const Role  = sequelize.define("Role", {
        title: {
           type: DataTypes.STRING,
           allowNull: false,
        }, 
    });
    Role.associate = function(models) {
        Role.belongsTo(models.Department, {
            foreignKey: {
                allowNull: false
            }
        })
    }
    return Role;
  };
  