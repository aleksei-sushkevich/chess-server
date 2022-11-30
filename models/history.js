const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const historySchema = new Schema({
    moves: {
        type: Array,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
});

module.exports = mongoose.model('History', historySchema);