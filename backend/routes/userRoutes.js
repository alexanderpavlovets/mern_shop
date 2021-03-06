import express from 'express'
const router = express.Router()
import { authUser, registerUser, getUserProfile, updateUserProfile } from '../controllers/userController.js'
import { protect } from '../middleware/authMiddleware.js'

router.route('/').post(registerUser)
router.post('/login', authUser)
router.route('/profile')
  .get(protect, getUserProfile) // this is an example hot to provide middleware to only 1 endpoint
  .put(protect, updateUserProfile)

export default router