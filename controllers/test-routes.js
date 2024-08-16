const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/about_you', async (req, res) => {
    try {
        res.render('about_you')
    } catch (err) {
        res.status(500).json(err)
    }
})

router.get('/girls', async (req, res) => {
    try {
        res.render('girls')
    } catch (err) {
        res.status(500).json(err)
    }
})

router.get('/guys', async (req, res) => {
    try {
        res.render('guys')
    } catch (err) {
        res.status(500).json(err)
    }
})

router.get('/login', async (req, res) => {
    try {
        res.render('login')
    } catch (err) {
        res.status(500).json(err)
    }
})

router.get('/profile', async (req, res) => {
    try {
        res.render('profile')
    } catch (err) {
        res.status(500).json(err)
    }
})

router.get('/selection', async (req, res) => {
    try {
        res.render('selection')
    } catch (err) {
        res.status(500).json(err)
    }
})


module.exports = router