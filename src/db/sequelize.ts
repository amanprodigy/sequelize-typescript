"use strict";

import { Sequelize } from "sequelize-typescript";
const Umzug = require("umzug");

import Tweet from "@app/db/models/Tweet";
import User from "@app/db/models/User";
import UserFollower from "@db/models/UserFollower";
import bootstrap from "@app/bootstrap";

const dbConfig = require("@db/config/database");
const env = process.env.NODE_ENV || "development";
const config = dbConfig[env];

export const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

sequelize.addModels([Tweet, User, UserFollower]);

const uz = new Umzug({
  migrations: {
    path: __dirname + "/migrations",
    params: [sequelize.getQueryInterface(), Sequelize]
  },
  storage: "sequelize",
  storageOptions: {
    sequelize: sequelize
  }
});

const syncAndPopulateDb = async () => {
  try {
    await sequelize.drop();
  } catch (err) {
    throw err;
  }

  /* Checks migrations and run them if they are not already applied. To keep
   * track of the executed migrations, a table (and sequelize model) called
   * SequelizeMeta will be automatically created (if it doesn't exist already)
   * and parsed.
   * */
  await uz.up();

  try {
    console.log("Bootstrapping db ... ");
    await bootstrap();
    console.log("Bootstrap db successful");
  } catch (error) {
    console.error("Unable to bootstrap db: ", error);
  }
};

syncAndPopulateDb();
