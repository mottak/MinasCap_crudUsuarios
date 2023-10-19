import { NewUser, User } from '../models'

export interface IUserCase {
  add(user: NewUser): Promise<User>
  find(): Promise<User[]>
  findOne(id: User['id']): Promise<User>

}