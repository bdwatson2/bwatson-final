const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const stateSchema = new Schema({
    code: {
        type: String,
        unique: true,
        required: true,
        dropDups: true
    },
    contig: {
        type: String
    }
});

module.exports = mongoose.model('State', stateSchema);