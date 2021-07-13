import express from 'express'

const usersRouter = express.Router()

// @route       GET api/users
// @description Test route
// @access      Public
usersRouter.get('/', (req, res) => res.send('User Route'))

export default usersRouter