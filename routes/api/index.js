const router = require('express').Router();

router.get('/', (req, res) => {
    // try {
    //   console.log('/api/');
    //   res.status(200).json();
    // } catch (err) {
    //   res.status(500).json(err);
    // }
    console.log('test');
    res.status(200).json();

  });

  module.exports = router;