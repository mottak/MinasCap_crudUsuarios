import { Message } from '../../domain/generics/message'
import { NewUser, User, } from '../../domain/models'

export interface IUserTasks {
  add(data: NewUser): Promise<User>
  checkEmail(email: User['email']): Promise<void>
  // find(): Promise<User[]>
  // findOne(id: number): Promise<User>
  // update(data: NewUser, id: number): Promise<User>
  // delete(id: number): Promise<Message>
}
