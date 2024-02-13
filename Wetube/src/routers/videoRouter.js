import express from 'express'
import {
  watch,
  getedit,
  upload,
  deleteVideo,
  postEdit,
} from '../controllers/videoController'

const videoRouter = express.Router()

videoRouter.get('/:id(\\d+)', watch)
videoRouter.get('/:id(\\d+)/edit', getedit)
videoRouter.get('/:id(\\d+)/delete', postEdit)

export default videoRouter
