const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const stateSchema = new Schema({
    code: {
        type: String,
        unique: true,
        required: true,
        dropDups: true
    }
});

module.exports = mongoose.model('State', stateSchema);