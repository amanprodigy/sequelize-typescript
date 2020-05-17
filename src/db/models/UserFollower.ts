import { ForeignKey, Table, Column, DataType } from "sequelize-typescript";

import User from "@db/models/User";
import BaseModel from "@db/models/BaseModel";

@Table({
  tableName: "user_follower",
  paranoid: true,
  indexes: [{
    unique: true, fields: ['followerId', 'followedId']
  }]
})
export default class UserFollower extends BaseModel<UserFollower> {
  @ForeignKey(() => User)
  @Column({
    type: DataType.UUID,
    allowNull: false,
    comment: "User id of the user who is getting followed"
  })
  userId!: string;

  @ForeignKey(() => User)
  @Column({
    type: DataType.UUID,
    allowNull: false,
    comment: "User id of the users who are following"
  })
  followerId!: string;
}
