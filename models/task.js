module.exports = function (sequelize, DataTypes) {
    const Task = sequelize.define('Tasks', {
        task: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Please enter input'
                }
            }
        }
    }); 
    return Task; 
}; 