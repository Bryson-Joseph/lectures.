import express from 'express'
import morgan from 'morgan'

const PORT = 40000

const app = express()
const logger = morgan('dev')

const home = (req, res) => {
  return res.send('hello')
}
const login = (req, res) => {
  return res.send('login')
}
app.use(morgan('dev'))
app.get('/', home)
app.get('/login', login)

const handleListening = () =>
  console.log(`Server listening on port https://localhost:${PORT}  `)

app.listen(PORT, handleListening)

//
