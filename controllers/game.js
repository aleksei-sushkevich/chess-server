const History = require('../models/history');

exports.getHistory = async (req, res, next) => {
    const userId = req.params.userId;
    History.find({ userId: userId })
        .then(history => {
            console.log(userId);
            res.status(201).json(history);
        })
        .catch(() => {
            res.status(200).json({
                message: 'Something wrong!'
            });
        });

};

exports.postHistory = (req, res, next) => {
    const body = req.body;

    const history = new History({
        moves: [],
        name: body.name,
        date: new Date().toISOString(),
        userId: body.userId
    });
    for (let index in body.history) {
        history.moves.push(body.history[index]);
    }
    history.save()
        .then(result=>{
            res.status(200).json({
                message: 'Success!'
            });
        })
        .catch(err => {
            res.status(200).json({
                message: 'Something wrong!'
            });
        });
};
