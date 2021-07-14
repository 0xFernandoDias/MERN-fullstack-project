import express, { Request, Response } from 'express'
import { check, validationResult } from 'express-validator'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import config from 'config'
import auth from '../../middleware/auth'
import UserModel from '../../models/User'

const authRouter = express.Router()

// @route GET api/auth | @description Test route | @access Public
authRouter.get('/', auth, async (req: any, res) => {
    try {
        const user = await UserModel.findById(req.user.id).select('-password')
        res.json(user)
    } catch (err) {
        console.error((<Error>err).message)
        res.status(500).send('Server Error')
    }
})


const checkRules = [
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password is requires').exists()
]

// @route POST api/auth | @description Authenticate user & get token  | @access Public
authRouter.post('/', checkRules, async (req: Request, res: Response) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    const { name, email, password } = req.body

    try {
        // See if user exists
        let user = await UserModel.findOne({ email })

        if (!user) {
            return res.status(400).json({ errors: [{ msg: 'Invalid Credentials'}] })
        }

        // See if it's the correct password
        const isMatch = await bcrypt.compare(password, user.password)

        if (!isMatch) {
            return res.status(400).json({ errors: [{ msg: 'Invalid Credentials'}] })
        }

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

export default authRouter