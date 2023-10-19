import { Message } from '../../domain/generics/message'
import { NewUser, UpdateUser, User, } from '../../domain/models'

export interface IUserTasks {
  add(data: NewUser): Promise<User>
  checkEmail(email: User['email']): Promise<void>
  find(): Promise<User[]>
  findOne(id: User['id']): Promise<User>
  update(data: UpdateUser, id: User['id']): Promise<void>
  // delete(id: User['id']): Promise<Message>
}
