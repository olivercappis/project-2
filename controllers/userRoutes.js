const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');
const { Op } = require('sequelize');



router.get('/men', withAuth, async (req, res) => {
    try {
        const userData = await User.findAll(
            {
                where: {
                    gender: {
                        [Op.ne]: 'female'
                    },
                    id: {
                        [Op.ne]: req.session.user_id
                    }
                },
                attributes: {
                    exclude: ['password',]
                }
            }
        )

        const id = req.session.user_id

        const users = userData.map((user) => user.get({ plain: true }))

        res.render('guys', { users, id: id })
    } catch (err) {
        res.status(500).json(err)
    }
})


router.get('/women', withAuth, async (req, res) => {
    try {
        const userData = await User.findAll(
            {
                where: {
                    gender: {
                        [Op.ne]: 'male'
                    },
                    id: {
                        [Op.ne]: req.session.user_id
                    }
                },
                attributes: {
                    exclude: ['password',]
                }
            }
        )

        const id = req.session.user_id


        const users = userData.map((user) => user.get({ plain: true }))

        res.render('girls', { users, id: id })
    } catch (err) {
        res.status(500).json(err)
    }
})


router.get('/', async (req, res) => {
    try {
        res.render('about_you')
    } catch (err) {
        res.status(500).json(err)
    }
})



module.exports = router
