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
        email: 'ella.connor@gmail.com',
        password: 'pass2345',
        first_name: 'ella',
        last_name: 'connor',
        age: 22,
        about_you: 'I am a grad student at UT, studying occupatoinal therapy. Some of my hobbies are hiking, runnig and climbing.',
        gender: 'female'
    },
    {
        email: 'lukas.puck@gmail.com',
        password: 'pass3456',
        first_name: 'lukas',
        last_name: 'puck',
        age: 20,
        about_you: 'Hi Im Lukas, I work in marketing, and love to play golf on the weekends.',
        gender: 'male'
    },
    {
        email: 'libby@gmail.com',
        password: 'pass4567',
        first_name: 'libby',
        last_name: 'mcgown',
        age: 22,
        about_you: 'I am a kindergarden teacher. I love working with kids and am looking for someone with similar interests',
        gender: 'female'
    },
]

const seedUsers = () => User.bulkCreate(userData, { individualHooks: true, returning: true })

module.exports = seedUsers