import { NewUser, UpdateUser, User } from '../../domain/models'
import { IUserCase } from '../../domain/cases/userCases'
import { IUserTasks } from '../tasks/userTasks'
import { Message } from '../../domain/generics/message'


export class UserCase implements IUserCase {

  constructor(
    readonly userTasks: IUserTasks,
  ) { }
 
  async add(user: NewUser): Promise<User> {
    await this.userTasks.checkEmail(user.email)
    const newUser = await this.userTasks.add(user)
    return newUser;
  
  }

  async find(): Promise<User[]> {
    const users = await this.userTasks.find();
    return users;
  }

  async findOne(id: User['id']): Promise<User> {
    const user = await this.userTasks.findOne(id);
    return user;
  }

  async update(data: UpdateUser, id: User['id']): Promise<Message> {
    const user = await this.userTasks.update(data, id);
    return { message: 'Usuário atualizado com sucesso.'};
  }
}
