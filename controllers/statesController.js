const State =  require('../model/State');

const data = {
    statesJSON: require('../model/states.json')
};

 //from mongoDB
const getAllStates = async (req, res) => {
    if (req.query.contig == "true")
    {
        const states = await State.find({contig: "true"}).exec();
        res.json(states);
    } 
    else if(req.query.contig == "false") 
    {
        const states = await State.find({contig: "false"}).exec();
        res.json(states);
    }
    else {
        const states = await State.find();
        delete states.contig;
        res.json(states);
    }
}


const getState = async (req, res) => {
    const state = await State.findOne({code: (req.params.state).toUpperCase()}).exec();
    if (state == null)
    {
        res.json({"message":"Invalid state abbreviation parameter"});
    }
    res.json(state);
}


const getFunFact = async (req, res) => {
    const state = await State.findOne({code: (req.params.state).toUpperCase()},'funfacts').exec();
    if (state == null)
    {
        res.json({"message":"Invalid state abbreviation parameter"});
    }
    if (state.funfacts.length == 0)
    {
        const name = await State.findOne({code: (req.params.state).toUpperCase()}).exec();
        res.json({"message":`No Fun Facts found for ${name.state}`});
    } 
    else {
        let num = Math.floor(Math.random() * state.funfacts.length);
        res.json({"funfact":`${state.funfacts[num]}`});
    }
}

const getCapital = async (req, res) => {
    const state = await State.findOne({code: (req.params.state).toUpperCase()},'state capital_city').exec();
    if (state == null)
    {
        res.json({"message":"Invalid state abbreviation parameter"});
    }
    else 
    {
        res.json({"state":`${state.state}`,"capital":`${state.capital_city}`});  
    }
}

//new---under here
const getNickname = async (req, res) => {
    const state = await State.findOne({code: (req.params.state).toUpperCase()},'state nickname').exec();
    if (state == null)
    {
        res.json({"message":"Invalid state abbreviation parameter"});
    }
    else 
    {
        res.json({"state":`${state.state}`,"nickname":`${state.nickname}`});  
    }
}

const getPopulation = async (req, res) => {
    const state = await State.findOne({code: (req.params.state).toUpperCase()},'state population').exec();
    if (state == null)
    {
        res.json({"message":"Invalid state abbreviation parameter"});
    }
    else 
    {
        res.json({"state":`${state.state}`,"population":`${state.population}`});  
    }
}

const getAdmission = async (req, res) => {
    const state = await State.findOne({code: (req.params.state).toUpperCase()},'state admission_date').exec();
    if (state == null)
    {
        res.json({"message":"Invalid state abbreviation parameter"});
    }
    else 
    {
        res.json({"state":`${state.state}`,"admitted":`${state.admission_date}`});  
    }
}



module.exports = {
    getAllStates,
    getState,
    getFunFact,
    getCapital,
    getNickname,
    getPopulation,
    getAdmission
}