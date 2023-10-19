import { IUserRepo } from "../../data/repos/userRepo";
import { NewUser, User } from "../../domain/models";
import UserModel from "../sequelize/models/User";


export class UserDAO implements IUserRepo {
  async add(data: NewUser): Promise<User> {
    const user = await UserModel.create(data);
    return user
  }
  

}