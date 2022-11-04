import { Column, Model, Table, DataType, AutoIncrement, PrimaryKey, AllowNull, CreatedAt, UpdatedAt } from "sequelize-typescript";

@Table({
  tableName: 'users',
  modelName: 'users'
})
export class User extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id: Number

  @Column(DataType.STRING)
  first_name: string

  @AllowNull
  @Column(DataType.STRING)
  last_name: string

  @Column(DataType.STRING)
  email: string

  @Column(DataType.STRING)
  password: string

  @AllowNull
  @Column(DataType.INTEGER)
  validated_at: Number

  @Column(DataType.STRING)
  validation_token: string

  @CreatedAt
  @Column(DataType.DATE)
  created_at: string

  @UpdatedAt
  @Column(DataType.DATE)
  updated_at: string
}
