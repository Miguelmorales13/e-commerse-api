import { Column, CreatedAt, DeletedAt, Model, UpdatedAt } from "sequelize-typescript";

export class GeneralModel<T> extends Model<T> {
  @Column({ primaryKey: true, autoIncrement: true })
  id?: number;

  @Column({ field: "created_at", allowNull: false })
  @CreatedAt
  createdAt?: Date;
  @Column({ field: "updated_at", allowNull: false })
  @UpdatedAt
  updatedAt?: Date;
  @Column({ field: "deleted_at", allowNull: true })
  @DeletedAt
  deletedAt?: Date;


}