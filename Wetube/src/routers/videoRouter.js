import express from 'express'

const videoRouter = express.Router()

const handleWatchVideo = (req, res) => res.send('Watch video') 9

videoRouter.get('/watch', handleWatchVideo)