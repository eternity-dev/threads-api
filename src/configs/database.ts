import { Sequelize, DataTypes } from "sequelize";

import {
  dbHost,
  dbPort,
  dbUsername,
  dbPassword,
  dbDatabase,
  dbDialect,
  dbPoolMin,
  dbPoolMax,
  dbPoolAcquire,
  dbPoolIdle,
} from "@/configs/env";
import { Database } from "@/types/database";

import initUserRepository from "@/repositories/user";
import initUserDetailsRepository from "@/repositories/user-details";
import initUserSettingsRepository from "@/repositories/user-settings";

const sequelize = new Sequelize({
  host: dbHost,
  port: dbPort,
  username: dbUsername,
  password: dbPassword,
  database: dbDatabase,
  dialect: dbDialect,
  define: {
    timestamps: true,
    underscored: true,
  },
  pool: {
    min: dbPoolMin,
    max: dbPoolMax,
    acquire: dbPoolAcquire,
    idle: dbPoolIdle,
  },
});

const model = {
  user: initUserRepository(sequelize, DataTypes),
  userDetail: initUserDetailsRepository(sequelize, DataTypes),
  userSetting: initUserSettingsRepository(sequelize, DataTypes),
};

async function listen(callback: (port: number) => Promise<void> | void) {
  model.user.hasOne(model.userDetail);
  model.user.hasOne(model.userSetting);
  model.userDetail.belongsTo(model.user);
  model.userSetting.belongsTo(model.user);

  await sequelize.authenticate({ logging: true });
  await sequelize.sync({ alter: true, force: false });
  await callback(dbPort);
}

const db: Database<typeof model> = {
  sequelize,
  listen,
  model,
};

export default db;
