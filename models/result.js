const mongoose = require('mongoose');

const resultSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    subject: {
        type: String,
        required: true,
    },
    marks: {
        type: Number,
        required: true,
    }
});

const Result = mongoose.model('Result', resultSchema);

module.exports = Result;