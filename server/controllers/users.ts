import { Request, Response } from 'express'
import { validationResult } from 'express-validator' // = rules
import { UserModel } from '../models/User'
import gravatar from 'gravatar'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import config from 'config'

export const registerUser = async (req: Request, res: Response) => {
    // Check if everything is okay
    const errors = validationResult(req) // checkRules4Creation
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    // Get data from Body
    const { name, email, password } = req.body

    try {
        // See if that user already exists
        let user = await UserModel.findOne({ email })

        if (user) {
            return res.status(400).json({ errors: [{ msg: 'User already exists' }] })
        }

        // Get user gravatar
        const avatar = gravatar.url(email, {
            s: '200',
            r: 'pg',
            d: 'mm'
        })

        // Create a new user
        user = new UserModel({
            name,
            email,
            avatar,
            password
        })

        // Encrypt password
        const salt = await bcrypt.genSalt(10)

        user.password = await bcrypt.hash(password, salt)

        // Save in MongoDB
        await user.save()

        // Return jsonwebtoken
        const payload = {
            user: {
                id: user.id // Id from DB
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