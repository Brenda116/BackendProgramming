const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    if(!req.session.user) {
        res.redirect('/auth/login');
    }
    else {
        res.render('pages/home', {user: req.session.user});
    }
});

module.exports = router;
