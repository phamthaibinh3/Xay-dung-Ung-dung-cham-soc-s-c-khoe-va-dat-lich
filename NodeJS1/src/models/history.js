'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class History extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {    //associate: định danh các mối liên hệ
            // define association here
        }
    };
    History.init({
        patientID: DataTypes.INTEGER,
        doctorID: DataTypes.INTEGER,
        description: DataTypes.TEXT,
        files: DataTypes.TEXT

    }, {
        sequelize,
        modelName: 'History',
    });
    return History;
};