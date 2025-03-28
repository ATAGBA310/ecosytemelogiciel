const {DataTypes} = require('sequelize');
const {bdd} = require('../framework/connexion.js');

const Category = bdd.define( 
    'Category',
    {
        name: {
            type: DataTypes.STRING(255),
            allowNull: false,
        }
    }
)

module.exports = Category;