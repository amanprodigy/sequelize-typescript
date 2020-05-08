import {
  Table,
  PrimaryKey,
  Column,
  Model,
  Length,
  AutoIncrement
} from "sequelize-typescript";

@Table
export class Tweet extends Model<Tweet> {

  @AutoIncrement
  @Length({ max: 11 })
  @PrimaryKey
  @Column({ allowNull: false })
  id: number;

  @Length({ max: 300 })
  @Column({ allowNull: false })
  content!: string;

}
