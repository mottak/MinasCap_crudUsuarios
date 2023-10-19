import { NewUser, User } from '../models'

export interface IUserCase {
  add(user: NewUser): Promise<User>

}