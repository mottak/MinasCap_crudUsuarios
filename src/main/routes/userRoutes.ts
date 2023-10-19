import { Router } from 'express'
import { userSchema } from '../validators/userValidator'
import { userFactory } from '../factories/userFactorie'

const userRoutes = Router()

userRoutes.post('/user', async (req, res) => {
  const dataUser = await userSchema.validateAsync(req.body)
  const resultUser = await userFactory().add(dataUser)


  return res.status(201).json(resultUser)
})

userRoutes.get('/user', async (req, res) => {

  const resultUser = await userFactory().find()

  return res.status(200).json(resultUser)
})


export default userRoutes