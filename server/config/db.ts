import mongoose from 'mongoose'
import config from 'config'

const db: string = config.get('mongoURI')

const connectDB = async (): Promise<void> => {
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        console.log('MongoDB Connected...')
    } catch (err) {
        console.error((err as Error).message)
        process.exit
    }
}

export default connectDB