import { DataTypes, Sequelize } from "sequelize";

function initUserDetailsRepository(
  sequelize: Sequelize,
  types: typeof DataTypes
) {
  return sequelize.define("user_detail", {
    name: {
      type: types.STRING,
      allowNull: false,
    },
    bio: {
      type: types.TEXT,
      allowNull: true,
    },
    gender: {
      type: types.ENUM("male", "female"),
      allowNull: false,
    },
    dateOfBirth: {
      type: types.DATE,
      allowNull: false,
    },
    avatarUrl: {
      type: types.TEXT,
      allowNull: true,
    },
    websiteUrl: {
      type: types.TEXT,
      allowNull: true,
    },
  });
}

export default initUserDetailsRepository;
