import { IUserRepo } from "../../data/repos/userRepo";
import { NewUser, User } from "../../domain/models";
import UserModel from "../sequelize/models/User";


export class UserDAO implements IUserRepo {
 
  async add(data: NewUser): Promise<User> {
     
    const user = await UserModel.create({ name: data.name, email: data.email });

    return user;
  }

  async findByEmail(data: NewUser['email']): Promise<User> {
    const user = await UserModel.findOne({ where: { email: data }});
    return user as User;
  }
  
  async findAll(): Promise<User[]> {
    const users = await UserModel.findAll();
    return users
  }

  async findById(id: User['id']): Promise<User> {
    const user = await UserModel.findByPk(id);
    return user as User;
  }

}