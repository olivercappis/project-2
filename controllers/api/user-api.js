const router = require('express').Router();
const { User, Connection } = require('../../models');




router.get('/', async (req, res) => {
    try {
        const userData = await User.findAll({
            include: [
                {
                    model: User,
                    as: 'connections'
                }
            ]
        })

        res.json(userData)
    } catch (err) {
        res.status(500).json(err)
    }
})


router.post('/login', async (req, res) => {
    try {

        const userData = await User.findOne({ where: { email: req.body.email } })

        if (!userData) {
            res
                .status(400)
                .json({ message: 'Incorrect email or password, try again' })
            return
        }

        const validPassword = await userData.checkPassword(req.body.password)

        if (!validPassword) {
            res
                .status(400)
                .json({ message: 'Incorrect email or password, try again' })
            return
        }

        req.session.save(() => {
            req.session.user_id = userData.id
            req.session.logged_in = true

            res.json({ user: userData, message: 'you are now logged in' })
        })

    } catch (err) {
        res.status(400).json(err)
    }
})


router.post('/about_you', async (req, res) => {
    try {
        const userData = await User.create(req.body)
        res.status(200).json(userData)
    } catch (err) {
        console.error('Error creating user:', err); 
        res.status(400).json(err)
    }
})


module.exports = router