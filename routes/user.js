const express = require('express');
const userController = require('../controllers/user');

const router = express.Router();

router.post('/register', userController.register);
router.post('/login', userController.login);
router.get('/login' , (req, res) => {
    res.render('login');
})
router.get('/register' , (req, res) => {
    res.render('register');
})

module.exports = router;