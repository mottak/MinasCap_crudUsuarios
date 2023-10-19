import { NewUser, User } from "../../domain/models"
import { IUserTasks } from "../../presentation/tasks/userTasks"
import { CustomError } from "../errors/customError"
import { IUserRepo } from "../repos/userRepo"


export class UserTasks implements IUserTasks {
  constructor(
    readonly userRepo: IUserRepo,
  ) {

  }
   
  async add(userData: NewUser): Promise<User> {
   
    const user = await this.userRepo.add(userData);
    return user;
  }

  async checkEmail(email: NewUser['email']): Promise<void> {
    const userEmail = await this.userRepo.findByEmail(email)
    if (userEmail) throw new CustomError('"Email" is already in use', 'UnauthorizedError');
  }

  async find(): Promise<User[]> {
    const users = await this.userRepo.findAll();
    return users;
  }

  async findOne(id: User['id']): Promise<User> {
    const user = await this.userRepo.findById(id);
    return user;
  }

}