"use strict";

import { Sequelize } from "sequelize-typescript";

import { Tweet } from "./models/tweet";

const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/config/database.json")[env];

export const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

sequelize.addModels([Tweet]);

const populateDb = async () => {
  console.log("Populating the db...");
  Tweet.sync();
};

populateDb();
