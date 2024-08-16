const router = require('express').Router();
const { Connection } = require('../../models');


router.get('/', async (req, res) => {
    try {
        const connectionData = await Connection.findAll()

        res.json(connectionData)
    } catch (err) {
        res.status(500).json(err)
    }
})



router.post('/', async (req, res) => {
    try {
        const connectionData = await Connection.create(req.body)
        res.status(200).json(connectionData)
    } catch (err) {
        res.status(400).json(err)
    }
})



module.exports = router;
