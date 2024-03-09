import express from 'express'
import {
  getJoin,
  postJoin,
  // login,
  getLogin,
  postLogin,
} from '../controllers/userController'
import { home, search } from '../controllers/videoController'
import { publicOnlyMiddleware } from '../middlewares'
// import { get } from 'mongoose'

const rootRouter = express.Router()

rootRouter.get('/', home)
rootRouter.route('/join').all(publicOnlyMiddleware).get(getJoin).post(postJoin)
rootRouter
  .route('/login')
  .all(publicOnlyMiddleware)
  .get(getLogin)
  .post(postLogin)
rootRouter.get('/search', search)

export default rootRouter
