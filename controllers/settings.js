const Settings = require('../models/settings');

exports.getSettings = (req, res, _) => {
    const userId = req.params.userId;
    Settings.findOne({userId: userId})
        .then(settings => {
            res.status(201).json({
                isReversal: settings.isReversal,
                isAutoSave: settings.isAutoSave,
                isKeepAuth: settings.isKeepAuth,
                message: 'Success!'
            });
        })
        .catch(() => {
            res.status(200).json({
                message: 'Something wrong!',
            });
        });
};

exports.postSettings = (req, res, _) => {
    const isReversal = req.body.isReversal;
    const isAutoSave = req.body.isAutoSave;
    const isKeepAuth = req.body.isKeepAuth;
    const userId = req.body.userId;
    const query = { userId };
    const update = { $set: { isReversal, isAutoSave, isKeepAuth, userId }};
    const options = { upsert: true };

    Settings.updateOne(query, update, options)
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
