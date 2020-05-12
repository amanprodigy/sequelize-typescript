import {
  Table,
  PrimaryKey,
  Column,
  Length,
  DataType,
  BelongsTo
} from "sequelize-typescript";

import BaseModel from "@db/models/BaseModel";
import User from "@db/models/User";

@Table({
  tableName: "tweets",
  paranoid: true
})
export default class Tweet extends BaseModel<Tweet> {
  @PrimaryKey
  @Column({
    allowNull: false,
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4
  })
  id!: string;

  @Length({ min: 2, max: 300 })
  @Column({ allowNull: false, type: DataType.TEXT })
  content!: string;

  // Add ForeignKey 'authorId' relating this tweet with its author
  @BelongsTo(() => User, "author_id")
  author!: User;
}

// We could also do this to make association
// Tweet.belongsTo(User, { foreignKey: "authorId" });
