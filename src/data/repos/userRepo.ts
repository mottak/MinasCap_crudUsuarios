import { NewUser, User, } from '../../domain/models'

export interface IUserRepo {
  add(data: NewUser): Promise<User>
  // findAll(): Promise<User[]>
  // findByEmail(email: User['email']): Promise<User>
  // findById(id: User['id']): Promise<User>
}