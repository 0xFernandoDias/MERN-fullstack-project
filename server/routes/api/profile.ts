import express from 'express'

const profileRouter = express.Router()

// @route GET api/profile | @description Test route | @access Public
profileRouter.get('/', (req, res) => res.send('Profile Route'))

export default profileRouter