const express = require('express');

const router = new express.Router();

router.get('/', (req, res) => res.render('index'));

router.get('/about', (req, res) => res.render('about'));

router.get('*', (req, res) => res.render('404'));

module.exports = router;
