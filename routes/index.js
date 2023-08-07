const router = require('express').Router();
const api = require('./api');


router.use('/api', apiRoutes);

router.use((req, res) => {
    return res.send('WRONG ROUTE!!@');
  });

module.exports = router;