const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

//note that this route works 
router.get('/test', (req, res) => {
    res.send('This is a test route');
});

router.use((req, res) => res.send('Wrong route!'));

module.exports = router;