import { Dialect } from "sequelize";
import dotenv from "dotenv";

import { throwIf } from "@/utilities/helper";

type NodeEnv = "dev" | "development" | "prod" | "production";

dotenv.config({
  override: true,
});

throwIf(!process.env.APP_NAME, "Log: env APP_NAME is required");
throwIf(!process.env.APP_VERSION, "Log: env APP_VERSION is required");
throwIf(!process.env.DB_DATABASE, "Log: env DB_DATABASE is required");
throwIf(!process.env.DB_DIALECT, "Log: env DB_DIALECT is required");

export const nodeEnv = process.env.NODE_ENV as NodeEnv;
export const isProduction = nodeEnv === "prod" || nodeEnv === "production";

export const appName = process.env.APP_NAME!;
export const appVersion = process.env.APP_VERSION!;
export const appPort = parseInt(process.env.APP_PORT ?? "8000");
export const appUrl = process.env.APP_URL ?? "http://localhost:8000";

export const dbHost = process.env.DB_HOST ?? "localhost";
export const dbPort = parseInt(process.env.DB_PORT ?? "5432");
export const dbUsername = process.env.DB_USERNAME ?? "postgres";
export const dbPassword = process.env.DB_PASSWORD ?? "root";
export const dbDatabase = process.env.DB_DATABASE!;
export const dbDialect = process.env.DB_DIALECT! as Dialect;
export const dbPoolMin = parseInt(process.env.DB_POOL_MIN ?? "0");
export const dbPoolMax = parseInt(process.env.DB_POOL_MAX ?? "10");
export const dbPoolAcquire = parseInt(process.env.DB_POOL_ACQUIRE ?? "30000");
export const dbPoolIdle = parseInt(process.env.DB_POOL_IDLE ?? "10000");
