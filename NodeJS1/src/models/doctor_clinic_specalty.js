'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Doctor_clinic_specalty extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {    //associate: định danh các mối liên hệ
            // define association here
        }
    };
    Doctor_clinic_specalty.init({
        doctorID: DataTypes.INTEGER,
        clinicID: DataTypes.INTEGER,
        specaltyID: DataTypes.INTEGER,

    }, {
        sequelize,
        modelName: 'Doctor_clinic_specalty',
    });
    return Doctor_clinic_specalty;
};