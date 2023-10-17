import { DataTypes, Sequelize } from "sequelize";

function initUserSettingsRepository(
  sequelize: Sequelize,
  types: typeof DataTypes
) {
  return sequelize.define("user_setting", {
    isActive: {
      type: types.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    isPrivate: {
      type: types.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  });
}

export default initUserSettingsRepository;
