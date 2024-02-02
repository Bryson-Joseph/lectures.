import express from 'express'
import morgan from 'morgan'
import globalRouter from './routers/globalRouter'
const PORT = 40000

const app = express()
const logger = morgan('dev')

app.use(logger)
app.use('/videos', videoRouter)
app.use('/users', userRouter)
app.use('/', globalRouter)

const handleListening = () =>
  console.log(`Server listening on port https://localhost:${PORT}  `)

app.listen(PORT, handleListening)

//
