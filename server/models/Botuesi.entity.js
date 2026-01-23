import { DataTypes, Model } from "sequelize";
import sequelize from "../config/sequelize.mjs";

const Botuesi = sequelize.define(
  "Botuesis",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    PublisherName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
  }
);

console.log(
  "Botuesi model created successfully:",
  Botuesi === sequelize.models.Botuesi
);

export default Botuesi;
