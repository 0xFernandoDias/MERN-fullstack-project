import { ProfileModel } from '../models/Profile'
import { check, validationResult } from 'express-validator'
import { UserModel } from '../models/User'

// Get my profile
export const getProfile = async (req: any, res: any) => {
    // Get user by _id
    try {
        const profile = await ProfileModel.findOne({ user: req.user.id }).populate('user', ['name', 'avatar'])

        if (!profile) {
            return res.status(400).json({ msg: 'There is no profile for this user' })
        }

        res.json(profile)

    } catch (err) {
        console.error((<Error>err).message)
        res.status(500).send('Server Error')
    }
}

// Create a profile
export const createProfile = async (req: any, res: any) => {
    // Check if everything is okay
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    const {
        location,
        age,
        programmingareas,
        developertype,
        status,
        company,
        skillsandlanguages,
        about,
        website,
        githubusername,
        linkedin,
        stackoverflow,
        upwork
    } = req.body

    const arrayProfileFields = [
        location,
        age,
        programmingareas,
        developertype,
        status,
        company,
        skillsandlanguages,
        about,
        website,
        githubusername,
        linkedin,
        stackoverflow,
        upwork
    ]


    const profileFields: any = {} 

    // Build profile object
    profileFields.user = req.user.id
    
    arrayProfileFields.forEach((elm, index) => {
        /* if (elm == true) {
            profileFields.elm = elm
        } */
        if (elm == skillsandlanguages) {
            profileFields.skillsandlanguages = elm.split(',').map((skill: string) => skill.trim())
        }
    })

    console.log(profileFields)

    res.send('Hello')

}