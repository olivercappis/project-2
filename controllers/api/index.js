const router = require('express').Router();
const userRoutes = require('../userRoutes-k');


router.use('/users', userRoutes);


module.exports = router;
