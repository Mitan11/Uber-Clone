const express = require('express')
const { authUser } = require('../middlewares/auth.middlware')
const { getCoordinates, getAutoCompleteSuggestions, getDistanceTime } = require('../controllers/maps.controller')
const { query } = require('express-validator')

const router = express.Router()

router.get('/get-coordinates',
    query('address').isString().isLength({ min: 3 }),
    authUser, getCoordinates)


router.get('/get-distance-time',
    query('origin').isString().isLength({ min: 3 }),
    query('destination').isString().isLength({ min: 3 }),
    authUser,
    getDistanceTime
)

router.get('/get-suggestions',
    query('input').isString().isLength({ min: 3 }),
    authUser,
    getAutoCompleteSuggestions
)

module.exports = router