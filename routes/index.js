import express from 'express'
import {
  getUsers,
  Register,
  Login,
  Logout,
  getInfo
} from '../controllers/Users.js'
import { verifyToken } from '../middleware/VerifyToken.js'
import { refreshToken } from '../controllers/RefreshToken.js'

const router = express.Router()

router.get('/users', verifyToken, getUsers)
router.post('/users', Register)
router.post('/login', Login)
router.get('/token', refreshToken)
router.post('/info', getInfo)
router.delete('/logout', Logout)

export default router
