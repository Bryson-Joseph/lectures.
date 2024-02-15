import './db'
import './models/video'
import app from './server'

const PORT = 400

const handleListening = () =>
  console.log(`✅ Server listenting on http://localhost:${PORT} 🚀`)

app.listen(PORT, handleListening)
