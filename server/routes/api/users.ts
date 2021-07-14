import express, { Request, Response } from 'express'
import { check, validationResult } from 'express-validator' // = rules
import gravatar from 'gravatar'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import config from 'config'
import UserModel from '../../models/User'

const usersRouter = express.Router()

const checkRules = [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Please enter a password with 8 or more characters').isLength({ min: 6 })
]

// @route POST api/users | @description Register User | @access Public
usersRouter.post('/', checkRules, async (req: Request, res: Response) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    const { name, email, password } = req.body

    try {
        // See if user exists
        let user = await UserModel.findOne({ email })

        if (user) {
            return res.status(400).json({ errors: [{ msg: 'User already exists'}] })
        }

        // Get user gravatar
        const avatar = gravatar.url(email, {
            s: '200',
            r: 'pg',
            d: 'mm'
        })

        user = new UserModel({
            name,
            email,
            avatar,
            password
        })

        // Encrypt password
        const salt = await bcrypt.genSalt(10)

        user.password = await bcrypt.hash(password, salt)

        await user.save()

        // Return jsonwebtoken
        const payload = {
            user: {
                id: user.id
            }
        }

        jwt.sign(
            payload,
            config.get('jwtSecret'),
            { expiresIn: 3600000 }, // I GOTTA CHANGE IT
            (err, token) => {
                if(err) throw err
                res.json({token})
            }
            ) 

    } catch (err) {
        console.log((<Error>err).message)
        res.status(500).send('Server error')
    }
}
)

export default usersRouter