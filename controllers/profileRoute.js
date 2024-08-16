const router = require('express').Router();
const { User, Connection } = require('../models');
const withAuth = require('../utils/auth');



router.get('/', withAuth, async (req, res) => {
    try {
        const userData = await User.findByPk(req.session.user_id,
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


        const user = userData.map((user) => user.get({ plain: true }))


        res.render('profile', { user })
    } catch (err) {
        res.status(500).json(err)
    }
})


module.exports = router
