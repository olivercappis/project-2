const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeroute');
const testRoutes = require('./test-routes')
const userRoutes = require('./userRoutes')
const profileRoute = require('./profileRoute')

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/test', testRoutes)
router.use('/user', userRoutes)
router.use('/profile', profileRoute)


module.exports = router;
