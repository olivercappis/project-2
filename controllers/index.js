const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeroute');
const testRoutes = require('./test-routes')
const loginRoutes = require('./login')

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/test', testRoutes)
router.use('/login', loginRoutes)


module.exports = router;
