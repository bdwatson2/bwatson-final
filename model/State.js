const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const stateSchema = new Schema({
    _id: {
        type: String
    },
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

stateSchema.methods.toJSON = 
    function(){
        var obj = this.toObject();
        delete obj.contig;
        delete obj._id;
        return obj;
    };

module.exports = mongoose.model('State', stateSchema);