import { check } from 'express-validator'

export const checkCreationRules = [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Please enter a password with 8 or more characters').isLength({ min: 6 })
]

export const checkAuthRules = [
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password is requires').exists()
]

export const checkProfileCreation = [
    check('status').not().isEmpty(),
    check('skillsandlanguages').not().isEmpty()
]

export const checkExperienceRules = [
    check('title', 'Title is required').not().isEmpty(),
    check('company', 'Company is required').not().isEmpty(),
    check('from', 'From date is required').not().isEmpty()
]

export const checkEducationRules = [
    check('school', 'School is required').not().isEmpty(),
    check('degree', 'Degree is required').not().isEmpty(),
    check('fieldtostudy', 'Field to study is required').not().isEmpty(),
    check('from', 'From date is required').not().isEmpty()
]