import express from 'express'
import auth from '../../middleware/auth'
import { checkPostCreation } from '../../utils/validators'
import { 
    createPost, 
    getAllPosts, 
    getPostById, 
    deletePost, 
    likePost, 
    unlikePost,
    comment,
    deleteComment
} from '../../controllers/post'

const postsRouter = express.Router()

type typeofParamsArray = [any?, any?]
const paramsArray: typeofParamsArray = [auth, checkPostCreation]

// @route POST api/posts | @description Create a post | @access Private
postsRouter.post('/', paramsArray, createPost)

// @route GET api/posts | @description Get all posts | @access Private
postsRouter.get('/', auth, getAllPosts)

// @route GET api/posts/:POSTid | @description Get post by id | @access Private
postsRouter.get('/:id', auth, getPostById)

// @route DELETE api/posts/:POSTid | @description Delete a post | @access Private
postsRouter.delete('/:id', auth, deletePost)

// @route PUT api/posts/like/:POSTid | @description Like a post | @access Private
postsRouter.put('/like/:id', auth, likePost)

// @route PUT api/posts/unlike/:POSTid | @description Unlike a post | @access Private
postsRouter.put('/unlike/:id', auth, unlikePost)

// @route POST api/posts/comment/:POSTid | @description Comment on a post | @access Private
postsRouter.post('/comment/:id', paramsArray, comment)

// @route DELETE api/posts/comment/:POSTid/:comment_id | @description Delete a comment on post | @access Private
postsRouter.delete('/comment/:id/:comment_id', auth, deleteComment)

export default postsRouter