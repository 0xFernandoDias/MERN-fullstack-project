import { connect } from 'mongoose'
import config from 'config'

const DB: string = config.get('mongoURI') // DB uri from json

const connectDB = async () => {
    try {
        await connect(DB, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })

        console.log("MongoDB is connected")
    } catch (err) {
        console.error((<Error>err).message)
        process.exit
    }
}

export default connectDB