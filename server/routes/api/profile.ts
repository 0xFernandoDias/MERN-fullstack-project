import express from 'express'
import auth from '../../middleware/auth'
import { 
    createProfile,
    getProfile,
    getAllProfiles,
    getProfileById,
    deleteStuff,
    addExperience,
    deleteExperience,
    addEducation,
    deleteEducation, 
    getGithubRepos
    // updateExperience
} from '../../controllers/profile'
import { checkProfileCreation, checkExperienceRules, checkEducationRules } from '../../utils/validators'

const profileRouter = express.Router()

type typeofParamsArray = [any?, any?]
const paramsArray: typeofParamsArray = [auth, checkProfileCreation]
const paramsArray2: typeofParamsArray = [auth, checkExperienceRules]
const paramsArray3: typeofParamsArray = [auth, checkEducationRules]


// @route POST api/profile | @description Create or update user profile | @access Private
profileRouter.post('/', paramsArray, createProfile)

// @route GET api/profile/me | @description Get my profile | @access Private
profileRouter.get('/me', auth, getProfile)

// @route GET api/profile | @description Get all profiles | @access Public
profileRouter.get('/', getAllProfiles)

// @route GET api/profile/user/:user_id | @description Get profile by user ID | @access Public
profileRouter.get('/user/:user_id', getProfileById)

// @route DELETE api/profile | @description Delete user, profile & posts | @access Private
profileRouter.delete('/', auth, deleteStuff)

// @route PUT api/profile/experience | @description Add profile experience | @access Private
profileRouter.put('/experience', paramsArray2, addExperience)

// @route DELETE api/profile/experience/:exp_id | @description Delete experience | @access Private
profileRouter.delete('/experience/:exp_id', auth, deleteExperience)

/* @route PUT api/profile/experience/:exp_id | @description Update experience | @access Private AND EDUCATION AND LIKES ON COMMENTS
profileRouter.put('/experience/:exp_id', paramsArray2, updateExperience) */

// @route PUT api/profile/education | @description Add profile education | @access Private
profileRouter.put('/education', paramsArray3, addEducation)

// @route DELETE api/profile/education/:edu_id | @description Delete education | @access Private
profileRouter.delete('/education/:edu_id', auth, deleteEducation)

// @route GET api/profile/github/:username | @description Get user repos from github | @access Public
profileRouter.get('/github/:username', getGithubRepos)


export default profileRouter