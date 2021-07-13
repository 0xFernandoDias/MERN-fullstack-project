import express from 'express'

const app = express() 

app.get('/example', (req, res) => {
  res.send("It's running!")
})

const PORT = parseInt(process.env.PORT || '5000')

app.listen(PORT, () => {
  console.log(`Ready on: http://localhost:${PORT}`)
})