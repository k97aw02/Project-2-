module.exports = function (sequelize, DataTypes) {
    const Task = sequelize.define('Task', {
        task: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Please enter a task'
                }
            }
        }
    },{
        freezeTableName: true
    }); 
    return Task; 
}; 