import { DateTime } from "luxon";
import Encryption from '@ioc:Adonis/Core/Encryption'
import { BaseModel, column, HasMany, hasMany } from "@ioc:Adonis/Lucid/Orm";
import Task from './Task';

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public email: string;

  @column()
  public nick_name: string;

  @column({
    prepare: (value: string) => Encryption.encrypt(value),
    consume: (value: string) => Encryption.decrypt(value),
  })
  public password: string;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @hasMany(() => Task)
  public tasks: HasMany<typeof Task>
}
