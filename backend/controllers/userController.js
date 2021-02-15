import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'
import generateToken from '../utils/generateToken.js'

// @desc    Auth user & get token  
// @route   POST /api/users/login 
// @access  Public 
const authUser = asyncHandler(async (req, res) => {
  const {email, password} = req.body

  const user = await User.findOne({ email })

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id)
    })
  } else {
    res.status(401)
    throw new Error('Invalid email or password')
  }
})

// @desc    Register new user  
// @route   POST /api/users
// @access  Public 
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password} = req.body

  const userExists = await User.findOne({ email })

  if(userExists) {
    res.status(400)
    throw new Error('User already exists')
  }

  const user = await User.create({
    name,
    email,
    password
  })

  if(user) {
    res.status(201).json({ // 201 - created
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id)
    })
  } else {
    res.status(400)
    throw new Error('Invalied user data')
  }
})


// @desc    Get user profile  
// @route   GET /api/users/profile 
// @access  Private 
const getUserProfile = asyncHandler(async (req, res) => {

  const user = await User.findById(req.user._id) // here we have this req.user onject, because of "protect" middleware

  if(user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    })
  } else {
    res.status(404)
    throw new Error('User is not found')
  }
})

// @desc    Update user profile  
// @route   PUT /api/users/profile 
// @access  Private 
const updateUserProfile = asyncHandler(async (req, res) => {

  const user = await User.findById(req.user._id) // here we have this req.user onject, because of "protect" middleware

  if(user) {
    user.name = req.body.name || user.name
    user.email = req.body.email || user.email
    if (req.body.password) {
       // we don't check as before (upper 2 rows), because password is encrypted in DB.
       //And if requested to change - will be encrypted via mongoose schema middleware 
      user.password = req.body.password
    }

    const updatedUser = await user.save()

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
      token: generateToken(updatedUser._id)
    })
  } else {
    res.status(404)
    throw new Error('User is not found')
  }
})

export {
  authUser,
  getUserProfile,
  registerUser,
  updateUserProfile
}