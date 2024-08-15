const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeroute');
const testRoutes = require('./test-routes')

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/test', testRoutes)

module.exports = router;
