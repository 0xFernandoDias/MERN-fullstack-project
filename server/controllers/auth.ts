import { validationResult } from 'express-validator'
import { Request, Response } from 'express'
import { UserModel } from '../models/User'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import config from 'config'

// Login
export const loginUser = async (req: Request, res: Response) => {
    // Check if everything is okay
    const errors = validationResult(req) // checkRules4Auth
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    // Get the email and password from body
    const { email, password } = req.body

    try {
        // See if that user already exists
        let user = await UserModel.findOne({ email })

        if (!user) {
            return res.status(400).json({ errors: [{ msg: 'Invalid Credentials' }] })
        }

        // See if it's the correct password
        const isMatch = await bcrypt.compare(password, user.password)

        if (!isMatch) {
            return res.status(400).json({ errors: [{ msg: 'Invalid Credentials' }] })
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
                if (err) throw err
                res.json({ token })
            }
        )

    } catch (err) {
        console.log((<Error>err).message)
        res.status(500).send('Server error')
    }
}

// Get User by Token
export const getUser = async (req: any, res: any) => {
    try {
        const user = await UserModel.findById(req.user.id).select('-password')
        res.json(user)
    } catch (err) {
        console.error((<Error>err).message)
        res.status(500).send('Server Error')
    }
}