const router = require('express').Router();
const { User, Connection } = require('../models');
const withAuth = require('../utils/auth');



router.get('/', withAuth, async (req, res) => {
    try {
        console.log(req.session.user_id)
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


        const user = userData.get({ plain: true })


        res.render('profile', { user })
    } catch (err) {
        res.status(500).json(err)
    }
})


module.exports = router
