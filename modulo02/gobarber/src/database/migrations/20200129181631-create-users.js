module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('users', {
            id: {
               type: Sequelize.INTEGER,
               allowNull: false,
               autoIncrement: true,
               primaryKey: true,
            },
            name: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            email: {
                type: Sequelize.INTEGER,
                allowNull: false,
                unique: true,
            },
            password_hash: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            provider: {
                type: Sequelize.BOOLEAN,
                defaultValue: false,
                allowNull: false,
            },
            created_at: {},
            updated_at: {},
        });
    },

    down: queryInterface => {
        return queryInterface.dropTable('users');
    },
};
