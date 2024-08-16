const router = require('express').Router();
const { User, Connection } = require('../models');
const withAuth = require('../utils/auth');



router.get('/', withAuth, async (req, res) => {
    try {
        const userData = await User.findAll(
            {
                attributes: {
                    exclude: ['password',]
                },
                include: [
                    {
                        model: User,
                        as: 'connections'
                    }
                ]
            }
        )

        const connectionData = await Connection.findAll()


        const users = userData.map((user) => user.get({ plain: true }))
        const connections = connectionData.map((connection) => connection.get({ plain: true }))


        res.render('profile', { users, connections })
    } catch (err) {
        res.status(500).json(err)
    }
})


module.exports = router
