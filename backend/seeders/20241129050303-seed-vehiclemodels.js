"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "vehiclemodels",
      [
        { id: 1, name: "Harley-Davidson Iron 883", vehicleTypeId: 1, createdAt: new Date("2024-11-29 05:07:58"), updatedAt: new Date("2024-11-29 05:07:58") },
        { id: 2, name: "Yamaha YZF-R3", vehicleTypeId: 1, createdAt: new Date("2024-11-29 05:08:19"), updatedAt: new Date("2024-11-29 05:08:19") },
        { id: 3, name: "Vespa Primavera 150", vehicleTypeId: 2, createdAt: new Date("2024-11-29 05:08:28"), updatedAt: new Date("2024-11-29 05:08:28") },
        { id: 4, name: "Honda Metropolitan", vehicleTypeId: 2, createdAt: new Date("2024-11-29 05:08:33"), updatedAt: new Date("2024-11-29 05:08:33") },
        { id: 5, name: "Honda Ruckus", vehicleTypeId: 3, createdAt: new Date("2024-11-29 05:08:39"), updatedAt: new Date("2024-11-29 05:08:39") },
        { id: 6, name: "Yamaha Zuma 50F", vehicleTypeId: 3, createdAt: new Date("2024-11-29 05:08:45"), updatedAt: new Date("2024-11-29 05:08:45") },
        { id: 7, name: "Toyota Camry", vehicleTypeId: 4, createdAt: new Date("2024-11-29 05:08:53"), updatedAt: new Date("2024-11-29 05:08:53") },
        { id: 8, name: "Honda Accord", vehicleTypeId: 4, createdAt: new Date("2024-11-29 05:08:57"), updatedAt: new Date("2024-11-29 05:08:57") },
        { id: 9, name: "Ford Explorer", vehicleTypeId: 5, createdAt: new Date("2024-11-29 05:09:03"), updatedAt: new Date("2024-11-29 05:09:03") },
        { id: 10, name: "Honda CR-V", vehicleTypeId: 5, createdAt: new Date("2024-11-29 05:09:08"), updatedAt: new Date("2024-11-29 05:09:08") },
        { id: 11, name: "Volkswagen Golf", vehicleTypeId: 6, createdAt: new Date("2024-11-29 05:09:15"), updatedAt: new Date("2024-11-29 05:09:15") },
        { id: 12, name: "Ford Focus", vehicleTypeId: 6, createdAt: new Date("2024-11-29 05:09:21"), updatedAt: new Date("2024-11-29 05:09:21") },
        { id: 13, name: "Subaru Outback", vehicleTypeId: 7, createdAt: new Date("2024-11-29 05:09:27"), updatedAt: new Date("2024-11-29 05:09:27") },
        { id: 14, name: "Volvo V60", vehicleTypeId: 7, createdAt: new Date("2024-11-29 05:09:34"), updatedAt: new Date("2024-11-29 05:09:34") },
        { id: 15, name: "Trek Domane", vehicleTypeId: 8, createdAt: new Date("2024-11-29 05:09:41"), updatedAt: new Date("2024-11-29 05:09:41") },
        { id: 16, name: "Specialized Roubaix", vehicleTypeId: 8, createdAt: new Date("2024-11-29 05:09:46"), updatedAt: new Date("2024-11-29 05:09:46") },
        { id: 17, name: "Harley-Davidson Road King", vehicleTypeId: 9, createdAt: new Date("2024-11-29 05:09:58"), updatedAt: new Date("2024-11-29 05:09:58") },
        { id: 18, name: "Indian Scout", vehicleTypeId: 9, createdAt: new Date("2024-11-29 05:10:06"), updatedAt: new Date("2024-11-29 05:10:06") }
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("vehiclemodels", null, {});
  },
};
