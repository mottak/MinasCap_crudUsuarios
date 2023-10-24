import { NewUser, UpdateUser, User, } from '../../domain/models'

export interface IUserRepo {
  add(data: NewUser): Promise<User>
  findByEmail(data: NewUser['email']):Promise<User>
  findAll(): Promise<User[]>
  findById(id: User['id']): Promise<User | null>
  update(data: UpdateUser, id: User['id']): Promise<void>
  delete(id: User['id']): Promise<void>
}