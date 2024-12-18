'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Booking.belongsTo(models.VehicleTypes, {
        foreignKey: "vehicleTypeId",
        sourceKey: "id",
        as: "vehicleType",
      });

      Booking.belongsTo(models.VehicleModel, {
        foreignKey: "vehicleModelId",
        sourceKey: "id",
        as: "vehicleModel",
      });
    }
  }
  Booking.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    vehicleTypeId: DataTypes.INTEGER,
    vehicleModelId: DataTypes.INTEGER,
    startDate: DataTypes.STRING,
    endDate: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Booking',
  });
  return Booking;
};