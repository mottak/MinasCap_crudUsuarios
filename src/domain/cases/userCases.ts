import { Message } from '../generics/message'
import { NewUser, UpdateUser, User } from '../models'

export interface IUserCase {
  add(user: NewUser): Promise<User>
  find(): Promise<User[]>
  findOne(id: User['id']): Promise<User>
  update(data: UpdateUser, id: User['id'] ): Promise<Message>
  delete(id: User['id']): Promise<void>

}