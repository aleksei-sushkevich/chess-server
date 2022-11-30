const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const settingsSchema = new Schema({
    isReversal: {
        type: Boolean,
        required: true,
    },
    isAutoSave: {
        type: Boolean,
        required: true,
    },
    isKeepAuth: {
        type: Boolean,
        required: true,
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
});

module.exports = mongoose.model('Settings', settingsSchema);