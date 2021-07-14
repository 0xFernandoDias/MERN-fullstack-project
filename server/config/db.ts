import mongoose from 'mongoose'
import config from 'config'

const db: string = config.get('mongoURI')

const connectDB = async (): Promise<void> => {
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })

        console.log('MongoDB Connected...')
    } catch (err) {
        console.error((<Error>err).message)
        process.exit
    }
}

export default connectDB