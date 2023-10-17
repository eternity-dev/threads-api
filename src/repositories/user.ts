import { DataTypes, Sequelize } from "sequelize";
import { genSaltSync, hashSync } from "bcryptjs";

function initUserRepository(sequelize: Sequelize, types: typeof DataTypes) {
  return sequelize.define("user", {
    uuid: {
      type: types.UUID,
      defaultValue: types.UUIDV4,
    },
    email: {
      type: types.STRING(100),
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    username: {
      type: types.STRING(100),
      allowNull: false,
      unique: true,
      validate: {
        min: 8,
        max: 100,
      },
    },
    password: {
      type: types.STRING,
      allowNull: false,
      set: function (value: string) {
        const generatedSalt = genSaltSync(10);
        const hashedValue = hashSync(value, generatedSalt);

        this.setDataValue("password", hashedValue);
      },
    },
  });
}

export default initUserRepository;
