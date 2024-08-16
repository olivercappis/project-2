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
                    }
                },
                attributes: {
                    exclude: ['password',]
                }
            }
        )

        const users = userData.map((user) => user.get({ plain: true }))

        res.render('guys', { users })
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
                    }
                },
                attributes: {
                    exclude: ['password',]
                }
            }
        )

        const users = userData.map((user) => user.get({ plain: true }))

        res.render('girls', { users })
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
