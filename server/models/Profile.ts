import { Schema, model } from 'mongoose'

const ProfileSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId, // ProfileID != UserId
        ref: 'user'
    },
    location: {
        type: String
    },
    age: {
        type: String
    },
    programmingareas: { // web, mobile...
        type: [String],
    },
    developertype: { // front, back...
        type: [String]
    },
    status: {
        type: String, // junior, senior...
        required: true
    },
    company: {
        type: String
    },
    skillsandlanguages: {
        type: [String],
        required: true
    },
    about: {
        type: String
    },
    website: {
        type: String
    },
    githubusername: {
        type: String
    },
    linkedin: {
        type: String
    },
    stackoverflow: {
        type: String
    },
    upwork: {
        type: String
    },

    experience: [
        {
            title: {
                type: String,
                required: true
            },
            company: {
                type: String,
                required: true
            },
            location: {
                type: String,
                required: true
            },
            from: {
                type: Date,
                required: true
            },
            to: {
                type: Date
            },
            current: {
                type: Boolean,
                default: false
            },
            description: {
                type: String
            }
        }
    ],

    education: [
        {
            school: {
                type: String,
                required: true
            },
            degree: {
                type: String,
                required: true
            },
            fieldtostudy: {
                type: String,
                required: true
            },
            from: {
                type: Date,
                required: true
            },
            to: {
                type: Date
            },
            current: {
                type: Boolean,
                default: false
            },
            description: {
                type: String
            }
        }
    ],

    social: {
        youtube: {
            type: String
        },
        instagram: {
            type: String
        },
        twitter: {
            type: String
        },
        facebook: {
            type: String
        }
    },

    date: {
        type: Date,
        default: Date.now
    }
})

export const ProfileModel = model('profile', ProfileSchema)