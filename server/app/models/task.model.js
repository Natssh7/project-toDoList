module.exports = (connex, Sequelize) => {
    const Task = connex.define('task', {
        name: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        status: {
            type: Sequelize.STRING
        }
    })
    return Task
}