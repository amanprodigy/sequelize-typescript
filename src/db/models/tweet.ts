import { Table, PrimaryKey, Column, Model, Length } from "sequelize-typescript";

@Table
export class Tweet extends Model<Tweet> {

  @Length({ max: 11 })
  @PrimaryKey
  @Column({allowNull: false})
  id: number;

  @Length({ max: 300 })
  @Column({allowNull: false})
  content!: string;

}
