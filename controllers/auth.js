const User = require('../models/user');
const bcrypt = require('bcryptjs');


exports.signup = async (req, res, next) => {
    const body = req.body;
    try {
        const hashedPw = await bcrypt.hash(body.password, 12);
        const user = new User({
            email: body.email,
            password: hashedPw
        });
        const result = await user.save();
        res.status(201).json({ message: 'User created!', userId: result._id });
    } catch (err) {
        res.status(400).json({
            message: err.message
        })
    }

};

exports.login = async (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    let loadedUser;
    try {
        const user = await User.findOne({ email: email });
        if (!user) {
            throw new Error('A user with this email could not be found.');
        }
        loadedUser = user;
        const isEqual = await bcrypt.compare(password, user.password);
        if (!isEqual) {
            throw new Error('Wrong password!');
        }
        res.status(200).json({userId: loadedUser._id.toString()});
    } catch (err) {
        res.status(400).json({
            message: err.message
        })
    }
}