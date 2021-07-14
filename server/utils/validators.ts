import { check } from 'express-validator'

export const checkRules4Creation = [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Please enter a password with 8 or more characters').isLength({ min: 6 })
]

export const checkRules4Auth = [
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password is requires').exists()
]