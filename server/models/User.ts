import { Schema, model } from 'mongoose'

interface User {
    name: string
    email: string
    password: string
    avatar?: string
    date: Date
}

const UserSchema = new Schema<User>({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
})

export const UserModel = model<User>('User', UserSchema)
