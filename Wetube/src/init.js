import connectDB from './db'
import app from './server'
import './models/Video'

connectDB()
const PORT = 400

const handleListening = () =>
  console.log(`✅ Server listenting on http://localhost:${PORT} 🚀`)

app.listen(PORT, handleListening)
