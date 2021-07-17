import express from 'express'
import { checkCreationRules } from '../../utils/validators'
import { registerUser } from '../../controllers/users'

const usersRouter = express.Router()

// @route POST api/users | @description Register User & Return Token | @access Public
usersRouter.post('/', checkCreationRules, registerUser)

export default usersRouter