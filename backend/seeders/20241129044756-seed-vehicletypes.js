"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "vehicletypes",
      [
        { id: 1, type: "Motorcycle", wheels: 2, createdAt: new Date("2024-11-29 05:03:35"), updatedAt: new Date("2024-11-29 05:03:35") },
        { id: 2, type: "Scooter", wheels: 2, createdAt: new Date("2024-11-29 05:03:35"), updatedAt: new Date("2024-11-29 05:03:35") },
        { id: 3, type: "Moped", wheels: 2, createdAt: new Date("2024-11-29 05:03:35"), updatedAt: new Date("2024-11-29 05:03:35") },
        { id: 4, type: "Sedan", wheels: 4, createdAt: new Date("2024-11-29 05:03:35"), updatedAt: new Date("2024-11-29 05:03:35") },
        { id: 5, type: "SUV", wheels: 4, createdAt: new Date("2024-11-29 05:03:35"), updatedAt: new Date("2024-11-29 05:03:35") },
        { id: 6, type: "Hatchback", wheels: 4, createdAt: new Date("2024-11-29 05:03:35"), updatedAt: new Date("2024-11-29 05:03:35") },
        { id: 7, type: "Wagon", wheels: 4, createdAt: new Date("2024-11-29 05:03:35"), updatedAt: new Date("2024-11-29 05:03:35") },
        { id: 8, type: "Bicycle", wheels: 2, createdAt: new Date("2024-11-29 05:03:35"), updatedAt: new Date("2024-11-29 05:03:35") },
        { id: 9, type: "Cruiser", wheels: 2, createdAt: new Date("2024-11-29 05:03:35"), updatedAt: new Date("2024-11-29 05:03:35") }
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("vehicletypes", null, {});
  },
};
