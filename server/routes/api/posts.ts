import express from 'express'

const postsRouter = express.Router()

// @route       GET api/posts
// @description Test route
// @access      Public
postsRouter.get('/', (req, res) => res.send('Posts Route'))

export default postsRouter