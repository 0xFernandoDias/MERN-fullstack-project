import express from 'express'
import { checkRules4Auth } from '../../utils/validators'
import { loginUser, getUser } from '../../controllers/auth'
import auth from '../../middleware/auth'

const authRouter = express.Router()

// @route POST api/auth | @description Login User & See the Token  | @access Public
authRouter.post('/', checkRules4Auth, loginUser)

// @route GET api/auth | @description Get Auth User by Token | @access Public
authRouter.get('/', auth, getUser)

export default authRouter