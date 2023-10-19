import { UserTasks } from "../../data/tasks/userTasks"
import { UserDAO } from "../../infra/daos/userDaos"
import { UserCase } from "../../presentation/cases/userCase"

export const userFactory = () => {
  const addNewUserRepo = new UserDAO()
  const addNewUserTask = new UserTasks(addNewUserRepo)
  const userCase = new UserCase(addNewUserTask)
  return userCase
}