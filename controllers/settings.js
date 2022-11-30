const Settings = require('../models/settings');

exports.getSettings = async (req, res, next) => {
};

exports.postSettings = (req, res, next) => {
    const body = req.body;

    const settings = new History({
        isReversal: body.isReversal,
        isAutoSave: body.isAutoSave,
        isKeepAuth: body.isKeepAuth,
        userId: body.userId
    });

    history.save()
        .then(() => {
            res.status(200).json({
                message: 'Success!'
            });
        })
        .catch(() => {
            res.status(400).json({
                message: 'Something wrong!'
            });
        });
};
