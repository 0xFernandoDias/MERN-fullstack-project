import express from 'express'
import { checkRules4Creation } from '../../utils/validators'
import { registerUser } from '../../controllers/users'

const usersRouter = express.Router()

// @route POST api/users | @description Register User & Return Token | @access Public
usersRouter.post('/', checkRules4Creation, registerUser)

export default usersRouter