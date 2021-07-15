import express from 'express'
import auth from '../../middleware/auth'
import { createProfile, getProfile } from '../../controllers/profile'
import { checkProfileCreation } from '../../utils/validators'

const profileRouter = express.Router()

type typeofParamsArray = [any?, any?]
const paramsArray: typeofParamsArray = [auth, checkProfileCreation]

// @route GET api/profile/me | @description Get my profile | @access Private
profileRouter.get('/me', auth, getProfile)

// @route POST api/profile | @description Create or update user profile | @access Private
profileRouter.post('/', paramsArray, createProfile)

export default profileRouter