import { NewUser, User } from '../../domain/models'
import { IUserCase } from '../../domain/cases/userCases'
import { IUserTasks } from '../tasks/userTasks'


export class UserCase implements IUserCase {

  constructor(
    readonly userTasks: IUserTasks,
  ) { }

  async add(user: NewUser): Promise<User> {
    console.log('UserCase.add', user)
    await this.userTasks.checkEmail(user.email)
    const newUser = await this.userTasks.add(user)
    return newUser;
  
  }
}
