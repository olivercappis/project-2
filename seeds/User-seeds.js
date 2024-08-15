const { User } = require('../models')

const userData = [
    {
        email: 'cappis.oliver@gmail.com',
        password: 'pass1234',
        first_name: 'oliver',
        last_name: 'cappis',
        age: 21,
        about_you: 'I am a senior management information systems major at baylor univeristy, in my free time I do jiu jitsu and love watching survivor',
        gender: 'male'
    },
    {
        email: 'ella@gmail.com',
        password: 'pass2345',
        first_name: 'ella',
        last_name: 'connor',
        age: 22,
        about_you: 'heres a paragraph about me',
        gender: 'female'
    },
    {
        email: 'lukas@gmail.com',
        password: 'pass3456',
        first_name: 'lukas',
        last_name: 'puck',
        age: 20,
        about_you: 'heres a paragraph about me',
        gender: 'male'
    },
    {
        email: 'libby@gmail.com',
        password: 'pass4567',
        first_name: 'libby',
        last_name: 'mcgown',
        age: 22,
        about_you: 'heres a paragraph about me',
        gender: 'female'
    },
]

const seedUsers = () => User.bulkCreate(userData)

module.exports = seedUsers