import {
  Table,
  PrimaryKey,
  Column,
  Model,
  Length,
  Unique,
  AutoIncrement
} from "sequelize-typescript";

@Table
export class User extends Model<User> {

  @AutoIncrement
  @Length({ max: 11 })
  @PrimaryKey
  @Column({ allowNull: false })
  id!: number;

  @Unique
  @Length({ max: 35 })
  @Column({ allowNull: false })
  email!: string;

  @Length({ max: 20 })
  @Column({ allowNull: false })
  password!: string;

}
