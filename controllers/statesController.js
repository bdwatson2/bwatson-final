const State =  require('../model/State');

const data = {
    statesJSON: require('../model/states.json')
};

 //from mongoDB
const getAllStates = async (req, res) => {
    const states = await State.find();
    let mergedStateData = {
        ...states,
        ...data
    }
    delete mergedStateData.stateCode;
    res.json(mergedStateData);
}

const getState = async (req, res) => {
    //
}

module.exports = {
    getAllStates,
    getState
}