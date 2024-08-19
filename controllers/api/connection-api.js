const router = require('express').Router();
const { User, Connection } = require('../../models');
const sendEmail = require('../../utils/mailer')


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

        console.log(req.body)
        const connectionData = await Connection.create(req.body)

        const { user_id, connected_to_id } = req.body
        console.log(user_id)
        console.log(connected_to_id)

        const connectedToUser = await User.findByPk(connected_to_id)
        const user = await User.findByPk(user_id)
        console.log(connectedToUser)
        console.log(user)


        const subject = 'New Connection Request';
        const text = `You have a new connection request from ${user.first_name} ${user.last_name}.
        If you're interested you can contact them @${user.email}`;
        await sendEmail(connectedToUser.email, subject, text);


        res.status(200).json(connectionData)


    } catch (err) {
        res.status(400).json(err)
    }
})

router.delete('/:connected_to_id', async (req, res) => {
    try {
        const { connected_to_id } = req.params;
        const user_id = req.session.user_id; 

    
        const connection = await Connection.findOne({
            where: {
                user_id: user_id,
                connected_to_id: connected_to_id,
            },
        });

        if (!connection) {
            return res.status(404).json({ message: 'Connection not found' });
        }

        await connection.destroy();
        res.status(200).json({ message: 'Connection removed' });
    } catch (err) {
        console.error('Failed to delete connection:', err);
        res.status(500).json({ message: 'Internal server error' });
    }
});



module.exports = router;
