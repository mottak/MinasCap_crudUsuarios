import { Message } from '../../domain/generics/message'
import { NewUser, User, } from '../../domain/models'

export interface IUserTasks {
  add(data: NewUser): Promise<User>
  checkEmail(email: User['email']): Promise<void>
  find(): Promise<User[]>
  findOne(id: User['id']): Promise<User>
  // update(data: NewUser, id: User['id']): Promise<User>
  // delete(id: User['id']): Promise<Message>
}
