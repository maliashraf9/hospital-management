const Sequelize = require("sequelize")
const db = require("../database/db")

module.exports = db.sequelize.define(
    'patient',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        first_name: {
            type: Sequelize.STRING
            
        },
        last_name: {
            type: Sequelize.STRING
            
        },
        email: {
            type: Sequelize.STRING
            
        },
        diagnosis: {
            type: Sequelize.STRING
        }
        ,
        did: {
            type: Sequelize.INTEGER
        }
    },
    {
        timestamps: false
    }
)