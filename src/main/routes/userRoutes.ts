import { Router } from 'express'
import { userSchema } from '../validators/userValidator'
import { userFactory } from '../factories/userFactorie'

const userRoutes = Router()

userRoutes.post('/user', async (req, res) => {
  console.log(req.body)
  const dataUser = await userSchema.validateAsync(req.body)
  console.log(dataUser)
  const resultUserRegister = await userFactory().add(dataUser)


  return res.status(201).json(resultUserRegister)
})


export default userRoutes