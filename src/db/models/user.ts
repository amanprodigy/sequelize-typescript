import bcrypt from "bcrypt";
import {
  Table,
  PrimaryKey,
  Column,
  Length,
  Unique,
  DataType,
  IsEmail,
  HasMany,
  BeforeSave
} from "sequelize-typescript";

import BaseModel from "@db/models/BaseModel";
import Tweet from "@db/models/tweet";

const SALT_ROUNDS = 10;

@Table({
  tableName: "users",
  paranoid: true,
  indexes: [{ unique: true, fields: ["email"] }]
})
export default class User extends BaseModel<User> {
  @PrimaryKey
  @Column({
    allowNull: false,
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4
  })
  id!: string;

  @IsEmail // Email validation
  @Unique // Email ids must be unique
  @Length({ max: 35 })
  @Column({ allowNull: false, comment: "Email that the user registered with" })
  email!: string;

  @Length({ max: 300 })
  @Column({
    allowNull: false,
    comment: "This is the password hash. Not the actual password!"
  })
  password!: string;

  @HasMany(() => Tweet, "authorId") // Will only add relation with the Tweet model
  tweets: Tweet[];

  /* Save password hash of the incoming password in the db. Never the actual password */
  @BeforeSave
  static async updatePassword(instance: User): Promise<void> {
    const user = instance;
    try {
      const passwordHash = bcrypt.hashSync(user.password, SALT_ROUNDS);
      user.password = passwordHash;
    } catch (err) {
      throw err;
    }
  }
}

// We could also do the following associations
// User.hasMany(Tweet, { as: 'tweets', foreignKey: 'authorId', constraints: false});
