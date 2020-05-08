"use strict";

import { Sequelize } from "sequelize-typescript";

import { Tweet } from "@db/models/tweet";
import { User } from "@db/models/user";
const dbConfig = require("@db/config/database");

const env = process.env.NODE_ENV || "development";
const config = dbConfig[env];

export const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

sequelize.addModels([Tweet, User]);

const populateDb = async () => {
  console.log("Populating the db...");
  await sequelize.sync();
};

populateDb();
