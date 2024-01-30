import express from 'express'

const app = express()

const handleListening = () => console.log('Server listening on port 40000 ')

app.listen(40000, handleListening)

//
