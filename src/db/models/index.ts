"use strict";

import { Sequelize } from "sequelize-typescript";

import Tweet from "@db/models/tweet";
import User from "@db/models/user";
import UserFollower from "@db/models/UserFollower";
import bootstrap from '@app/bootstrap';

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

const syncAndPopulateDb = async () => {

  try {
    console.log("Syncing db ...");
    await sequelize.sync({ force: true })
    console.log("Sync db successful")
  } catch(err){
    console.error("Unable to sync db: ", err);
    throw(err);
  }

  try {
    console.log("Bootstrapping db ... ");
    await bootstrap();
    console.log("Bootstrap db successful");
  } catch (error) {
    console.error("Unable to bootstrap db: ", error);
  }

}

syncAndPopulateDb();
