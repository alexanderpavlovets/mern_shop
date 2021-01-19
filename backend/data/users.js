
// to be able to insert this in Mongo - objects mush have the same fields as appropriate model has - User

import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10), // shoul be async. But here only 3 users - ok.
    isAdmin: true
  },
  {
    name: 'John Doe',
    email: 'john@example.com',
    password: bcrypt.hashSync('123456', 10)
  },
  {
    name: 'Jane Doe',
    email: 'jane@example.com',
    password: bcrypt.hashSync('123456', 10)
  },
]

export default users