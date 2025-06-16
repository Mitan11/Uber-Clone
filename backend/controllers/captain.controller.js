const blacklistTokenModel = require("../models/blacklistToken.model");
const captainModel = require("../models/captain.model");
const { createCaptain } = require("../services/captain.service")
const { validationResult } = require('express-validator')

module.exports.registerCaptain = async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ error: errors.array() })
    }

    const { fullname, email, password, vehicle } = req.body;

    const isCaptainAlreadyExist = await captainModel.findOne({ email })

    if (isCaptainAlreadyExist) {
        res.status(400).json({ message: 'Captain already exist' })
    }

    const hashedPassword = await captainModel.hashedPassword(password);

    const captain = await createCaptain({
        firstname: fullname.firstname,
        lastname: fullname.lastname,
        email,
        password: hashedPassword,
        color: vehicle.color,
        plate: vehicle.plate,
        capacity: vehicle.capacity,
        vehicleType: vehicle.vehicleType
    })

    const token = await captain.generateAuthToken()

    res.status(201).json({ token, captain })
}

module.exports.loginCaptain = async (req, res) => {
    const errors = validationResult(req);

    if (!errors) {
        return res.status(400).json({ error: errors.array() })
    }

    const { email, password } = req.body;

    const captain = await captainModel.findOne({ email }).select('+password');;

    if (!captain) {
        return res.status(400).json({ message: 'Invalid email or password' })
    }

    const isMatch = await captain.comparePassword(password)

    if (!isMatch) {
        return res.status(400).json({ message: 'Invalid email or password' })
    }

    const token = captain.generateAuthToken();

    res.cookie('token', token)

    return res.status(200).json({ token, captain })
}

module.exports.getCaptainProfile = async (req, res) => {
    const captain = await captainModel.findById(req.captain._id).select('-password');

    return res.status(200).json({ captain });
}

module.exports.captainLogout = async (req, res) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];

    await blacklistTokenModel.create({ token });

    res.clearCookie('token')

    return res.status(200).json({ message: 'Logged out successfully' });
}