import { ProfileModel } from '../models/Profile'
import { validationResult } from 'express-validator'
import { UserModel } from '../models/User'
import request from 'request'
import config from 'config'

// Create or update a profile
export const createProfile = async (req: any, res: any) => {
    // Check if everything is okay
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    // Put everything out of the body
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
        upwork,
        youtube,
        instagram,
        twitter,
        facebook
    } = req.body

    // Build profile object
    const profileFields: any = {}

    profileFields.user = req.user.id // = auth?

    if (location) profileFields.location = location
    if (age) profileFields.age = age
    if (status) profileFields.status = status
    if (company) profileFields.company = company
    if (about) profileFields.about = about
    if (website) profileFields.website = website
    if (githubusername) profileFields.githubusername = githubusername
    if (linkedin) profileFields.age = linkedin
    if (stackoverflow) profileFields.stackoverflow = stackoverflow
    if (upwork) profileFields.upwork = linkedin
    if (programmingareas) {
        profileFields.programmingareas = programmingareas.split(',').map((pa: string) => pa.trim())
    }
    if (developertype) {
        profileFields.developertype = developertype.split(',').map((dt: string) => dt.trim())
    }
    if (skillsandlanguages) {
        profileFields.skillsandlanguages = skillsandlanguages.split(',').map((sal: string) => sal.trim())
    }

    // Build social object
    profileFields.social = {}
    if (youtube) profileFields.social.youtube = youtube
    if (instagram) profileFields.social.instagram = instagram
    if (twitter) profileFields.social.twitter = twitter
    if (facebook) profileFields.social.facebook = facebook

    try {
        let profile = await ProfileModel.findOne({ user: req.user.id }) // auth?

        // Update a profile
        if (profile) {
            profile = await ProfileModel.findOneAndUpdate(
                { user: req.user.id },
                { $set: profileFields },
                { new: true }
            )
            return res.json(profile)
        }

        // Create a profile
        profile = new ProfileModel(profileFields)
        await profile.save()
        res.json(profile)

    } catch (err) {
        console.error((<Error>err).message)
        res.status(500).send('Server error')
    }
}

// Get my profile
export const getProfile = async (req: any, res: any) => {
    // Get user by PROFILE ID
    try {
        const profile = await ProfileModel.findOne({ user: req.user.id }).populate('user', ['name', 'avatar']) // auth?

        if (!profile) {
            return res.status(400).json({ msg: 'There is no profile for this user' })
        }

        res.json(profile)

    } catch (err) {
        console.error((<Error>err).message)
        res.status(500).send('Server Error')
    }
}

// Get all profiles
export const getAllProfiles = async (req: any, res: any) => {
    try {
        const profiles = await ProfileModel.find().populate('user', ['name', 'avatar'])

        res.json(profiles)
    } catch (err) {
        console.error((<Error>err).message)
        res.status(500).send('Server error')
    }
}

// Get profile by user ID from URL
export const getProfileById = async (req: any, res: any) => {
    try {
        const profile = await ProfileModel.findOne({ user: req.params.user_id }).populate('user', ['name', 'avatar'])

        if (!profile) {
            return res.status(400).json({ msg: 'Profile not found' })
        }


        res.json(profile)
    } catch (err) {
        console.error((<Error>err).message)

        if ((<any>err).kind == 'ObjectId') {
            return res.status(400).json({ msg: 'Invalid User' })
        }

        res.status(500).send('Server error')
    }
}

// Delete user, profile & posts
export const deleteStuff = async (req: any, res: any) => {
    try {
        // Delete user
        await UserModel.findOneAndRemove({ _id: req.user.id }) // auth?

        // Delete profile
        await ProfileModel.findOneAndRemove({ user: req.user.id }) // auth?

        res.json({ msg: 'It was deleted' })
    } catch (err) {
        console.error((<Error>err).message)
        res.status(500).send('Server error')
    }
}

// Add experience in profile
export const addExperience = async (req: any, res: any) => {
    // Check if everything is okay
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    // Put everything out of the body
    const {
        title,
        company,
        location,
        from,
        to,
        current,
        description
    } = req.body

    // Create a new object
    const newExperience = {
        title,
        company,
        location,
        from,
        to,
        current,
        description
    }


    // Add experience
    try {
        const profile = await ProfileModel.findOne({ user: req.user.id }) // auth?

        profile.experience.unshift(newExperience) // Put the object within the array

        await profile.save()

        res.json(profile)

    } catch (err) {
        console.error((<Error>err).message)
        res.status(500).send('Server Error')
    }
}

// Delete experience
export const deleteExperience = async (req: any, res: any) => {
    try {
        const profile = await ProfileModel.findOne({ user: req.user.id }) // auth?

        // Get remove index
        const removeIndex = profile.experience.map((item: any) => item.id).indexOf(req.params.exp_id)

        profile.experience.splice(removeIndex, 1)

        await profile.save()

        res.json(profile)
    } catch (err) {
        console.error((<Error>err).message)
        res.status(500).send('Server Error')
    }
}

/* Update experience
export const updateExperience = async (req: any, res: any) => {
    try {
        const profile = await ProfileModel.findOneAndUpdate({ user: req.user.id })

    } catch (err) {
        console.error((<Error>err).message)
        res.status(500).send('Server Error')
    }

} */

export const addEducation = async (req: any, res: any) => {
    // Check if everything is okay
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    // Put everything out of the body
    const {
        school,
        degree,
        fieldtostudy,
        from,
        to,
        current,
        description
    } = req.body

    // Create a new object
    const newEducation = {
        school,
        degree,
        fieldtostudy,
        from,
        to,
        current,
        description
    }


    // Add education
    try {
        const profile = await ProfileModel.findOne({ user: req.user.id }) // auth?

        profile.education.unshift(newEducation) // Put the object within the array

        await profile.save()

        res.json(profile)

    } catch (err) {
        console.error((<Error>err).message)
        res.status(500).send('Server Error')
    }
}

// Delete education
export const deleteEducation = async (req: any, res: any) => {
    try {
        const profile = await ProfileModel.findOne({ user: req.user.id }) // auth?

        // Get remove index
        const removeIndex = profile.education.map((item: any) => item.id).indexOf(req.params.edu_id)

        profile.education.splice(removeIndex, 1)

        await profile.save()

        res.json(profile)
    } catch (err) {
        console.error((<Error>err).message)
        res.status(500).send('Server Error')
    }
}

// Get Github repositories
export const getGithubRepos = async (req: any, res: any) => {
    try {
        const options = {
            uri: `https://api.github.com/users/${req.params.username}/repos?per_page=5&sort=updated&direction=desc&client_id=${config.get('githubClientId')}&client_secret=${
            config.get('githubSecret')}`,
            method: 'GET',
            headers: { 'user-agent': 'node.js' }
        }

        request(options, (error: any, response: { statusCode: number }, body: any) => {
            if(error) console.error(error)

            if(response.statusCode !== 200) {
                return res.status(404).json({ msg: 'No Github profile found' })
            }

            res.json(JSON.parse(body))
        })
    } catch (err) {
        console.error((<Error>err).message)
        res.status(500).send('Server Error')
    }
}
