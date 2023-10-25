import { CustomError } from "../../data/errors/customError";
import { IUserRepo } from "../../data/repos/userRepo";
import { NewUser, User } from "../../domain/models";
import UserModel from "../sequelize/models/User";


export class UserDAO implements IUserRepo {
 
  async add(data: NewUser): Promise<User> {
     
    const user = await UserModel.create({ name: data.name, email: data.email });
    return user;
  }

  async findByEmail(data: NewUser['email']): Promise<User | null> {
    const user = await UserModel.findOne({ where: { email: data }});
    return user;
  }
  
  async findAll(): Promise<User[]> {
    const users = await UserModel.findAll();
    return users
  }

  async findById(id: User['id']): Promise<User | null> {
    const user = await UserModel.findByPk(id);
    return user;
  }

  async update(data: NewUser, id: User['id']): Promise<void> {
    const [user] = await UserModel.update({ name: data.name }, {
      where: {
        id,
      }
    });
    if(user === 0) throw new CustomError('O id informado não existe.', 'NotFound')
  }

  async delete(id: User['id']): Promise<void> {
    const user = await UserModel.destroy({
      where: {
        id,
      }
    });
    if(user === 0) throw new CustomError('O id informado não existe.', 'NotFound')
  }

}