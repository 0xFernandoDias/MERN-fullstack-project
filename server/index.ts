import express from 'express'

import connectDB from '../server/config/db'

import authRouter from '../server/routes/api/auth'
import postsRouter from '../server/routes/api/posts'
import profileRouter from '../server/routes/api/profile'
import usersRouter from '../server/routes/api/users'

const app = express()

// Connect Database
connectDB()

// Middleware
app.use(express.json()) //{ extended: false }

// Define Routes
app.use('/api/users', usersRouter)
app.use('/api/auth', authRouter)
app.use('/api/profile', profileRouter)
app.use('/api/posts', postsRouter)

const PORT = parseInt(process.env.PORT || '5000')

app.listen(PORT, () => {
  console.log(`The Server is ready on: http://localhost:${PORT}`)
})