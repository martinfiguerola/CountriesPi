const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('activity', {
        name: {
            type: DataTypes.STRING,
            allowNull: true
        },
        difficulty: {
            type: DataTypes.INTEGER,
            validate: {
                min: 1,
                min: 5
            }
        },
        duration: {
            type: DataTypes.INTEGER,
        },
        season: {
            type: DataTypes.ENUM("summer", "fall", "winter", "spring")
        },
    },
    {timestamps: false,}
    );
};