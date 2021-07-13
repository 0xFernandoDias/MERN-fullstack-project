import express from 'express'

const authRouter = express.Router()

// @route       GET api/auth
// @description Test route
// @access      Public
authRouter.get('/', (req, res) => res.send('Auth Route'))

export default authRouter