import mongoose from 'mongoose'
import config from 'config'

const DB: string = config.get('mongoURI') // DB uri from json

const connectDB = async () => {
    try {
        await mongoose.connect(DB, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })

        console.log('MongoDB Connected')
    } catch (err) {
        console.error((<Error>err).message)
        process.exit
    }
}

export default connectDB