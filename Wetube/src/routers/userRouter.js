import express from 'express'
import { edit, remove, logout, see } from '../controllers/userController'

const userRouter = express.Router()

// const handleEditUser = (req, res) => res.send('Edit user')
// const handleDelete = (req, res) => res.send('Delete User')

userRouter.get('/logout', logout)
userRouter.get('/remove', remove)
userRouter.get('/edit', edit)
userRouter.get(':id', see)

export default userRouter
