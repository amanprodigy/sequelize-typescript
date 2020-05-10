import {
  Table,
  Model,
  CreatedAt,
  UpdatedAt,
  DeletedAt
} from "sequelize-typescript";

@Table({ paranoid: true, underscored: true})
export class BaseModel<T> extends Model<T> {
  @CreatedAt
  created_at: Date

  @UpdatedAt
  updated_at: Date

  @DeletedAt
  deleted_at: Date
}
