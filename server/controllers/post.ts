import { PostModel } from '../models/Post'
import { ProfileModel } from '../models/Profile'
import { UserModel } from '../models/User'
import { validationResult } from 'express-validator'

export const createPost = async (req: any, res: any) => {
    // Check if everything is okay
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    try {
        const user = await UserModel.findById(req.user.id).select('-password')

        const newPost = new PostModel({
            text: req.body.text,
            name: user.name,
            avatar: user.avatar,
            user: req.user.id
        })

        const post = await newPost.save()

        res.json(post)
    } catch (err) {
        console.log((<Error>err).message)
        res.status(500).send('Server error')
    }
}

export const getAllPosts = async (req: any, res: any) => {
    try {
        const posts = await PostModel.find().sort({ date: -1 })
        res.json(posts)
    } catch (err) {
        console.log((<Error>err).message)
        res.status(500).send('Server error')
    }
}

export const getPostById = async (req: any, res: any) => {
    try {
        const post = await PostModel.findById(req.params.id)

        if (!post) {
            return res.status(404).json({ msg: 'Post not found' })
        }

        res.json(post)
    } catch (err) {
        console.log((<Error>err).message)

        if ((<any>err).kind == 'ObjectId') {
            return res.status(400).json({ msg: 'Post not found' })
        }

        res.status(500).send('Server error')
    }
}

export const deletePost = async (req: any, res: any) => {
    try {
        const post = await PostModel.findById(req.params.id);

        if (!post) {
            return res.status(404).json({ msg: 'Post not found' })
        }

        await post.remove();

        res.json({ msg: 'Post removed' });
    } catch (err) {
        console.log((<Error>err).message)
        res.status(500).send('Server error')
    }
}

export const likePost = async (req: any, res: any) => {
    try {
        const post = await PostModel.findById(req.params.id)

        // Check if the post has already been liked by user
        if (post.likes.filter((like: any) => like.user.toString() === req.user.id).length > 0) {
            return res.status(400).json({ msg: 'Post already liked' })
        }

        post.likes.unshift({ user: req.user.id })

        await post.save()

        res.json(post.likes)
    } catch (err) {
        console.log((<Error>err).message)
        res.status(500).send('Server error')
    }
}

export const unlikePost = async (req: any, res: any) => {
    try {
        const post = await PostModel.findById(req.params.id)

        // Check if the post has already been liked by user
        if (post.likes.filter((like: any) => like.user.toString() === req.user.id).length === 0) {
            return res.status(400).json({ msg: 'Post has not yet been liked' })
        }

        // Get remove index
        const removeIndex = post.likes.map((like: any) => like.user.toString()).indexOf(req.user.id)

        post.likes.splice(removeIndex, 1)

        await post.save()

        res.json(post.likes)
    } catch (err) {
        console.log((<Error>err).message)
        res.status(500).send('Server error')
    }
}

export const comment = async (req: any, res: any) => {
    // Check if everything is okay
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    try {
        const user = await UserModel.findById(req.user.id).select('-password')
        const post = await PostModel.findById(req.params.id)

        const newComment = ({
            text: req.body.text,
            name: user.name,
            avatar: user.avatar,
            user: req.user.id
        })

        post.comments.unshift(newComment)

        await post.save()

        res.json(post.comments)
    } catch (err) {
        console.log((<Error>err).message)
        res.status(500).send('Server error')
    }
}

export const deleteComment = async (req: any, res: any) => {
    try {
    const post = await PostModel.findById(req.params.id);

    // Pull out comment
    const comment = post.comments.find(
      (comment: any) => comment.id === req.params.comment_id
    )

    // Make sure comment exists
    if (!comment) {
      return res.status(404).json({ msg: 'Comment does not exist' });
    }
    // Check user
    if (comment.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'User not authorized' });
    }

    // Get remove index
    const removeIndex = post.comments.map((comment: any) => comment.user.toString()).indexOf(req.user.id)

    post.comments.splice(removeIndex, 1)

    await post.save();

    return res.json(post.comments);

    } catch (err) {
        console.log((<Error>err).message)
        res.status(500).send('Server error')
    }
}
