const express = require('express');
const { registerCaptain, captainLogout, getCaptainProfile, loginCaptain } = require('../controllers/captain.controller');
const { body } = require('express-validator');
const { authCaptain } = require('../middlewares/auth.middlware');

const router = express.Router()

router.post('/register', [
    body('fullname.firstname').isLength({ min: 3 }).withMessage('First name must be at least 3 characters long'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
    body('email').isEmail().withMessage('Invalid Email'),
    body('vehicle.color').isLength({ min: 3 }).withMessage('Color must be at least 3 characters long'),
    body('vehicle.plate').isLength({ min: 3 }).withMessage('Plate must be at least 3 characters long'),
    body('vehicle.capacity').isInt({ min: 1 }).withMessage('Capacity must be a number and at least 1'),
    body('vehicle.vehicleType').isIn(['car', 'motorcycle', 'auto']).withMessage('Invalid vehicle type'),
], registerCaptain);

router.post('/login' , [
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({min:6}).withMessage('Password must be at least 6 characters long'),
] , loginCaptain);

router.get('/profile' , authCaptain , getCaptainProfile)

router.get('/logout' , authCaptain , captainLogout)

module.exports = router;