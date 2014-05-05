var express = require('express');
var router = express.Router();

/* GET New User page. */
router.get('/', function(req, res) {
    res.render('newuser', { title: 'Add New User' });
});

module.exports = router;
