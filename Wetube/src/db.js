import mongoose from 'mongoose'

const MONGO_URI = 'mongodb://127.0.0.1:27017/Wetube'

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/Wetube', {
      useNewUrlParser: true,
      // useUnifiedTopology: true,
      // useFindAndModify: false,
    })
    console.log('Connected to MongoDB')
  } catch (error) {
    console.error('MongoDB conneeection error:', error)
    process.exit(1)
  }
}

export default connectDB
