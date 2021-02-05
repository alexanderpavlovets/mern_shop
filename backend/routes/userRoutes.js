import express from 'express'
const router = express.Router()
import { authUser, getUserProfile } from '../controllers/userController.js'
import { protect } from '../middleware/authMiddleware.js'

router.post('/login', authUser)
router.route('/profile').get(protect, getUserProfile) // this is an example hot to provide middleware to only 1 endpoint

export default router