import express from 'express'
import join from '../controllers/userControllerimport'
import trending from '../controllers/videoController'

const globalRouter = express.Router()

const handleHome = (req, res) => res.send('Home')
const handleJoin = (req, res) => res.send('Join')

globalRouter.get('/', handleHome)
globalRouter.get('/join', handleJoin)

export default globalRouter

//
