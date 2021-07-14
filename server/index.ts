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

app.get('/', (req, res) => {
  res.send("It's running!")
})

// Define Routes
app.use('/api/auth', authRouter)
app.use('/api/posts', postsRouter)
app.use('/api/profile', profileRouter)
app.use('/api/users', usersRouter)

const PORT = parseInt(process.env.PORT || '5000')

app.listen(PORT, () => {
  console.log(`Ready on: http://localhost:${PORT}`)
})