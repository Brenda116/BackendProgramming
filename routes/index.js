const express = require('express');
const router = express.Router();

const Stock = require('../models/Stock'); //Update

router.get('/', (req, res) => {
    if(!req.session.user) {
        res.redirect('/auth/login');
    }
    else {
        res.render('pages/home', {user: req.session.user});
    }
});

router.get('/stocks', async (req, res) => {
    if(!req.session.user) {
        res.redirect('/auth/login');
        return;
    }

    const stocks = await Stock.find();
    res.render('pages/stock', { data: stocks });
}); //Update

module.exports = router;
