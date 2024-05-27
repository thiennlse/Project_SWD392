"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("PackageOrders", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT,
      },
      kidId: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references: {
          model: "KidProfiles",
          key: "id",
        },
      },
      packageId: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references: {
          model: "Packages",
          key: "id",
        },
      },
      totalPrice: {
        type: Sequelize.STRING,
      },
      nameOfAdult: {
        type: Sequelize.STRING,
      },
      nameOfKid: {
        type: Sequelize.STRING,
      },
      phone: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
      additionalNotes: {
        type: Sequelize.STRING,
      },
      status: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("PackageOrders");
  },
};
