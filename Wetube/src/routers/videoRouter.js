import express from 'express'
import {
  watch,
  getedit,
  postEdit,
  getUpload,
  postUpload,
} from '../controllers/videoController'

const videoRouter = express.Router()

videoRouter.get('/:id(\\d+)', watch)
videoRouter.route('/:id(\\d+)/edit').get(getedit).post(postEdit)
videoRouter.route('/upload').get(getUpload).post(postUpload)

export default videoRouter
