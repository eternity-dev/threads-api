import { DataTypes, Sequelize } from "sequelize";

export type Database<T extends Record<string, any>> = {
  listen: (
    callback: (port: number) => Promise<void> | void
  ) => Promise<void> | void;
  sequelize: Sequelize;
  model: {
    [K in keyof T]: T[K];
  };
};

export type InitModelFunction = <
  T extends (...args: any) => any
>(sequelize: Sequelize, types: typeof DataTypes) => ReturnType<T>;
