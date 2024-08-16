const router = require('express').Router();
const userRoutes = require('./user-api');
const connectionRoutes = require('./connection-api')


router.use('/users', userRoutes);
router.use('/connections', connectionRoutes)


module.exports = router;
