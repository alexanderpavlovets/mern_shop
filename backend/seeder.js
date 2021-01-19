
/* 
This is just a script that send a data to DB. 

IMPORTANT - both of these will remove/replace data. Be carefull with them

May be used as stand alone script of via npm scripts
*/


// import mongoose from 'mongoose' // seems not needed
import dotenv from 'dotenv'
import colors from 'colors'
import users from './data/users.js'
import products from './data/products.js'
import User from './models/userModel.js'
import Product from './models/ProductModel.js'
import Order from './models/orderModel.js'
import connectDB from './config/db.js'

dotenv.config()

connectDB()

const importData = async () => {
  try {
    await Order.deleteMany() // if without parameters - deletes everything
    await Product.deleteMany()
    await User.deleteMany()

    const createdUsers = await User.insertMany(users)

    const adminUser = createdUsers[0]._id // [0] because first object is "users" is admin

    const sampleProducts = products.map(product => {
      return { ...product, user: adminUser } // need to add an admin, as a user who added products
    })

    await Product.insertMany(sampleProducts)

    console.log('Data imported'.green.inverse)
    process.exit()
  } catch (error) {
    console.error(`${error}`.red.inverse)
    process.exit(1)
  }
}

const destroyData = async () => {
  try {
    await Order.deleteMany() 
    await Product.deleteMany()
    await User.deleteMany()

    console.log('Data destroyed'.red.inverse) // inverse is like filled 
    process.exit()
  } catch (error) {
    console.error(`${error}`.red.inverse)
    process.exit(1)
  }
}

// running via just node ./seeder.js -d ( -d if want to destroy)
// also npm scripts are created for that in main package.json (not backend)
if (process.argv[2] === '-d') {
  destroyData()
} else {
  importData()
}
