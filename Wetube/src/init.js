require('dotenv').config()
import connectDB from './db'
import './models/Video'
import './models/User'
import app from './server'

connectDB()
const PORT = 400

const handleListening = () =>
  console.log(`✅ Server listenting on http://localhost:${PORT} 🚀`)

app.listen(PORT, handleListening)
