const { Int32 } = require('bson');
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
    },
    funfacts: [String],
    state: {
        type: String
    },
    capital_city: {
        type: String
    },
    nickname: {
        type: String
    },
    population: {
        type: String
    },
    admission_date: {
        type: String
    }
});

stateSchema.test = true;
stateSchema.testdelete = true;

stateSchema.static('postCondition', function() {
    stateSchema.test = false;
    stateSchema.testdelete = true;
})

stateSchema.static('patchCondition', function() {
    stateSchema.test = false;
    stateSchema.testdelete = true;
})

stateSchema.static('deleteCondition', function() {
    stateSchema.test = false;
    stateSchema.testdelete = false;
})

stateSchema.static('baseCondition', function() {
    stateSchema.test = true;
    stateSchema.testdelete = true;
})


stateSchema.methods.toJSON = 
    function(){
        var obj = this.toObject();
        delete obj.contig;
        
        if (stateSchema.test == true){
            delete obj._id;
            delete obj.__v;
        }
        
        if (obj.funfacts.length == 0 && stateSchema.testdelete == true){
            delete obj.funfacts;
        }
        return obj;
};

module.exports = mongoose.model('State', stateSchema);
